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

export default function AITraining() {
  const [mode, setMode] = useState<"portfolio" | "commentary">("portfolio");

  return (
    <CaseStudyTemplate
      commentaryMode={mode === "commentary"}
      onModeChange={setMode}
    >
      {/* Title Block */}
      <CaseStudyTitleBlock
        category="Training & Organizational Change"
        title="Generative AI Training & Team Enablement"
        subtitle="Building workshop curriculum and internal programs that enabled creative and technical teams to adopt generative AI tools effectively without fear or confusion."
        metadata={{
          role: "Creative Director & Curriculum Designer",
          scope: "Workshop design, tool evaluation, documentation, team training, ongoing support",
          tools: "Workshop Curriculum, Internal Documentation, Figma, Slack Bots",
          year: "2023–2024",
          type: "Organizational Learning Program",
        }}
      />

      {/* Hero Image */}
      <HeroImageBlock
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=1600"
        alt="Team workshop in progress"
        caption="Workshop participants engaging with generative AI tools in a hands-on learning environment"
      />

      {/* Overview Block */}
      <OverviewBlock
        items={[
          {
            label: "The Challenge",
            value:
              "Generative AI tools moved fast, but organizational adoption was slow. Teams were confused about which tools to use, skeptical about capabilities, and worried about job displacement. There was no internal knowledge—each person was learning in isolation.",
          },
          {
            label: "The Approach",
            value:
              "Designed hands-on workshops that demystified AI tools, showed practical use cases in teams' actual workflows, and provided ongoing support. Positioned AI as a tool for amplifying creativity, not replacing it.",
          },
          {
            label: "The Result",
            value:
              "Trained 200+ creatives and technologists. Achieved 87% tool adoption. Reduced time-to-productivity by 65% compared to self-directed learning.",
          },
        ]}
      />

      {/* Challenge Section */}
      <TextSectionBlock
        title="The Adoption Challenge"
        subtitle="From Fear to Fluency"
        content="Most AI training fell into two extremes: tech evangelism (overselling AI capabilities) or tech skepticism (emphasizing limitations). Neither served teams that needed practical guidance. The real challenge was moving teams from confusion to fluency—helping them understand what AI could and couldn't do, when to use it and when not to, and how it fit into their workflows. This required patient, contextualized teaching, not hype."
        withDivider={true}
      />

      {/* Curriculum Design Section */}
      <TextSectionBlock
        title="Curriculum Design Philosophy"
        subtitle="Hands-On, Workflow-Focused, Judgment-Centered"
        content="The training program was structured in three layers: (1) Foundations—what generative AI actually is, how it works conceptually, what it's good/bad at. (2) Tool Mastery—hands-on with specific tools (Midjourney, ChatGPT, Stable Diffusion, etc.) in their actual contexts. (3) Workflow Integration—how to add AI to existing processes without disrupting them. Rather than teaching 'how to use AI,' we taught 'how to make better decisions with AI available.' The emphasis was always on judgment, not buttons."
        withDivider={true}
      />

      {/* Workshop Structure Split */}
      <SplitBlock
        title="Workshop Structure & Format"
        content="Workshops were 3 hours in 2–3 sessions. First 45 minutes: conceptual foundations (how models learn, bias, limitations). Next 90 minutes: hands-on experiments. Participants prompted tools, reviewed outputs, discussed quality. Final 45 minutes: workflow mapping—where in their actual job could AI help? Participants left with: (1) Hands-on experience, (2) Understanding of limitations, (3) Concrete next steps for their role. Workshops were cohort-based (8–12 people) to enable peer learning."
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800"
        imageAlt="Workshop materials and participant resources"
        imagePosition="right"
        withDivider={true}
      />

      {/* Knowledge Infrastructure Split */}
      <SplitBlock
        title="Knowledge Infrastructure & Support"
        content="Workshops alone weren't enough. We built persistent knowledge infrastructure: (1) Internal Slack community with daily tips and troubleshooting. (2) Searchable prompt library by department (design, marketing, engineering). (3) Tool evaluation documents explaining trade-offs. (4) Monthly 'advanced technique' sessions for power users. (5) Quick-reference guides for common workflows. This meant teams didn't have to re-discover solutions—knowledge was cumulative and searchable."
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800"
        imageAlt="Documentation and support resources"
        imagePosition="left"
        withDivider={true}
      />

      {/* Process Block */}
      <ProcessBlock
        title="Rollout & Scaling Program"
        steps={[
          {
            number: "01",
            title: "Tool Evaluation & Piloting",
            description:
              "Evaluated 15+ generative AI tools across use cases. Piloted with 3 teams. Established criteria for 'company-approved' tools. Documented pros/cons for each.",
          },
          {
            number: "02",
            title: "Workshop Curriculum Development",
            description:
              "Designed modular curriculum for different roles (designers, writers, engineers, operators). Created slides, exercises, and reference materials. Piloted with two cohorts, iterated based on feedback.",
          },
          {
            number: "03",
            title: "Trainer Preparation",
            description:
              "Trained internal trainers (2 people per department). Ensured trainers were expert users with patience for beginner questions. Rehearsed workshops and Q&A.",
          },
          {
            number: "04",
            title: "Scaling & Ongoing Support",
            description:
              "Rolled out to all departments over 6 months. Ran 24 workshops across 12 cohorts. Established ongoing Slack community and monthly advanced sessions.",
          },
        ]}
        withDivider={true}
      />

      {/* Outcomes Gallery */}
      <GalleryBlock
        title="Training Materials & Artifacts"
        items={[
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "Workshop slide deck",
            caption: "Core workshop curriculum covering foundations, tools, and workflows",
          },
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "Prompt library documentation",
            caption: "Departmental prompt templates and best practices guide",
          },
          {
            imageUrl:
              "https://api.builder.io/api/v1/image/assets/TEMP/74174f7127475317ae71c99e8197fb58944e3c19?width=800",
            alt: "Tool evaluation matrix",
            caption: "Comparison guide for different AI tools and their strengths",
          },
        ]}
        columns={3}
        withDivider={true}
      />

      {/* Results Block */}
      <MetricBlock
        title="Training Outcomes"
        metrics={[
          { value: "200+", label: "Trained Participants" },
          { value: "87%", label: "Adoption Rate" },
          { value: "24", label: "Workshops Delivered" },
          { value: "65%", label: "Faster Productivity" },
          { value: "A+", label: "Satisfaction Rating" },
        ]}
        withDivider={true}
      />

      {/* Lessons */}
      <LessonsBlock
        title="Lessons About Learning & Adoption"
        lessons={[
          {
            title: "Demystification Precedes Adoption",
            description:
              "The biggest adoption barrier wasn't capability—it was understanding. Detailed, patient explanations of 'what AI actually is' removed fear and confusion faster than promotional content.",
          },
          {
            title: "Workflow Context Is Essential",
            description:
              "Teaching AI in the abstract didn't work. Teaching AI within people's actual jobs (designers learning Midjourney for their asset workflows, writers learning ChatGPT for drafting) drove adoption.",
          },
          {
            title: "Peer Learning Multiplies Impact",
            description:
              "Cohort-based workshops created peer learning. Participants teaching each other was more valuable than experts teaching. Building in peer time paid off.",
          },
          {
            title: "Sustained Support Beats One-Time Training",
            description:
              "One workshop was never enough. Teams needed ongoing access to new techniques, troubleshooting, and community. The Slack community was as important as the workshops.",
          },
          {
            title: "Judgment Is Teachable, Not Just Capability",
            description:
              "Teaching people to use tools is easy. Teaching people to make good decisions with tools is harder. Emphasizing judgment (when to use AI, how to evaluate outputs) created more durable adoption.",
          },
        ]}
        withDivider={false}
      />

      {/* Next Project Navigation */}
      <NextProjectBlock
        title="This Portfolio Website"
        descriptor="Building an AI-assisted portfolio platform and design system"
        href="/"
      />
    </CaseStudyTemplate>
  );
}
