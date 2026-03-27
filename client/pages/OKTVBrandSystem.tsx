import { useState } from "react";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import {
  CaseStudyTitleBlock,
  HeroImageBlock,
  OverviewBlock,
  TextSectionBlock,
  LessonsBlock,
  NextProjectBlock,
} from "@/components/CaseStudySections";

export default function OKTVBrandSystem() {
  const [mode, setMode] = useState<"portfolio" | "commentary">("portfolio");

  return (
    <CaseStudyTemplate
      commentaryMode={mode === "commentary"}
      onModeChange={setMode}
    >
      {/* Title Block */}
      <CaseStudyTitleBlock
        category="Brand Identity / Motion Design / Broadcast Design"
        title="OK TV — Brand System & Motion Design"
        subtitle="Building the visual and tonal foundation for a Czech television station centered on family entertainment, joy, and community connection."
        metadata={{
          role: "Creative Director & Brand Strategist",
          scope: "Brand identity, visual system, typography, motion design foundation",
          tools: "Figma, Sofia Pro family, strategic brand direction",
          year: "2023",
          type: "Broadcast Brand System",
        }}
      />

      {/* Brand Manual PDF Viewer - Hero Section */}
      <div className="px-10 xl:px-12 py-10">
        <div className="bg-background rounded-sm overflow-hidden border border-[hsl(var(--border))]" style={{ height: "900px" }}>
          <iframe
            src="http://www.dansevera.cz/pdfs/OK-TV_BrandGuidelines_elements_RGB.pdf"
            title="OK TV Brand Manual"
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </div>
        <p className="mt-3 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
          Complete brand guidelines and visual system specification
        </p>
      </div>

      {/* Brand Overview */}
      <OverviewBlock
        items={[
          {
            label: "The Vision",
            value:
              "A Czech television station designed to bring daily moments of joy, entertainment, and pleasant surprises to families. A place where viewers feel part of one big family celebrating Czech culture and creativity.",
          },
          {
            label: "Brand Essence",
            value:
              "Playful confidence, optimism, and authentic community connection. Music videos, live performances, morning shows, interactive contests, and generous viewer rewards combined with genuine cultural support.",
          },
          {
            label: "Strategic Focus",
            value:
              "Support for Czech/Slovak art and crafts, live community interaction, education, innovation, and the elevation of new creative voices in broadcast entertainment.",
          },
        ]}
      />

      {/* Brand Signals / Keywords Section */}
      <div
        className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]"
        data-section="brand-signals"
      >
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          Brand Signals & Principles
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Family Entertainment",
            "Joy",
            "Surprise",
            "Community",
            "Live Interaction",
            "Czech Culture",
            "New Faces",
            "Memorable Content",
            "Education",
            "Optimism",
            "Playful Confidence",
            "Colorful Identity",
            "Interactive Television",
            "Music & Talk Formats",
            "Reward Engagement",
          ].map((keyword) => (
            <div
              key={keyword}
              className="px-4 py-2 rounded-sm text-[10px] tracking-widest-2 uppercase font-body font-medium text-foreground border"
              style={{
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--surface))",
              }}
            >
              {keyword}
            </div>
          ))}
        </div>
      </div>

      {/* Visual System Overview */}
      <div
        className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]"
        data-section="visual-system"
      >
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          Visual System
        </h2>
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-copper font-body font-medium">
          Foundation & Identity
        </p>

        <div className="mt-8 space-y-8">
          {/* Logotype */}
          <div>
            <h3 className="text-[12px] tracking-widest-2 uppercase text-foreground font-body font-semibold mb-3">
              Logotype
            </h3>
            <p className="text-[11px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body">
              A distinctive "OK" mark designed to be playful yet dominant, reflecting the station's entertainment focus with confidence and authority. The logo functions as both primary brand identifier and repeating visual motif throughout the system.
            </p>
          </div>

          {/* Color Palette */}
          <div>
            <h3 className="text-[12px] tracking-widest-2 uppercase text-foreground font-body font-semibold mb-4">
              Color Palette
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { name: "OK Firebrick", hex: "#B7202D", text: "Primary accent" },
                { name: "OK Mikado Yellow", hex: "#FCC42A", text: "Dominant energy" },
                { name: "OK Tekhelet", hex: "#44296A", text: "Premium depth" },
                { name: "OK Magnolia", hex: "#F1E8F3", text: "Soft accent" },
                { name: "OK Alice Blue", hex: "#DAE8F2", text: "Light harmony" },
              ].map((color) => (
                <div key={color.name}>
                  <div
                    className="w-full aspect-square rounded-sm mb-2"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="text-[9px] font-semibold text-foreground font-body">
                    {color.name}
                  </p>
                  <p className="text-[8px] text-[hsl(var(--foreground-caption))] font-body">
                    {color.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-[12px] tracking-widest-2 uppercase text-foreground font-body font-semibold mb-3">
              Typography
            </h3>
            <p className="text-[11px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body mb-3">
              Two fonts from a single family balance entertainment with trust: <span className="text-foreground font-semibold">Sofia Pro</span> as the primary typeface for body and headlines, and <span className="text-foreground font-semibold">Sofia Pro Soft</span> in light weight for subtle, playful accents.
            </p>
          </div>

          {/* Image & Mood Principles */}
          <div>
            <h3 className="text-[12px] tracking-widest-2 uppercase text-foreground font-body font-semibold mb-3">
              Imagery Principles
            </h3>
            <p className="text-[11px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body">
              All photography emphasizes saturated, vivid colors and vibrant composition. The brand rejects desaturated imagery, black-and-white photography, and dark, gloomy moods. Instead, every image should radiate optimism, joy, and the energetic presence of the brand's primary color palette.
            </p>
          </div>

          {/* Complementary Pattern */}
          <div>
            <h3 className="text-[12px] tracking-widest-2 uppercase text-foreground font-body font-semibold mb-3">
              Repeating Pattern
            </h3>
            <p className="text-[11px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body">
              The "OK" logo functions as a repeating visual motif, used at varying scales and opacities to fill negative space, create compositional balance, and reinforce brand presence across media without overwhelming the primary content.
            </p>
          </div>
        </div>
      </div>

      {/* Brand Manual Download */}
      <div className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]">
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          Brand Manual — Complete Reference
        </h2>
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-copper font-body font-medium">
          v0.8, December 2023
        </p>

        <div className="mt-8">
          <p className="text-[12px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body mb-6">
            The comprehensive OK TV brand manual documents the complete visual system, including detailed logotype specifications, extended color palette applications, typography scale, image selection guidelines, and complementary design elements. This foundational document served as the blueprint for all broadcast applications, motion design, and channel implementation.
          </p>

          <div className="text-center">
            <button
              className="inline-flex items-center border border-copper text-copper text-[9px] tracking-widest-2 uppercase font-body font-medium px-5 py-3 hover:bg-copper hover:text-foreground transition-colors"
              onClick={() =>
                window.open(
                  "http://www.dansevera.cz/pdfs/OK-TV_BrandGuidelines_elements_RGB.pdf"
                )
              }
            >
              Download Full Manual (PDF)
            </button>
          </div>
        </div>
      </div>

      {/* Motion & Application Section */}
      <div
        className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]"
        data-section="motion-hint"
      >
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          Motion Design & Application
        </h2>
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-copper font-body font-medium">
          Extended Identity System
        </p>

        <div className="mt-8 max-w-[640px]">
          <p className="text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            The static visual system extended into broadcast motion design, channel packaging, opening sequences, and on-air graphics. Dynamic applications of the logo, color system, and typography created a cohesive visual language across live broadcasts, promotional content, and interactive segments—all reinforcing the station's playful, optimistic, and family-centered brand personality.
          </p>
          <p className="mt-4 text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            Complete case study documentation of motion applications, rollout strategy, and broadcast implementation examples is currently in development.
          </p>
        </div>
      </div>

      {/* Future Expansion Note */}
      <div className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]">
        <p className="text-[10px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body mb-3">
          This Case Study Will Later Include
        </p>
        <ul className="space-y-2">
          {[
            "Motion design applications and broadcast animation systems",
            "Channel packaging and on-air branding strategy",
            "Implementation across promotional content and live broadcasts",
            "Rollout timeline and deployment examples",
            "Extended design decisions and rationale",
            "Interactive television UI and graphics applications",
          ].map((item) => (
            <li
              key={item}
              className="text-[11px] text-[hsl(var(--foreground-muted))] font-body"
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Next Project Navigation */}
      <NextProjectBlock
        title="AI-Assisted Product Content Workflow"
        descriptor="Human-directed, AI-powered content generation system"
        href="/work/ai-content-workflow"
      />
    </CaseStudyTemplate>
  );
}
