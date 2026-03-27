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

export default function ResearchVFXPipeline() {
  const [mode, setMode] = useState<"portfolio" | "commentary">("portfolio");

  return (
    <CaseStudyTemplate
      commentaryMode={mode === "commentary"}
      onModeChange={setMode}
    >
      {/* Title Block */}
      <CaseStudyTitleBlock
        category="AI VFX / Film Postproduction / Applied Research"
        title="Research & Applied AI VFX Pipeline"
        subtitle="Turning unstable generative models into a stable production-ready VFX workflow for theatrical film postproduction."
        metadata={{
          role: "VFX Supervisor, Compositor, AI Pipeline Designer",
          scope: "AI-assisted visual effects, performance correction, shot generation, compositing, delivery",
          tools: "QWEN-Edit, Nano Banana Pro, ComfyUI, Kling, Weavy.AI, Foundry NukeX, NVIDIA AI Retime",
          year: "2025",
          type: "Theatrical Film Postproduction",
        }}
      />

      {/* Hero Image */}
      <HeroImageBlock
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/105da3ce78db249aa62b340b78e33b52a37c31ca?width=1600&height=900"
        alt="Nečekané léto film stills with AI-assisted VFX"
        caption="46 shots delivered for theatrical release: AI-assisted performance correction, character generation, and environmental work seamlessly integrated into the final film"
      />

      {/* Overview Block */}
      <OverviewBlock
        items={[
          {
            label: "The Challenge",
            value:
              "Create a stable VFX workflow from volatile generative AI tools to solve real production problems: fix storytelling issues after the shoot, create otherwise impractical shots, reduce budget and timeline pressure—all while maintaining cinematic quality and integration standards for a theatrical feature film.",
          },
          {
            label: "The Approach",
            value:
              "Research and test dozens of combinations of image and video generative models, identify which specialized tool solved which sub-problem, and chain them into a repeatable postproduction pipeline integrated with traditional compositing discipline.",
          },
          {
            label: "The Result",
            value:
              "46 final shots completed in just over one month by one artist. A stable, production-tested AI-assisted VFX workflow that solved budget, scheduling, and storytelling challenges. The pipeline is now being taught to students at FAMO Písek.",
          },
        ]}
      />

      {/* Challenge Section */}
      <TextSectionBlock
        title="The Problem"
        subtitle="Production Pressure Meets Generative Instability"
        content="Post-production started with real problems. The director and producers identified storytelling issues that required fixes: performance adjustments that would otherwise demand expensive reshoots, shots that were impractical to capture practically, and sequences that needed environmental work to serve the narrative. Simultaneously, budget and timeline constraints made traditional VFX approaches difficult. The central challenge was not producing impressive AI imagery. It was turning volatile generative models—tools built for experimentation, not production—into a reliable workflow that could solve specific filmmaking problems under deadline pressure while meeting theatrical film finishing standards."
        withDivider={true}
      />

      {/* Approach Section */}
      <TextSectionBlock
        title="Research & Pipeline Development"
        subtitle="From Experimentation to Production Discipline"
        content="The breakthrough came from treating this as applied research under production constraints. Rather than relying on a single generative model, Dan tested dozens of combinations of image and video models, evaluated their outputs against real film requirements, and identified which tool solved which sub-problem. A still-image model couldn't generate temporal coherence. A video model alone couldn't achieve the detail or control needed for precise performance work. The solution was chaining specialized tools: using one model for initial frame generation, another for video extension, traditional compositing for integration, and finishing techniques like AI retime for framerate matching. The workflow became repeatable only after systematic testing, documented decisions about when to use which tool, and the discipline to use traditional VFX finishing where generative models fell short."
        withDivider={true}
      />

      {/* EXAMPLE 1: Acting Change */}
      <div className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]">
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          Example 01: Acting Change
        </h2>
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-copper font-body font-medium">
          Performance Correction & Narrative Precision
        </p>

        <div className="mt-8 max-w-[640px]">
          <p className="text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            A pivotal scene where the actress establishes emotional connection with a departing actor required adjustments. The original performance lacked the subtle shifts in expression—a hint of smile, a glance toward the door—that would deepen the narrative resonance. Rather than request a costly reshoot, the solution was to reconstruct the performance in post.
          </p>
          <p className="mt-4 text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            A single frame from the middle of the shot became the starting point. QWEN-Edit was used to generate intermediate stages showing the desired expression changes. These frames were then enhanced through Nano Banana Pro for higher visual quality. Initial exploration used an older WAN model for testing. The final video generation relied on Kling o1 Omni, guided by the Nano Banana frames as reference points to ensure temporal consistency and emotional authenticity.
          </p>
          <p className="mt-4 text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            The generated performance video was then composited back into the original footage using Foundry NukeX, with additional tracking to match camera movement, color correction to preserve lighting continuity, and careful blending to ensure the replacement was imperceptible. This demonstrated that AI could serve narrative precision—not spectacle—and that the most valuable use of these tools in cinema might be fixing storytelling in post rather than creating impossible shots.
          </p>
        </div>

        {/* Gallery placeholder */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-video bg-surface-elevated flex items-center justify-center">
              <div className="text-center">
                <p className="text-[10px] text-[hsl(var(--foreground-caption))]">
                  ORIGINAL PERFORMANCE
                </p>
              </div>
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Before: Original actress performance
            </p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-video bg-surface-elevated flex items-center justify-center">
              <div className="text-center">
                <p className="text-[10px] text-[hsl(var(--foreground-caption))]">
                  AI-CORRECTED PERFORMANCE
                </p>
              </div>
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              After: AI-assisted expression correction
            </p>
          </div>
        </div>

        {/* Process visualization */}
        <div className="mt-8 text-[12px] text-[hsl(var(--foreground-muted))] font-body leading-relaxed p-6 bg-surface rounded-sm border border-[hsl(var(--border))]">
          <p className="font-semibold text-foreground mb-3">WORKFLOW:</p>
          <p>Reference frame → QWEN-Edit (intermediate expressions) → Nano Banana Pro (quality enhancement) → Kling o1 Omni (video generation with reference guidance) → NukeX (tracking, color, blending) → Final composite</p>
        </div>
      </div>

      {/* EXAMPLE 2: Ferret Scene */}
      <div className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]">
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          Example 02: Ferret Scene
        </h2>
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-copper font-body font-medium">
          Directed Animal Performance & Integration Control
        </p>

        <div className="mt-8 max-w-[640px]">
          <p className="text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            This shot presented a different integration challenge. The production filmed with a stuffed ferret as a stand-in while capturing all the camera movement, actor interaction, and prop work that needed to remain intact. The task was not merely replacing the stand-in—it was replacing it with a live, acting ferret that moved in exact synchronization with the scene's choreography.
          </p>
          <p className="mt-4 text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            The original footage was stabilized in the region where the ferret needed to perform. A reference frame was fed into Nano Banana Pro to establish the desired starting animal. Multiple subsequent frames showing a live ferret in various stages of movement (reference material from a separate shoot) were then generated at specific points in the sequence. Hand-drawn directional guidance sketches were created to guide the generative process.
          </p>
          <p className="mt-4 text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            These reference frames and directional guides were fed into Kling o1 Omni through Weavy.AI, which provided superior control over how the model interpolated movement between keyframes. The resulting ferret performance video—realistic, behaviorally coherent, and precisely timed—was then composited back onto the original stabilized plate. Camera and prop movement from the original shoot was tracked back in afterward, creating a seamless hybrid of real production footage and AI-generated performance.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-video bg-surface-elevated flex items-center justify-center">
              <div className="text-center">
                <p className="text-[10px] text-[hsl(var(--foreground-caption))]">
                  STUFFED FERRET STAND-IN
                </p>
              </div>
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Before: Original shot with stand-in prop
            </p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-video bg-surface-elevated flex items-center justify-center">
              <div className="text-center">
                <p className="text-[10px] text-[hsl(var(--foreground-caption))]">
                  LIVE ACTING FERRET
                </p>
              </div>
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              After: AI-generated animal performance seamlessly integrated
            </p>
          </div>
        </div>

        {/* Process visualization */}
        <div className="mt-8 space-y-3">
          <div className="text-[12px] text-[hsl(var(--foreground-muted))] font-body leading-relaxed p-6 bg-surface rounded-sm border border-[hsl(var(--border))]">
            <p className="font-semibold text-foreground mb-3">NANO BANANA PRO (REFERENCE GENERATION)</p>
            <p>Input: Reference frame of live ferret → Output: Enhanced detail and lighting consistency for use as visual guidance</p>
          </div>
          <div className="text-[12px] text-[hsl(var(--foreground-muted))] font-body leading-relaxed p-6 bg-surface rounded-sm border border-[hsl(var(--border))]">
            <p className="font-semibold text-foreground mb-3">KLING O1 OMNI VIA WEAVY.AI (VIDEO GENERATION)</p>
            <p>Inputs: Multiple reference frames at key movement points + hand-drawn directional guidance → Output: Continuous ferret performance video with precise behavioral timing</p>
          </div>
          <div className="text-[12px] text-[hsl(var(--foreground-muted))] font-body leading-relaxed p-6 bg-surface rounded-sm border border-[hsl(var(--border))]">
            <p className="font-semibold text-foreground mb-3">COMPOSITING & TRACKING (NUKE)</p>
            <p>Stabilize original, composite generated ferret, track and reapply original camera/prop movement, match color and lighting, output final shot</p>
          </div>
        </div>
      </div>

      {/* EXAMPLE 3: Parachute Scene */}
      <div className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]">
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          Example 03: Parachute Scene
        </h2>
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-copper font-body font-medium">
          Production Efficiency & Cinematographic Intent
        </p>

        <div className="mt-8 max-w-[640px]">
          <p className="text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            This sequence exemplifies the economic and practical argument for AI-assisted VFX. Rather than attempting to capture aerial footage practically—expensive, complex, and heavily dependent on weather and helicopter availability—the sequence was solved entirely in post.
          </p>
          <p className="mt-4 text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            Drones were deployed to shoot background plates as compositional references, preserving the director of photography's visual control and the film's color palette. Still photographs were captured of the actor in paragliding gear and of the actual paraglide wing featured elsewhere in the film. These reference materials—plates and stills—became the directional inputs for generation.
          </p>
          <p className="mt-4 text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            All references were processed through Nano Banana Pro in ComfyUI, which provided granular control over how the model handled composition, lighting, and detail. ComfyUI was chosen specifically because it gave superior control compared to direct chat-based generation—the structured node workflow allowed iterative refinement and model stacking that simple prompting could not achieve.
          </p>
          <p className="mt-4 text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            Once a successful still frame was generated, it was fed into Kling v2.5 as the first frame of a video generation pass, creating continuous motion that respected the starting image. To match the film's framerate, NVIDIA's vector-based AI retime was applied, delivering the final shot ready for theatrical release. This workflow proved that AI could compress both budget and timeline while maintaining cinematographic integrity and directorial intent.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-8 grid grid-cols-3 gap-5">
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-video bg-surface-elevated flex items-center justify-center">
              <div className="text-center">
                <p className="text-[10px] text-[hsl(var(--foreground-caption))]">TAKE 01</p>
              </div>
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Parachute shot variation 1
            </p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-video bg-surface-elevated flex items-center justify-center">
              <div className="text-center">
                <p className="text-[10px] text-[hsl(var(--foreground-caption))]">TAKE 02</p>
              </div>
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Parachute shot variation 2
            </p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-video bg-surface-elevated flex items-center justify-center">
              <div className="text-center">
                <p className="text-[10px] text-[hsl(var(--foreground-caption))]">TAKE 03</p>
              </div>
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Parachute shot variation 3
            </p>
          </div>
        </div>

        {/* Process visualization */}
        <div className="mt-8 text-[12px] text-[hsl(var(--foreground-muted))] font-body leading-relaxed p-6 bg-surface rounded-sm border border-[hsl(var(--border))]">
          <p className="font-semibold text-foreground mb-3">WORKFLOW:</p>
          <p>Drone plates (cinematography reference) + Actor stills + Paraglide wing stills → Nano Banana Pro in ComfyUI (frame generation with control) → Kling v2.5 (video generation from first frame) → NVIDIA AI Retime (framerate matching) → Final shot</p>
        </div>
      </div>

      {/* Visual Pipeline / Toolchain */}
      <div className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]">
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          The Workflow Architecture
        </h2>
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-copper font-body font-medium">
          Chaining Specialized Tools into Production Pipeline
        </p>

        <div className="mt-8 max-w-[640px] mb-8">
          <p className="text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            No single generative model solved the full problem. The breakthrough was identifying which tool solved which sub-problem and building a repeatable chain. The pipeline combined specialized image and video models, control-oriented interfaces, and traditional compositing discipline.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border border-[hsl(var(--border))] rounded-sm p-5">
            <h3 className="text-[11px] font-semibold tracking-widest-2 uppercase text-foreground font-body">
              QWEN-EDIT
            </h3>
            <p className="mt-2 text-[11px] text-[hsl(var(--foreground-muted))] font-body">
              Used for inpainting and local editing tasks. Precise for modifying specific regions of frames without affecting the broader composition. Critical for performance-correction work.
            </p>
          </div>

          <div className="border border-[hsl(var(--border))] rounded-sm p-5">
            <h3 className="text-[11px] font-semibold tracking-widest-2 uppercase text-foreground font-body">
              NANO BANANA PRO
            </h3>
            <p className="mt-2 text-[11px] text-[hsl(var(--foreground-muted))] font-body">
              Image upsampling and quality enhancement. Used to generate high-fidelity reference frames and to improve output quality from other models before feeding into video generation.
            </p>
          </div>

          <div className="border border-[hsl(var(--border))] rounded-sm p-5">
            <h3 className="text-[11px] font-semibold tracking-widest-2 uppercase text-foreground font-body">
              COMFYUI
            </h3>
            <p className="mt-2 text-[11px] text-[hsl(var(--foreground-muted))] font-body">
              Node-based workflow platform providing superior control over model stacking and iterative refinement compared to chat-based interfaces. Enabled systematic testing and workflow documentation.
            </p>
          </div>

          <div className="border border-[hsl(var(--border))] rounded-sm p-5">
            <h3 className="text-[11px] font-semibold tracking-widest-2 uppercase text-foreground font-body">
              KLING (O1 OMNI & V2.5)
            </h3>
            <p className="mt-2 text-[11px] text-[hsl(var(--foreground-muted))] font-body">
              Video generation models. O1 Omni handled reference-guided generation with precise behavioral control. V2.5 specialized in frame-to-video extension for motion generation.
            </p>
          </div>

          <div className="border border-[hsl(var(--border))] rounded-sm p-5">
            <h3 className="text-[11px] font-semibold tracking-widest-2 uppercase text-foreground font-body">
              WEAVY.AI
            </h3>
            <p className="mt-2 text-[11px] text-[hsl(var(--foreground-muted))] font-body">
              Web interface providing enhanced control workflows for Kling. Allowed keyframe guidance and hand-drawn directional input for precise behavioral choreography.
            </p>
          </div>

          <div className="border border-[hsl(var(--border))] rounded-sm p-5">
            <h3 className="text-[11px] font-semibold tracking-widest-2 uppercase text-foreground font-body">
              FOUNDRY NUKE
            </h3>
            <p className="mt-2 text-[11px] text-[hsl(var(--foreground-muted))] font-body">
              Professional compositing software for integration, tracking, color correction, and seamless blending of generated elements into original footage. Non-negotiable for theatrical delivery.
            </p>
          </div>

          <div className="border border-[hsl(var(--border))] rounded-sm p-5">
            <h3 className="text-[11px] font-semibold tracking-widest-2 uppercase text-foreground font-body">
              NVIDIA AI RETIME
            </h3>
            <p className="mt-2 text-[11px] text-[hsl(var(--foreground-muted))] font-body">
              Vector-based AI interpolation for framerate conversion. Essential for matching generated footage to the film's native framerate without motion artifacts.
            </p>
          </div>
        </div>
      </div>

      {/* Results Block */}
      <MetricBlock
        title="Results & Delivery"
        metrics={[
          { value: "46", label: "Final VFX Shots" },
          { value: "1 Month+", label: "Completion Timeline" },
          { value: "1", label: "Artist (Solo)" },
          { value: "Theatrical", label: "Distribution" },
          { value: "FAMO", label: "Now Taught to Students" },
        ]}
        withDivider={true}
      />

      {/* Why This Mattered */}
      <TextSectionBlock
        title="Why This Work Mattered"
        subtitle="From Experimentation to Production Viability"
        content="This project proved that generative AI, when properly researched and systematically integrated, could function as a legitimate production tool for commercial cinema. It demonstrated that AI-assisted VFX could solve budget constraints without sacrificing quality, fix storytelling problems after the shoot, and create shots that were otherwise impractical or impossible. Most critically, it showed that the value came not from individual models but from the design of the workflow itself—from the discipline of identifying which tool solved which problem and the rigor of integrating AI output with traditional finishing standards. The pipeline moved beyond demo-quality results into production-reliable work that audiences see in a theatrical feature film. The fact that this workflow is now being taught to students at FAMO Písek validates that it represents a genuine advance in practical filmmaking methodology, not merely a curiosity or proof-of-concept."
        withDivider={true}
      />

      {/* Lessons */}
      <LessonsBlock
        title="Lessons & Strategic Insights"
        lessons={[
          {
            title: "Reliability Comes from Tool Chaining, Not Single Models",
            description:
              "No individual model solved the complete problem. The breakthrough was recognizing that different models excelled at different sub-tasks and building a repeatable pipeline that leveraged each tool's strengths while mitigating its weaknesses.",
          },
          {
            title: "Control-Oriented Interfaces Enable Production Use",
            description:
              "ComfyUI and Weavy.AI succeeded because they provided structured control workflows. Chat-based interfaces produced unpredictable results. Repeatable workflows demand interfaces that allow systematic iteration and documentation.",
          },
          {
            title: "AI Becomes Useful Only When Integrated with Traditional Discipline",
            description:
              "Generative output required traditional VFX finishing—tracking, color correction, blending, retime. The integration step was not afterthought; it was essential to the final result. Production-grade work lives at the intersection of new and traditional methods.",
          },
          {
            title: "Storytelling Fixes Can Be More Valuable Than Spectacle",
            description:
              "The performance-correction example demonstrated that the most important use of AI-assisted VFX might not be creating impossible shots, but fixing narrative problems that would otherwise require expensive reshoots.",
          },
          {
            title: "Repeatability Is the Threshold Between Demos and Production",
            description:
              "Early tests produced single impressive results. Production work required workflows that delivered acceptable results consistently across 46 shots under deadline pressure. Discipline and systematic testing were prerequisites to production use.",
          },
        ]}
        withDivider={false}
      />

      {/* Next Project Navigation */}
      <NextProjectBlock
        title="Magnum Photo Booths"
        descriptor="Creative technology installation & immersive experience design"
        href="/work/magnum"
      />
    </CaseStudyTemplate>
  );
}
