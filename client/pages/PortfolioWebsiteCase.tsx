import { useState } from "react";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import {
  CaseStudyTitleBlock,
  HeroImageBlock,
  OverviewBlock,
  TextSectionBlock,
  SplitBlock,
  ProcessBlock,
  GalleryBlock,
  MetricBlock,
  LessonsBlock,
  NextProjectBlock,
} from "@/components/CaseStudySections";

export default function PortfolioWebsiteCase() {
  const [mode, setMode] = useState<"portfolio" | "commentary">("portfolio");

  return (
    <CaseStudyTemplate
      commentaryMode={mode === "commentary"}
      onModeChange={setMode}
    >
      {/* Title Block */}
      <CaseStudyTitleBlock
        category="Personal Brand / Platform"
        title="This Portfolio Website"
        subtitle="Building an AI-assisted, human-directed portfolio platform that serves as both a design system reference and a living case study."
        metadata={{
          role: "Creative Director & Technologist",
          scope: "Full-stack design, implementation, and deployment",
          tools: "React, Vite, TailwindCSS, Builder.io, Figma",
          year: "2024",
          type: "Personal Portfolio Platform",
        }}
      />

      {/* Hero Image */}
      <HeroImageBlock
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/105da3ce78db249aa62b340b78e33b52a37c31ca?width=1600"
        alt="Portfolio website hero"
        caption="The finished site showcases a dark premium aesthetic with modular content blocks"
      />

      {/* Overview Block */}
      <OverviewBlock
        items={[
          {
            label: "The Challenge",
            value:
              "Create a portfolio that demonstrates creative direction, technical implementation, and design system thinking—all simultaneously.",
          },
          {
            label: "The Approach",
            value:
              "Design a reusable component library and layout system that feels premium and cinematic, while remaining fully responsive and accessible.",
          },
          {
            label: "The Result",
            value:
              "A modular case-study platform built with React + Tailwind, featuring a consistent design language across all pages and interactive mode switching.",
          },
        ]}
      />

      {/* Challenge Section */}
      <TextSectionBlock
        title="The Challenge"
        subtitle="Design System vs. Showcase"
        content="Most portfolios are static galleries. This site needed to be three things simultaneously: a real functional platform, a design system reference, and a live case study of its own creation. The visual direction had to establish premium brand presence while remaining modular and scalable. Every element needed to justify its existence as part of a reusable system."
        withDivider={true}
      />

      {/* Approach Section */}
      <TextSectionBlock
        title="Approach & Strategy"
        subtitle="Three-Layer Architecture"
        content="The site was structured as a design system first: (1) Core color tokens and typography scale in CSS variables, (2) Atomic components (buttons, cards, text blocks) built in React, (3) Page-level layouts and case study templates built from the atoms. This hierarchy meant the entire site could be restyled at the token level, and new case studies could be built by composing existing components."
        withDivider={true}
      />

      {/* Visual Design Split */}
      <SplitBlock
        title="Visual Direction"
        content="The dark premium aesthetic draws from cinema color grading and modernist design restraint. Deep indigo backgrounds, soft off-white typography, and warm copper accents create cinematic tension. Large negative space and asymmetrical layouts establish authority without corporate sterility. Every color, spacing unit, and font size is intentional and reusable."
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/105da3ce78db249aa62b340b78e33b52a37c31ca?width=800"
        imageAlt="Visual design palette and typography"
        imagePosition="right"
        withDivider={true}
      />

      {/* Process Block */}
      <ProcessBlock
        title="Implementation Process"
        steps={[
          {
            number: "01",
            title: "Design System Foundation",
            description:
              "Defined CSS variable structure for colors, spacing, and typography. Established Tailwind configuration to reference these tokens, ensuring all styling flows from a single source of truth.",
          },
          {
            number: "02",
            title: "Component Architecture",
            description:
              "Built atomic UI components (buttons, cards, text blocks) and composite components (hero sections, KPI columns, project cards). Each component supports data-driven content and commentary-mode markup.",
          },
          {
            number: "03",
            title: "Page & Template System",
            description:
              "Created reusable page layouts (homepage template, case study template) and section components for case studies (title blocks, split layouts, gallery blocks). Homepage and case studies share the same brand rail and navigation.",
          },
          {
            number: "04",
            title: "Responsive & Interactive",
            description:
              "Ensured desktop-first layouts with mobile-responsive fallbacks. Implemented mode switching (Portfolio / Commentary) to prepare for future annotation and workflow documentation.",
          },
        ]}
        withDivider={true}
      />

      {/* Gallery Section */}
      <GalleryBlock
        title="Key Screens & Components"
        items={[
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/105da3ce78db249aa62b340b78e33b52a37c31ca?width=800",
            alt: "Homepage hero section",
            caption: "Homepage layout with portrait column, hero, and KPI stack",
          },
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/105da3ce78db249aa62b340b78e33b52a37c31ca?width=800",
            alt: "Project card component",
            caption: "Featured project cards with media and metadata",
          },
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/105da3ce78db249aa62b340b78e33b52a37c31ca?width=800",
            alt: "Case study template",
            caption: "Reusable case study page layout and sections",
          },
        ]}
        columns={3}
        withDivider={true}
      />

      {/* Results / Outcomes */}
      <MetricBlock
        title="Outcomes & Impact"
        metrics={[
          { value: "1 System", label: "Design + Code" },
          { value: "4 Cases", label: "Fully Documented" },
          { value: "∞ Scalable", label: "Component-Driven" },
          { value: "2 Modes", label: "Portfolio & Commentary" },
          { value: "100%", label: "Responsive Design" },
        ]}
        withDivider={true}
      />

      {/* Lessons / Takeaways */}
      <LessonsBlock
        title="Lessons & Reusable Systems"
        lessons={[
          {
            title: "Design Systems Enable Speed",
            description:
              "Building the component library first meant each new case study could be assembled in hours, not weeks. The system became the efficiency multiplier.",
          },
          {
            title: "Dark Palettes Require Precision",
            description:
              "In dark mode, color contrast and subtle differentiation are critical. CSS variables made it possible to tweak copper saturation or text opacity globally without breaking the system.",
          },
          {
            title: "Modularity ≠ Rigidity",
            description:
              "Each case study needed unique visual emphasis (hero images, gallery proportions, metadata). The template was rigid enough to maintain brand coherence, flexible enough to breathe.",
          },
          {
            title: "Commentary Architecture Pays Early",
            description:
              "Building with future annotation layers in mind (data-section attributes, stage markers) meant the system was future-proofed without cluttering the visual design.",
          },
          {
            title: "Asymmetry + Restraint = Premium",
            description:
              "The asymmetrical layout, large negative space, and minimal decoration signal expertise and confidence more effectively than decoration or motion.",
          },
        ]}
        withDivider={false}
      />

      {/* Next Project Navigation */}
      <NextProjectBlock
        title="AI Campaigns for Brašnářství Tlustý"
        descriptor="Repositioning a heritage brand through early generative AI advertising"
        href="/work/tlusty-campaigns"
      />
    </CaseStudyTemplate>
  );
}
