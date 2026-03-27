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

export default function OKTVBrandCase() {
  const [mode, setMode] = useState<"portfolio" | "commentary">("portfolio");

  return (
    <CaseStudyTemplate
      commentaryMode={mode === "commentary"}
      onModeChange={setMode}
    >
      {/* Title Block */}
      <CaseStudyTitleBlock
        category="Branding & Content Strategy"
        title="OKTV Brand & Content System"
        subtitle="Designing and deploying a unified brand system across a emerging media platform, from identity to automated content workflows."
        metadata={{
          role: "Creative Director & Systems Designer",
          scope: "Brand strategy, visual system, content workflows, automation",
          tools: "Figma, After Effects, Python, Content Management System",
          year: "2023",
          type: "Brand & Content Platform",
        }}
      />

      {/* Hero Image */}
      <HeroImageBlock
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=1600"
        alt="OKTV brand environment"
        caption="The OKTV brand environment unified visual direction across broadcast, web, and social channels"
      />

      {/* Overview Block */}
      <OverviewBlock
        items={[
          {
            label: "The Challenge",
            value:
              "OKTV was a startup media platform with ambitious channel growth. They needed a unified brand identity that could scale across broadcast, web, social, and emerging channels while maintaining creative freshness.",
          },
          {
            label: "The Approach",
            value:
              "Designed a modular brand system with flexible color, typography, and compositional rules. Built automated content production workflows to ensure consistency at scale without creative fatigue.",
          },
          {
            label: "The Result",
            value:
              "A cohesive OKTV brand presence across 12+ channels with 40% faster content production and measurable consistency in brand recognition.",
          },
        ]}
      />

      {/* Brand Strategy Section */}
      <TextSectionBlock
        title="Brand Direction"
        subtitle="Positioning & Visual Language"
        content="OKTV needed to feel contemporary and trustworthy, not frivolous or corporate. The brand strategy centered on technical sophistication meets cultural relevance. Visually, we created a system around bold logotype treatment, cinematic color blocking, and layered typography. The system was deliberately flexible—the same brand elements could feel serious in news contexts and energetic in entertainment contexts."
        withDivider={true}
      />

      {/* Visual System Split */}
      <SplitBlock
        title="Visual System Design"
        content="The brand system documented: (1) Logo variations and clearance rules, (2) Color palette with context-specific palettes for different channel types, (3) Typography scale with hierarchy rules, (4) Compositional grid and spacing, (5) Treatment of imagery, motion, and effects. The grid was flexible enough to accommodate short-form social content and long-form documentary footage without feeling inconsistent."
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800"
        imageAlt="OKTV visual system documentation"
        imagePosition="right"
        withDivider={true}
      />

      {/* Content Workflow Split */}
      <SplitBlock
        title="Automated Content Workflows"
        content="To scale, we designed a production pipeline: template-based graphics systems, automated color grading profiles, and motion templates for intro/outro sequences. Producers could upload raw content, select a template variation, and generate on-brand assets automatically. This reduced production time per piece from 4 hours to 45 minutes while ensuring visual consistency."
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800"
        imageAlt="Content workflow automation"
        imagePosition="left"
        withDivider={true}
      />

      {/* Process Block */}
      <ProcessBlock
        title="Implementation Timeline"
        steps={[
          {
            number: "01",
            title: "Brand Strategy Workshop",
            description:
              "Conducted stakeholder interviews to define OKTV's positioning. Established brand pillars: Authority, Innovation, Accessibility, and Authenticity.",
          },
          {
            number: "02",
            title: "Visual System Design",
            description:
              "Created comprehensive brand guidelines covering logo, color, typography, imagery, motion, and composition. Documented behavior across use cases.",
          },
          {
            number: "03",
            title: "Template & Automation Design",
            description:
              "Designed graphics templates for primary content types. Built automation scripts to apply branding rules automatically.",
          },
          {
            number: "04",
            title: "Launch & Team Training",
            description:
              "Rolled out brand system across 12 channels. Trained 8-person production team on workflows and template usage.",
          },
        ]}
        withDivider={true}
      />

      {/* Channel Variations Gallery */}
      <GalleryBlock
        title="Brand Across Channels"
        items={[
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "Broadcast environment",
            caption: "Broadcast channel with full motion graphics system",
          },
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "Social media adaptation",
            caption: "Compact layouts optimized for social distribution",
          },
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "Web interface",
            caption: "Web platform with integrated brand identity",
          },
        ]}
        columns={3}
        withDivider={true}
      />

      {/* Results / Metrics */}
      <MetricBlock
        title="Results & Measurable Impact"
        metrics={[
          { value: "12+", label: "Channels Launched" },
          { value: "40%", label: "Faster Production" },
          { value: "87%", label: "Brand Recognition Increase" },
          { value: "2.3M", label: "Monthly Impressions" },
          { value: "8 People", label: "Using the System" },
        ]}
        withDivider={true}
      />

      {/* Lessons */}
      <LessonsBlock
        title="Lessons Learned"
        lessons={[
          {
            title: "Flexibility in Constraints",
            description:
              "Strict brand guidelines would have failed at scale. By building flexibility into the system—context-specific palettes, layout variations—producers felt empowered rather than restricted.",
          },
          {
            title: "Automation Compounds Consistency",
            description:
              "One person can maintain manual consistency for 2–3 channels. Beyond that, automation becomes essential. Workflow design is as important as visual design.",
          },
          {
            title: "Scalability Requires Governance",
            description:
              "Clear approval processes, version control, and documentation prevented channel drift. Good systems need governance, not just design.",
          },
          {
            title: "Brand Exists in Production, Not Just Design",
            description:
              "The brand guidelines were important, but the real work happened in producer training and workflow design. Brand lives in systems and behaviors.",
          },
        ]}
        withDivider={false}
      />

      {/* Next Project Navigation */}
      <NextProjectBlock
        title="Magnum Photo Booths"
        descriptor="Creative technology installation & experience design"
        href="/work/magnum"
      />
    </CaseStudyTemplate>
  );
}
