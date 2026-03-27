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

export default function MagnumPhotoBooths() {
  const [mode, setMode] = useState<"portfolio" | "commentary">("portfolio");

  return (
    <CaseStudyTemplate
      commentaryMode={mode === "commentary"}
      onModeChange={setMode}
    >
      {/* Title Block */}
      <CaseStudyTitleBlock
        category="Creative Technology & Experience Design"
        title="Magnum Photo Booths"
        subtitle="Designing and implementing immersive photo booth installations that blend AI-assisted imaging, custom hardware, and premium brand experience."
        metadata={{
          role: "Creative Technologist & Experience Designer",
          scope: "Concept, interaction design, software, hardware integration, deployment",
          tools: "TouchDesigner, Custom Software, Computer Vision, Hardware Engineering",
          year: "2022–2023",
          type: "Interactive Installation",
        }}
      />

      {/* Hero Image */}
      <HeroImageBlock
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=1600"
        alt="Magnum photo booth installation"
        caption="The Magnum booth combined premium design with accessible AI-assisted photography"
      />

      {/* Overview Block */}
      <OverviewBlock
        items={[
          {
            label: "The Challenge",
            value:
              "Create a memorable photo booth experience for Magnum (premium luxury brand) that felt innovative and personal, not gimmicky. Participants needed to feel like they were collaborating with technology, not being processed by it.",
          },
          {
            label: "The Approach",
            value:
              "Built a custom interaction design combining touchscreen interface, real-time AI feedback, custom lighting rigs, and instant asset delivery. The experience prioritized human judgment over automation.",
          },
          {
            label: "The Result",
            value:
              "Installed in 8 cities. Captured 45,000+ participants over 18 months. Achieved 92% participant satisfaction and 4.2M social impressions.",
          },
        ]}
      />

      {/* Concept Section */}
      <TextSectionBlock
        title="Concept & Philosophy"
        subtitle="Technology That Serves Creativity"
        content="The Magnum booth needed to be sophisticated without being cold. Rather than fully automating the photo process, we positioned the AI as an assistant—providing feedback, suggesting adjustments, and enabling rapid iteration. Participants spent 5–7 minutes in the booth, collaborating with the system to produce images. The final assets included raw photos, AI-enhanced versions, and a custom video highlight reel delivered instantly."
        withDivider={true}
      />

      {/* Experience Design Split */}
      <SplitBlock
        title="Experience & Interaction Design"
        content="The booth experience unfolded in four stages: (1) Welcome—participant introduction and mood/style selection, (2) Capture—real-time feedback on composition and lighting through an intuitive UI, (3) Refinement—AI-assisted adjustments and selections, (4) Delivery—instant sharing via email/QR code. Each stage was designed to feel collaborative, not passive. The touch interface responded in real-time, and the lighting rig adapted based on composition feedback."
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800"
        imageAlt="Booth interface and user flow"
        imagePosition="right"
        withDivider={true}
      />

      {/* Technical Implementation Split */}
      <SplitBlock
        title="Technical Implementation"
        content="The booth ran on a custom Ubuntu machine with custom Python applications handling image processing, AI styling transfers, and video compilation. TouchDesigner managed the real-time UI and lighting control. Computer vision algorithms provided composition feedback and automatic framing suggestions. The entire system was designed to fail gracefully—if AI features degraded, the booth still functioned as a capable photography tool."
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800"
        imageAlt="Technical system architecture"
        imagePosition="left"
        withDivider={true}
      />

      {/* Process Block */}
      <ProcessBlock
        title="Development & Deployment Process"
        steps={[
          {
            number: "01",
            title: "Concept & Prototyping",
            description:
              "Tested interaction paradigms with low-fidelity prototypes. Validated that real-time feedback improved participant satisfaction versus automated experiences.",
          },
          {
            number: "02",
            title: "Hardware & Software Integration",
            description:
              "Integrated custom camera rig, lighting system, and touchscreen. Built custom software stack for image processing, AI styling, and video generation.",
          },
          {
            number: "03",
            title: "Experience Refinement",
            description:
              "Deployed beta booth in two cities. Gathered 500+ hours of user feedback. Refined UI, lighting responses, and AI parameters.",
          },
          {
            number: "04",
            title: "Production Scaling",
            description:
              "Manufactured 8 booth units with standardized components. Deployed across major cities. Established remote support and analytics infrastructure.",
          },
        ]}
        withDivider={true}
      />

      {/* Installation Variations */}
      <GalleryBlock
        title="Booth Deployments Across Cities"
        items={[
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "Milan installation",
            caption: "Flagship installation in Milan central location",
          },
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "New York popup",
            caption: "Temporary installation during New York Fashion Week",
          },
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "Tokyo experience",
            caption: "Extended residency in Tokyo with localized UI",
          },
        ]}
        columns={3}
        withDivider={true}
      />

      {/* Results Block */}
      <MetricBlock
        title="Results & Engagement"
        metrics={[
          { value: "45K+", label: "Participants" },
          { value: "92%", label: "Satisfaction Rate" },
          { value: "4.2M", label: "Social Impressions" },
          { value: "18", label: "Months Active" },
          { value: "8", label: "Deployments" },
        ]}
        withDivider={true}
      />

      {/* Lessons */}
      <LessonsBlock
        title="Lessons & Takeaways"
        lessons={[
          {
            title: "Real-time Feedback Drives Engagement",
            description:
              "Participants spent 2–3x longer when the system provided real-time compositional feedback. Interaction, not automation, creates engagement.",
          },
          {
            title: "AI Should Be Invisible or Acknowledged",
            description:
              "Framing the AI as a 'styling assistant' rather than 'automatic enhancement' improved perception. Participants preferred understanding what was happening.",
          },
          {
            title: "Hardware Failures Are Feature Opportunities",
            description:
              "When the AI styling failed, the booth fell back to excellent traditional photography. Participants didn't feel disappointed because the fallback was still premium.",
          },
          {
            title: "Experience Exists in Details",
            description:
              "The difference between a good and great booth was in micro-interactions: light feedback on button press, real-time display of composition feedback, instant asset delivery. These details compound.",
          },
          {
            title: "Scalability Requires Standardization",
            description:
              "Manufacturing 8 identical units meant documenting every assembly decision. The standardization process revealed opportunities to improve reliability.",
          },
        ]}
        withDivider={false}
      />

      {/* Next Project Navigation */}
      <NextProjectBlock
        title="AI-Assisted Product Content Workflow"
        descriptor="Designing repeatable, human-directed workflows for AI-generated product content"
        href="/work/ai-content-workflow"
      />
    </CaseStudyTemplate>
  );
}
