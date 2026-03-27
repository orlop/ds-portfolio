import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface ProjectCardData {
  id: string;
  title: string;
  descriptor: string;
  /** Image URL for the media slot */
  imageUrl?: string;
  /** Gradient fallback when no image is provided */
  gradientClass?: string;
  /** Internal route link */
  href?: string;
  /** External link */
  externalHref?: string;
  /** Optional commentary stage association for future use */
  commentaryStage?: number;
}

interface ProjectCardProps {
  card: ProjectCardData;
  className?: string;
  /** Commentary mode — shows stage markers */
  commentaryMode?: boolean;
}

export function ProjectCard({ card, className, commentaryMode }: ProjectCardProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (card.externalHref) {
      return (
        <a
          href={card.externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("block group cursor-pointer", className)}
        >
          {children}
        </a>
      );
    }
    if (card.href) {
      return (
        <Link to={card.href} className={cn("block group cursor-pointer", className)}>
          {children}
        </Link>
      );
    }
    return <div className={cn("block group cursor-pointer", className)}>{children}</div>;
  };

  return (
    <CardWrapper>
      {/* Media slot */}
      <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-surface-elevated">
        {card.imageUrl ? (
          <img
            src={card.imageUrl}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ filter: "grayscale(100%)" }}
          />
        ) : (
          <div
            className={cn(
              "w-full h-full transition-transform duration-700 group-hover:scale-105",
              card.gradientClass ?? "bg-gradient-to-br from-[#181825] to-[#0e0e14]"
            )}
          />
        )}
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Commentary marker — rendered when mode is active */}
        {commentaryMode && card.commentaryStage !== undefined && (
          <div className="absolute top-3 left-3 bg-copper text-foreground text-[9px] font-body font-semibold tracking-widest-2 uppercase px-2 py-1 rounded-sm">
            {String(card.commentaryStage).padStart(2, "0")}
          </div>
        )}
      </div>

      {/* Text area */}
      <div className="mt-3 pb-1" data-card-text>
        <h3 className="font-display font-bold text-[11px] tracking-widest-2 uppercase text-foreground transition-colors group-hover:text-copper">
          {card.title}
        </h3>
        <p className="mt-1 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-muted))] font-body">
          {card.descriptor}
        </p>
      </div>
    </CardWrapper>
  );
}
