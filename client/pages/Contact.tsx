import { BrandRail } from "@/components/BrandRail";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-background flex flex-col"
      style={{
        background:
          "radial-gradient(87.71% 60.86% at 50% 50%, #15151A 0%, #0C0C0F 100%)",
      }}
      data-page="contact"
    >
      {/* ── Desktop layout (lg+) ─────────────────────────────────────── */}
      <div className="hidden lg:flex flex-1 min-h-screen">
        {/* Brand Rail */}
        <BrandRail />

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-auto">
          <div className="flex-1 flex flex-col justify-start pt-16 px-10 xl:px-12">
            {/* Hero Section */}
            <section className="mb-16 max-w-[640px]">
              <h1 className="font-display font-black text-[clamp(48px,5vw,72px)] leading-[0.95] tracking-tight text-foreground uppercase">
                Let's Talk
              </h1>
              <p className="mt-6 text-[12px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body">
                Available for selected projects, collaborations, consulting, and creative problem-solving across AI-assisted workflows, VFX, branding, and creative direction.
              </p>
            </section>

            {/* Contact Details Block */}
            <section className="mb-16 max-w-[640px]">
              <div className="space-y-6">
                {/* Email */}
                <div className="group cursor-pointer">
                  <p className="text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:dan@dansevera.cz"
                    className="flex items-center gap-3 text-[16px] font-body text-foreground hover:text-copper transition-colors duration-200"
                  >
                    <Mail size={18} className="flex-shrink-0" />
                    <span>dan@dansevera.cz</span>
                  </a>
                </div>

                {/* Phone */}
                <div className="group cursor-pointer">
                  <p className="text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+420777000297"
                    className="flex items-center gap-3 text-[16px] font-body text-foreground hover:text-copper transition-colors duration-200"
                  >
                    <Phone size={18} className="flex-shrink-0" />
                    <span>+420 777 000 297</span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="group cursor-pointer">
                  <p className="text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body mb-2">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/daniel-severa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[16px] font-body text-foreground hover:text-copper transition-colors duration-200"
                  >
                    <Linkedin size={18} className="flex-shrink-0" />
                    <span>daniel-severa</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Personal Note */}
            <section className="mb-16 max-w-[640px]">
              <p className="text-[12px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body">
                I work with teams and individuals who are serious about connecting concept, technology, and execution. Whether you're building something ambitious, need VFX and AI pipeline expertise, or want to explore creative problem-solving, let's discuss your project.
              </p>
            </section>

            {/* Inquiry Categories */}
            <section className="mb-16 max-w-[640px]">
              <p className="text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body mb-4">
                Areas of Focus
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "VFX & Postproduction",
                  "AI Creative Workflows",
                  "Branding & Motion Design",
                  "Consulting",
                  "Lectures & Talks",
                  "Collaborations",
                ].map((category) => (
                  <div
                    key={category}
                    className="px-4 py-2 rounded-sm text-[10px] tracking-widest-2 uppercase font-body font-medium text-foreground border border-[hsl(var(--border))] hover:border-copper hover:text-copper transition-colors duration-200 bg-[hsl(var(--surface))]"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mb-24">
              <a
                href="mailto:dan@dansevera.cz"
                className="inline-flex items-center border border-copper text-copper text-[9px] tracking-widest-2 uppercase font-body font-medium px-6 py-3 hover:bg-copper hover:text-foreground transition-colors duration-200"
              >
                Email me directly
              </a>
            </section>
          </div>
        </main>
      </div>

      {/* ── Mobile layout ──────────────────────────────────────────── */}
      <div className="lg:hidden flex flex-col min-h-screen px-6 pt-8 pb-12">
        {/* Mobile Header */}
        <div className="mb-12">
          <h1 className="font-display font-black text-[36px] leading-[0.95] tracking-tight text-foreground uppercase mb-4">
            Let's Talk
          </h1>
          <p className="text-[11px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body">
            Available for collaborations, consulting, and creative problem-solving.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6 mb-12">
          <div>
            <p className="text-[8px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body mb-2">
              Email
            </p>
            <a
              href="mailto:dan@dansevera.cz"
              className="text-[14px] font-body text-foreground hover:text-copper transition-colors duration-200"
            >
              dan@dansevera.cz
            </a>
          </div>

          <div>
            <p className="text-[8px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body mb-2">
              Phone
            </p>
            <a
              href="tel:+420777000297"
              className="text-[14px] font-body text-foreground hover:text-copper transition-colors duration-200"
            >
              +420 777 000 297
            </a>
          </div>

          <div>
            <p className="text-[8px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body mb-2">
              LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/daniel-severa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-body text-foreground hover:text-copper transition-colors duration-200"
            >
              daniel-severa
            </a>
          </div>
        </div>

        {/* Personal Note */}
        <p className="text-[11px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body mb-12">
          I work with teams building ambitious projects. Let's discuss your idea.
        </p>

        {/* CTA */}
        <a
          href="mailto:dan@dansevera.cz"
          className="inline-flex items-center border border-copper text-copper text-[9px] tracking-widest-2 uppercase font-body font-medium px-5 py-2.5 hover:bg-copper hover:text-foreground transition-colors duration-200"
        >
          Email me directly
        </a>
      </div>
    </div>
  );
}
