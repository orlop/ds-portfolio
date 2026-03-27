import { useState } from "react";
import { Link } from "react-router-dom";
import { BrandRail } from "@/components/BrandRail";
import { KpiColumn } from "@/components/KpiColumn";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProcessStrip } from "@/components/ProcessStrip";

// Portrait image — Dan Severa
const PORTRAIT_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2Fa76241d4478f48f59b37a2c92c8eea39";

export default function Index() {
  const [mode, setMode] = useState<"portfolio" | "commentary">("portfolio");

  return (
    <div
      className="min-h-screen bg-background flex flex-col"
      style={{
        background:
          "radial-gradient(87.71% 60.86% at 50% 50%, #15151A 0%, #0C0C0F 100%)",
      }}
      data-page="homepage"
      data-mode={mode}
    >
      {/* ── Desktop layout (lg+) ─────────────────────────────────────── */}
      <div className="hidden lg:flex flex-1 min-h-screen">
        {/* Brand Rail */}
        <BrandRail mode={mode} onModeChange={setMode} />

        {/* Portrait Column */}
        <div className="w-[260px] xl:w-[300px] flex-shrink-0 relative overflow-hidden">
          <img
            src={PORTRAIT_URL}
            alt="Dan Severa"
            className="absolute inset-0 w-full h-full object-cover object-[center_top] grayscale"
            style={{ filter: "grayscale(100%) contrast(1.08)" }}
          />
          {/* subtle bottom fade into background */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0C0C0F] to-transparent" />
        </div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* ── Top row: Hero + KPI ──────────────────────────── */}
          <div className="flex flex-1 min-h-0" data-section="hero-kpi">
            {/* Hero Block */}
            <div
              className="flex-1 flex flex-col justify-start pt-9 px-10 xl:px-12"
              data-section="hero"
            >
              {/* Headline */}
              <h2 className="font-display font-black text-[clamp(36px,4vw,62px)] leading-[0.95] tracking-tight text-foreground uppercase max-w-[520px]">
                Building
                <br />
                Creative Systems
                <br />
                for Stories&nbsp;&amp;&nbsp;Tools.
              </h2>

              {/* Sub-copy */}
              <p className="mt-6 text-[11px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body max-w-[340px]">
                Integrating visual effects, marketing, design, and AI workflows.
                20+ years of creative and technical direction, guided by human
                judgment.
              </p>
            </div>

            {/* KPI Column */}
            <KpiColumn />
          </div>

          {/* ── Project Cards ────────────────────────────────── */}
          <ProjectsSection commentaryMode={mode === "commentary"} />

          {/* ── Process Strip ────────────────────────────────── */}
          <ProcessStrip commentaryMode={mode === "commentary"} />
        </main>
      </div>

      {/* ── Mobile layout (< lg) ─────────────────────────────────────── */}
      <div className="flex lg:hidden flex-col min-h-screen">
        {/* Mobile Header */}
        <MobileHeader mode={mode} onModeChange={setMode} />

        {/* Portrait + Hero stacked */}
        <div className="relative h-[60vw] max-h-[320px] overflow-hidden">
          <img
            src={PORTRAIT_URL}
            alt="Dan Severa"
            className="w-full h-full object-cover object-[center_20%] grayscale"
            style={{ filter: "grayscale(100%) contrast(1.08)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0F]/70 via-transparent to-[#0C0C0F]/30" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C0C0F] to-transparent" />
        </div>

        {/* Hero */}
        <div className="px-6 pt-6 pb-4" data-section="hero-mobile">
          <h2 className="font-display font-black text-[clamp(28px,8vw,44px)] leading-[0.95] tracking-tight text-foreground uppercase">
            Building
            <br />
            Creative Systems
            <br />
            for Stories&nbsp;&amp;&nbsp;Tools.
          </h2>
          <p className="mt-4 text-[11px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body">
            Integrating visual effects, marketing, design, and AI workflows.
            20+ years of creative and technical direction.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 gap-6 px-6 py-6 border-t border-[hsl(var(--border))]" data-section="kpi-mobile">
          {[
            { value: "20+ YEARS", label: "Creative Industry Leadership" },
            { value: "4500+ SHOTS", label: "Delivered in VFX Pipelines" },
            { value: "€4M CAMPAIGNS", label: "Led as Director" },
            { value: "AI PIPELINES", label: "Since 2019" },
          ].map((kpi) => (
            <div key={kpi.value}>
              <div className="font-display font-black text-[20px] leading-none tracking-tight text-foreground uppercase">
                {kpi.value}
              </div>
              <div className="mt-1.5 text-[8px] tracking-widest-2 uppercase text-copper font-body font-medium">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects — vertical on mobile */}
        <div className="px-6 pb-6 flex flex-col gap-6 border-t border-[hsl(var(--border))] pt-6" data-section="projects-mobile">
          <ProjectsSection commentaryMode={mode === "commentary"} />
        </div>

        {/* Process Strip */}
        <div className="border-t border-[hsl(var(--border))] px-6 pt-4 pb-8">
          <ProcessStrip commentaryMode={mode === "commentary"} />
        </div>
      </div>
    </div>
  );
}

/* ── Mobile Header ──────────────────────────────────────────── */
interface MobileHeaderProps {
  mode: "portfolio" | "commentary";
  onModeChange: (mode: "portfolio" | "commentary") => void;
}

function MobileHeader({ mode, onModeChange }: MobileHeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-5 border-b border-[hsl(var(--border))]">
      <div>
        <Link to="/" className="block no-underline">
          <h1 className="font-display font-black text-[18px] leading-none tracking-tight text-foreground uppercase">
            DAN SEVERA
          </h1>
          <p className="mt-1 text-[7px] tracking-widest-2 text-[hsl(var(--foreground-muted))] uppercase font-body">
            Creative Systems Designer &amp; Technologist
          </p>
        </Link>
      </div>
      <nav className="flex items-center gap-4">
        <Link
          to="/work"
          className="text-[9px] tracking-widest-2 font-body uppercase text-[hsl(var(--foreground-muted))] hover:text-foreground transition-colors"
        >
          WORK
        </Link>
        <Link
          to="/about"
          className="text-[9px] tracking-widest-2 font-body uppercase text-[hsl(var(--foreground-muted))] hover:text-foreground transition-colors"
        >
          ABOUT
        </Link>
        <button
          onClick={() =>
            onModeChange(mode === "portfolio" ? "commentary" : "portfolio")
          }
          className="text-[8px] tracking-widest-2 font-body uppercase text-copper border border-copper/40 px-2 py-1 hover:bg-copper/10 transition-colors"
        >
          {mode === "portfolio" ? "PORTFOLIO" : "COMMENTARY"}
        </button>
      </nav>
    </header>
  );
}
