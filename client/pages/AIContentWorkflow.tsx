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

export default function AIContentWorkflow() {
  const [mode, setMode] = useState<"portfolio" | "commentary">("portfolio");

  return (
    <CaseStudyTemplate
      commentaryMode={mode === "commentary"}
      onModeChange={setMode}
    >
      {/* Title Block */}
      <CaseStudyTitleBlock
        category="Workflow Design & AI Implementation"
        title="AI-Assisted Product Content Workflow"
        subtitle="Designing a human-directed, AI-powered system for generating product photography, lifestyle imagery, and marketing content at scale without sacrificing quality or brand coherence."
        metadata={{
          role: "Creative Director & Systems Designer",
          scope: "Workflow design, AI prompt engineering, quality control, team training",
          tools: "Midjourney, Stable Diffusion, Python, Airtable, Figma",
          year: "2023–2024",
          type: "Content Production System",
        }}
      />

      {/* Hero Image */}
      <HeroImageBlock
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=1600"
        alt="AI-generated product content showcase"
        caption="Product imagery generated through the AI-assisted workflow, maintaining brand consistency"
      />

      {/* Overview Block */}
      <OverviewBlock
        items={[
          {
            label: "The Challenge",
            value:
              "Traditional product photography was slow (2–4 weeks per shoot) and expensive. The client needed a way to rapidly generate product imagery, lifestyle shots, and social variations while maintaining brand identity and quality standards.",
          },
          {
            label: "The Approach",
            value:
              "Designed a workflow where creatives directed AI generation rather than being replaced by it. Built quality gates, brand guardrails, and rapid iteration loops. AI handled generation; humans handled direction and curation.",
          },
          {
            label: "The Result",
            value:
              "Reduced content production time from 3 weeks to 3–5 days. Generated 2,000+ on-brand product variations. Achieved 94% internal quality approval rate.",
          },
        ]}
      />

      {/* Challenge Section */}
      <TextSectionBlock
        title="The Core Challenge"
        subtitle="Speed vs. Quality vs. Brand Coherence"
        content="The paradox: AI generation is fast but inconsistent. Manual photography is high-quality but slow. The solution wasn't to choose one—it was to design a workflow where AI's speed served human judgment. The workflow needed to generate variations quickly, enable rapid human feedback, and maintain brand guidelines without being restrictive."
        withDivider={true}
      />

      {/* Approach Section */}
      <TextSectionBlock
        title="Design Philosophy"
        subtitle="Human Direction, AI Execution"
        content="Rather than 'full automation,' the system was designed as human + AI collaboration. Creative directors provided direction (mood boards, reference images, style notes). AI generated variations rapidly. Humans curated, refined, and approved. This meant AI took 80% of the execution burden, freeing creatives for strategic decisions. The workflow documented brand rules as 'prompt libraries' that could be versioned and improved over time."
        withDivider={true}
      />

      {/* Workflow Split */}
      <SplitBlock
        title="The Production Workflow"
        content="(1) Strategy: Define mood, style, product context through mood boards and reference images. (2) Prompt Engineering: Write detailed, tested prompts that encode brand direction. (3) Generation: Run AI models with multiple seed variations. (4) Curation: Humans review 50–100 variations, select top 10–15. (5) Refinement: Selective post-production (color correction, subtle edits). (6) Approval: Quality review and brand consistency check. (7) Distribution: Organize assets and deliver to marketing teams. The entire cycle takes 3–5 days per product category."
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800"
        imageAlt="Workflow diagram and process"
        imagePosition="right"
        withDivider={true}
      />

      {/* Brand Guardrails Split */}
      <SplitBlock
        title="Brand Guardrails & Consistency"
        content="Brand coherence wasn't enforced by limitation—it was enabled by clarity. We documented: (1) Visual archetypes (which product contexts appear in which settings), (2) Color palettes per season, (3) Lighting styles and mood preferences, (4) Prohibited elements and aesthetic directions. These were encoded in prompt templates and reference image libraries. New team members could quickly generate on-brand content by following the templates, while experienced creatives could iterate beyond them strategically."
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800"
        imageAlt="Brand consistency framework"
        imagePosition="left"
        withDivider={true}
      />

      {/* Process Block */}
      <ProcessBlock
        title="Implementation & Rollout"
        steps={[
          {
            number: "01",
            title: "Workflow Design & Prototyping",
            description:
              "Designed the workflow with one client product category. Tested generation → curation → approval loops. Established quality benchmarks and approval criteria.",
          },
          {
            number: "02",
            title: "Prompt Library & Brand Documentation",
            description:
              "Built reusable prompt templates encoding brand direction. Documented visual archetypes and color palettes. Created reference image libraries for quick direction.",
          },
          {
            number: "03",
            title: "Tool Integration & Automation",
            description:
              "Connected Midjourney, Stable Diffusion, and internal tools. Built asset management system in Airtable. Set up automated batch processing and approval workflows.",
          },
          {
            number: "04",
            title: "Team Training & Iteration",
            description:
              "Trained 12-person creative and marketing team on the workflow. Established feedback loops to refine prompts and brand guidelines quarterly.",
          },
        ]}
        withDivider={true}
      />

      {/* Gallery: Content Examples */}
      <GalleryBlock
        title="Generated Content Examples"
        items={[
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "Product lifestyle shot",
            caption: "Lifestyle product imagery generated for social campaigns",
          },
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "Seasonal product variations",
            caption: "Seasonal color variations maintaining brand palette",
          },
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "Social media content",
            caption: "Rapid social media variations generated in bulk",
          },
        ]}
        columns={3}
        withDivider={true}
      />

      {/* Results Block */}
      <MetricBlock
        title="Production Impact"
        metrics={[
          { value: "2000+", label: "Assets Generated" },
          { value: "94%", label: "Approval Rate" },
          { value: "80%", label: "Time Savings" },
          { value: "12", label: "Team Members Trained" },
          { value: "3–5", label: "Days per Batch" },
        ]}
        withDivider={true}
      />

      {/* Lessons */}
      <LessonsBlock
        title="Key Insights"
        lessons={[
          {
            title: "Documentation Enables Scale",
            description:
              "Rigorous documentation of brand rules, archetypes, and prompt templates let the workflow scale. Without it, quality became inconsistent and creatives became decision-fatigued.",
          },
          {
            title: "Curation Is the Real Skill",
            description:
              "AI can generate 100 variations; humans must recognize the 2–3 that are exceptional. The workflow elevated curation from a minor task to the core creative skill.",
          },
          {
            title: "Version Control Matters",
            description:
              "Treating prompts and brand guidelines as versioned code (not static documents) meant the workflow could improve continuously without breaking past work.",
          },
          {
            title: "AI Accelerates Iteration, Not Decisions",
            description:
              "AI excels at rapid iteration on a clear direction. If the direction is unclear, AI generates inconsistent results. Strategic clarity is prerequisites for AI acceleration.",
          },
          {
            title: "Human Judgment Is the Constraint",
            description:
              "The workflow was never limited by AI capability—it was always limited by human review bandwidth. Optimizing the review process was key to scaling.",
          },
        ]}
        withDivider={false}
      />

      {/* Next Project Navigation */}
      <NextProjectBlock
        title="Generative AI Training & Team Enablement"
        descriptor="Teaching creative teams to leverage generative AI effectively"
        href="/work/ai-training"
      />
    </CaseStudyTemplate>
  );
}
