import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "APPROACH", href: "/approach" },
  { label: "CONTACT", href: "/contact" },
];

interface BrandRailProps {
  mode?: "portfolio" | "commentary";
  onModeChange?: (mode: "portfolio" | "commentary") => void;
}

export function BrandRail({ mode = "portfolio", onModeChange }: BrandRailProps) {
  const location = useLocation();

  return (
    <aside className="w-[160px] flex-shrink-0 flex flex-col border-r border-[hsl(var(--border))] py-8 px-6 relative z-10">
      {/* Brand Name */}
      <div className="mb-8">
        <Link to="/" className="block no-underline">
          <h1 className="font-display font-black text-[22px] leading-[1.05] tracking-tight text-foreground uppercase">
            DAN
            <br />
            SEVERA
          </h1>
          <p className="mt-2 text-[8px] tracking-widest-2 text-[hsl(var(--foreground-muted))] uppercase leading-relaxed font-body">
            CREATIVE SYSTEMS
            <br />
            DESIGNER &amp; TECHNOLOGIST
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex flex-col gap-5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-[10px] tracking-widest-2 font-body font-medium uppercase transition-colors duration-200",
                isActive
                  ? "text-foreground"
                  : "text-[hsl(var(--foreground-muted))] hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Mode Toggle */}
      <ModeToggle mode={mode} onModeChange={onModeChange} />
    </aside>
  );
}

interface ModeToggleProps {
  mode: "portfolio" | "commentary";
  onModeChange?: (mode: "portfolio" | "commentary") => void;
}

function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Indicator dot */}
      <div className="w-4 h-4 rounded-full border border-[hsl(var(--border-strong))] bg-[hsl(var(--surface))] flex items-center justify-center">
        <div
          className={cn(
            "w-1.5 h-1.5 rounded-full transition-colors",
            mode === "portfolio" ? "bg-copper" : "bg-foreground"
          )}
        />
      </div>
      <button
        onClick={() =>
          onModeChange?.(mode === "portfolio" ? "commentary" : "portfolio")
        }
        className="text-[8px] tracking-widest-2 font-body uppercase text-[hsl(var(--foreground-muted))] hover:text-foreground transition-colors"
      >
        {mode === "portfolio" ? "PORTFOLIO" : "COMMENTARY"}
      </button>
    </div>
  );
}
