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

export default function TlustyAdCampaigns() {
  const [mode, setMode] = useState<"portfolio" | "commentary">("portfolio");

  return (
    <CaseStudyTemplate
      commentaryMode={mode === "commentary"}
      onModeChange={setMode}
    >
      {/* Title Block */}
      <CaseStudyTitleBlock
        category="AI Advertising & Brand Repositioning"
        title="AI Ad Campaigns for Brašnářství Tlustý"
        subtitle="Repositioning a heritage leather brand through early generative-AI campaigns, custom LoRA training, and tightly art-directed product integration."
        metadata={{
          role: "Creative Director & AI Systems Designer",
          scope: "Campaign concept, art direction, image generation, product photography, LoRA training, compositing, campaign execution",
          tools: "Stable Diffusion, ControlNet, custom LoRAs, text embeddings, Midjourney, studio & location photography, compositing",
          year: "2022",
          type: "Advertising Campaign Series",
        }}
      />

      {/* Hero Image */}
      <HeroImageBlock
        imageUrl="https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2Faee1df2a7da145c6b2e91cf10785d0b8?format=webp&width=1600&height=1200"
        alt="Holly campaign hero"
        caption="The 'Holly' campaign: repositioning the brand toward new female audiences with refined, editorial fashion positioning"
      />

      {/* Overview Block */}
      <OverviewBlock
        items={[
          {
            label: "The Challenge",
            value:
              "Reposition a traditional Czech leather goods brand (established 1981) into new market niches—female-forward fashion, patriotic/commercial, and premium BDSM—while moving existing inventory rapidly. Generative AI was in its infancy. The technology was unreliable, but the commercial potential was clear.",
          },
          {
            label: "The Approach",
            value:
              "Use Stable Diffusion and custom LoRA training not as a gimmick, but as a production pipeline. Combine real product photography with AI-generated fashion and lifestyle contexts. Develop repeatable, art-directed workflows that kept outputs commercially viable and brand-aligned.",
          },
          {
            label: "The Result",
            value:
              "Three parallel campaigns that each succeeded on their own terms: Holly brought in a new customer profile; Pravda vítězí became the most successful campaign in the company's history; Vstříc novým zážitkům established the BDSM line as a premium category with record sales.",
          },
        ]}
      />

      {/* Challenge Section */}
      <TextSectionBlock
        title="The Problem"
        subtitle="Early Generative AI Meets Product Advertising"
        content="In early 2022, Stable Diffusion was revolutionary but volatile. Image quality, consistency, and product accuracy were unpredictable. Most generative AI work at the time was either artistic exploration or marketing novelty. But Brašnářství Tlustý had a real business problem: they needed to reach new audiences, test new market niches, and move inventory—fast. The challenge was not producing pretty AI imagery. It was building a repeatable, commercially viable production system from unstable technology, where every final output had to respect the real products, serve strategic positioning, and deliver measurable business results."
        withDivider={true}
      />

      {/* Strategy Section */}
      <TextSectionBlock
        title="Strategic Approach"
        subtitle="AI as Production Infrastructure, Not Decoration"
        content="Rather than use AI for stylistic effects, the strategy was to use it as a positioning tool. Three distinct campaign worlds were designed for three distinct audiences: Holly spoke to a premium, fashion-forward female customer. Pravda vítězí (Fact of Victory) was patriotic, assertive, and inventory-focused. Vstříc novým zážitkům pushed into the BDSM niche with visual confidence and taste. Each required different AI guidance, different product integration approaches, and different creative direction. The core insight was that AI could extend the brand into expensive-to-test niches without needing traditional photoshoots or lengthy campaign planning. But only if the workflow was technically rigorous and creatively disciplined."
        withDivider={true}
      />

      {/* Workflow Section */}
      <ProcessBlock
        title="Production Workflow"
        steps={[
          {
            number: "01",
            title: "Campaign Direction & Concepting",
            description:
              "For each campaign, the communication strategy, target audience, and visual world were defined. Mood boards and reference imagery shaped the aesthetic direction. Midjourney was used early for rapid directional exploration and brand-communication brainstorming.",
          },
          {
            number: "02",
            title: "Product & Location Photography",
            description:
              "Real product shots were captured in studio and on location. Leather goods were photographed from multiple angles under controlled and natural light. Model and lifestyle shots were captured in environments that could be either enhanced or fully replaced with AI generation.",
          },
          {
            number: "03",
            title: "Custom LoRA & Embedding Training",
            description:
              "Custom LoRA (Low-Rank Adaptation) models were trained on the specific leather goods, textures, and product lines. Text embeddings were created to encode desired aesthetic qualities, brand positioning, and visual consistency rules. This custom training was essential for repeatability and control.",
          },
          {
            number: "04",
            title: "ControlNet-Guided Generation",
            description:
              "Using ControlNet, simple product photographs or compositional sketches were transformed into high-quality fashion and editorial imagery. The real product remained recognizable and desirable; the surrounding world was AI-generated and consistent with campaign direction.",
          },
          {
            number: "05",
            title: "Environment & Context Generation",
            description:
              "Backgrounds, landscapes, fashion contexts, and lifestyle environments were generated using the trained models and custom embeddings. Multiple variations were produced to provide creative optionality while maintaining visual consistency.",
          },
          {
            number: "06",
            title: "Compositing & Refinement",
            description:
              "Generated imagery was composited with real product photography, refined for photorealism, color-corrected, and prepared for final campaign deployment. Subtle post-production ensured seamless integration between real and generated elements.",
          },
        ]}
        withDivider={true}
      />

      {/* HOLLY Campaign */}
      <div className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]">
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          Campaign 01: Holly
        </h2>
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-copper font-body font-medium">
          Expanding to Premium Female Audiences
        </p>

        <div className="mt-8 max-w-[640px]">
          <p className="text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            Holly was conceived as a soft entry into the female fashion market. Rather than aggressively sell leather goods, Holly positioned them as part of a refined, editorial lifestyle. The aesthetic was pastel, elegant, contemporary. AI-generated fashion contexts surrounded real, photographed leather products, creating a world where the brand existed naturally alongside high-style clothing, architecture, and lifestyle.
          </p>
          <p className="mt-4 text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            The campaign succeeded in attracting a new customer profile—younger, fashion-conscious, premium-minded females who had never considered the brand before. Holly demonstrated that generative AI, combined with real product photography and art direction, could expand brand reach into audiences that would have been expensive and slow to reach through conventional marketing.
          </p>
        </div>

        {/* Holly Gallery */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-surface-elevated">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2Fee5e3df289d944e195ff39ee13fe51db?format=webp&width=800&height=1000"
                alt="Holly campaign key visual"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Campaign Key Visual
            </p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-surface-elevated">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2F70ee15924dcb42ce83a642a5b7bd2c11?format=webp&width=800&height=1000"
                alt="Holly campaign variation 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Fashion Editorial Variation
            </p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-surface-elevated">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2F147be6287e8d4e388f786a15609d6f47?format=webp&width=800&height=1000"
                alt="Holly campaign variation 2"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Lifestyle Context
            </p>
          </div>
        </div>
      </div>

      {/* PRAVDA VÍTĚZÍ Campaign */}
      <div className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]">
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          Campaign 02: Pravda Vítězí
        </h2>
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-copper font-body font-medium">
          Fact of Victory — Commercial Dominance
        </p>

        <div className="mt-8 max-w-[640px]">
          <p className="text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            Pravda vítězí (Fact of Victory) was a sharp turn into assertiveness. Patriotic symbolism, strong visual messaging, and product-forward creative direction combined to create a campaign built for commercial impact. The imagery was bolder, the product more prominent, the emotional intent clearer. This campaign tested whether AI-assisted production could deliver high-volume inventory movement—and it delivered.
          </p>
          <p className="mt-4 text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            Pravda vítězí became the most successful advertising campaign in Brašnářství Tlustý's history. It moved more inventory than the company had ever experienced. The campaign proved that early generative AI, when paired with clear business intent and strong creative direction, could achieve unprecedented commercial results. This was not experimental AI art—this was production at scale.
          </p>
        </div>

        {/* Pravda Vítězí Gallery */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-[3/2] bg-surface-elevated">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2Fd0d6711236574ae4a4456ee55ea4496d?format=webp&width=800&height=1000"
                alt="Pravda Vítězí key visual"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Primary Campaign Visual
            </p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-[3/2] bg-surface-elevated">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2Faf98db329e674cf8855fe401215fa144?format=webp&width=800&height=1000"
                alt="Pravda Vítězí product pose"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Product-Focused Variation
            </p>
          </div>
        </div>

        {/* Additional context images */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-[9/10] bg-surface-elevated">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2Fd30e73939a764e0b964e0bf23903f988?format=webp&width=800&height=1200"
                alt="Pravda Vítězí male model"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Men's Variant
            </p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-sm aspect-[9/10] bg-surface-elevated">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2Fa0e61cdad8ba48508e6dbda0071ce6c3?format=webp&width=800&height=1200"
                alt="Pravda Vítězí female model"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
              Women's Variant
            </p>
          </div>
        </div>
      </div>

      {/* VSTŘÍC NOVÝM ZÁŽITKŮM Campaign */}
      <div className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]">
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          Campaign 03: Vstříc Novým Zážitkům
        </h2>
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-copper font-body font-medium">
          Premium BDSM Positioning — Tasteful Boldness
        </p>

        <div className="mt-8 max-w-[640px]">
          <p className="text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            Vstříc novým zážitkům (Face New Experiences) positioned the brand's BDSM line as premium, visually sophisticated, and boldly unapologetic. The campaign used dramatic AI-generated environments, provocative product styling, and confident positioning. The challenge was to achieve visual impact and category confidence without becoming vulgar or exploitative.
          </p>
          <p className="mt-4 text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            The campaign was widely well received—praised for being tasteful and visually impactful, while establishing the BDSM line as a legitimate, premium category. It led to the strongest sales figures the line had ever achieved, proving that niche product categories could be marketed with confidence and visual discipline through AI-assisted campaigns.
          </p>
        </div>

        {/* Campaign visual */}
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-sm aspect-[16/10] bg-surface-elevated">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2Fe34965e4b32c43989a5652a9a3cde2ae?format=webp&width=1200&height=1000"
              alt="Vstříc novým zážitkům campaign"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
            Premium BDSM line positioning
          </p>
        </div>
      </div>

      {/* Results Block */}
      <MetricBlock
        title="Campaign Results & Market Impact"
        metrics={[
          { value: "3", label: "Parallel Campaigns" },
          { value: "#1", label: "Most Successful Campaign Ever" },
          { value: "New", label: "Female Customer Segment" },
          { value: "Record", label: "BDSM Line Sales" },
          { value: "2022", label: "Early AI Adoption" },
        ]}
        withDivider={true}
      />

      {/* What Made It Hard */}
      <TextSectionBlock
        title="What Made This Difficult"
        subtitle="Repeatability & Control in an Unstable Medium"
        content="Early Stable Diffusion output was unpredictable. The same prompt could produce wildly different results. For product advertising, this was unacceptable. Every image had to respect the real product, align with brand positioning, and meet commercial quality standards. The solution was not prompting better—it was building custom control systems. Custom LoRA models encoded specific leather textures, product characteristics, and aesthetic directions. Text embeddings were trained to produce consistent results. ControlNet allowed real product photographs to guide generation, keeping the physical goods recognizable and desirable. This wasn't using AI as a creative tool—it was inventing a production system to make early AI reliable enough for commercial use. That required technical depth, aesthetic discipline, and the willingness to train custom models rather than rely on out-of-the-box prompts."
        withDivider={true}
      />

      {/* Lessons */}
      <LessonsBlock
        title="Lessons & Strategic Insights"
        lessons={[
          {
            title: "AI Is Only Valuable When Tied to Business Intent",
            description:
              "Generating pretty pictures was never the goal. Each campaign solved a specific business problem: reaching new audiences, moving inventory, establishing a niche category. The AI served the strategy, not the reverse.",
          },
          {
            title: "Early Workflows Required Custom Control Layers",
            description:
              "Standard prompts couldn't deliver commercial-grade consistency. Custom LoRAs, embeddings, and ControlNet guidance were not optional extras—they were essential to the production system.",
          },
          {
            title: "Product Truth Matters More Than Visual Novelty",
            description:
              "The real leather goods had to remain desirable and recognizable. The AI-generated contexts were the backdrop. This constraint actually improved the work—it forced discipline and authenticity.",
          },
          {
            title: "Early Adoption of Immature Technology Can Be Competitive Advantage",
            description:
              "By late 2022, many companies were experimenting with AI imagery. Few had built repeatable, commercially viable workflows. Early investment in the right technical foundation created lasting advantage.",
          },
          {
            title: "Emerging Tools Become Production Systems Through Direction, Not Automation",
            description:
              "The difference between AI art and AI production is discipline. Strong creative vision, technical rigor, and willingness to invest in custom training transformed early generative AI from a novelty into a legitimate production methodology.",
          },
        ]}
        withDivider={false}
      />

      {/* Next Project Navigation */}
      <NextProjectBlock
        title="Research & Applied AI VFX Pipeline"
        descriptor="Turning volatile generative models into production-ready VFX workflows"
        href="/work/vfx-pipeline"
      />
    </CaseStudyTemplate>
  );
}
