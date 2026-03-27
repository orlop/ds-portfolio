import { Link, useLocation } from "react-router-dom";
import { BrandRail } from "@/components/BrandRail";

interface PlaceholderPageProps {
  title?: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  const location = useLocation();
  const pageName = title ?? location.pathname.replace("/", "").toUpperCase();

  return (
    <div
      className="min-h-screen flex"
      style={{
        background:
          "radial-gradient(87.71% 60.86% at 50% 50%, #15151A 0%, #0C0C0F 100%)",
      }}
    >
      <BrandRail />

      <main className="flex-1 flex flex-col items-center justify-center px-12">
        <div className="max-w-lg text-center">
          <p className="text-[9px] tracking-widest-2 uppercase text-copper font-body mb-4">
            Coming Soon
          </p>
          <h1 className="font-display font-black text-[48px] leading-none tracking-tight text-foreground uppercase mb-6">
            {pageName}
          </h1>
          <p className="text-[12px] text-[hsl(var(--foreground-muted))] font-body leading-relaxed mb-8">
            This section is being developed. Continue the conversation to fill
            in the content for this page.
          </p>
          <Link
            to="/"
            className="inline-flex items-center border border-[hsl(var(--border-strong))] text-foreground text-[9px] tracking-widest-2 uppercase font-body font-medium px-5 py-2.5 hover:border-copper hover:text-copper transition-colors duration-200"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
