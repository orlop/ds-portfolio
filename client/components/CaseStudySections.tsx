import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────
   CASE STUDY TITLE BLOCK
   ────────────────────────────────────────────────────────── */
interface CaseStudyTitleBlockProps {
  category: string;
  title: string;
  subtitle?: string;
  metadata: {
    role: string;
    scope: string;
    tools: string;
    year: string;
    type: string;
  };
}

export function CaseStudyTitleBlock({
  category,
  title,
  subtitle,
  metadata,
}: CaseStudyTitleBlockProps) {
  return (
    <div className="pt-10 px-10 xl:px-12 pb-8 border-b border-[hsl(var(--border))]">
      <p className="text-[9px] tracking-widest-2 uppercase text-copper font-body font-medium">
        {category}
      </p>
      <h1 className="mt-4 font-display font-black text-[clamp(42px,5vw,72px)] leading-[0.92] tracking-tight text-foreground uppercase max-w-[680px]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 text-[13px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body max-w-[540px]">
          {subtitle}
        </p>
      )}

      {/* Metadata grid */}
      <div className="mt-8 grid grid-cols-5 gap-6">
        <div>
          <p className="text-[8px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
            Role
          </p>
          <p className="mt-2 text-[11px] text-foreground font-body font-medium">
            {metadata.role}
          </p>
        </div>
        <div>
          <p className="text-[8px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
            Scope
          </p>
          <p className="mt-2 text-[11px] text-foreground font-body font-medium">
            {metadata.scope}
          </p>
        </div>
        <div>
          <p className="text-[8px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
            Tools
          </p>
          <p className="mt-2 text-[11px] text-foreground font-body font-medium">
            {metadata.tools}
          </p>
        </div>
        <div>
          <p className="text-[8px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
            Year
          </p>
          <p className="mt-2 text-[11px] text-foreground font-body font-medium">
            {metadata.year}
          </p>
        </div>
        <div>
          <p className="text-[8px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
            Type
          </p>
          <p className="mt-2 text-[11px] text-foreground font-body font-medium">
            {metadata.type}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   HERO IMAGE BLOCK
   ────────────────────────────────────────────────────────── */
interface HeroImageBlockProps {
  imageUrl: string;
  alt: string;
  caption?: string;
}

export function HeroImageBlock({ imageUrl, alt, caption }: HeroImageBlockProps) {
  return (
    <div className="px-10 xl:px-12 py-10" data-section="hero-image">
      <div className="relative overflow-hidden rounded-sm aspect-[3/2] bg-surface-elevated">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
      {caption && (
        <p className="mt-3 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
          {caption}
        </p>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   OVERVIEW / FACTS BLOCK
   ────────────────────────────────────────────────────────── */
interface OverviewItem {
  label: string;
  value: string | ReactNode;
}

interface OverviewBlockProps {
  items: OverviewItem[];
}

export function OverviewBlock({ items }: OverviewBlockProps) {
  return (
    <div
      className="px-10 xl:px-12 py-10 border-b border-[hsl(var(--border))]"
      data-section="overview"
    >
      <div className="grid grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-[8px] tracking-widest-2 uppercase text-copper font-body font-medium">
              {item.label}
            </p>
            <div className="mt-3 text-[12px] leading-relaxed text-foreground font-body">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   TEXT SECTION BLOCK
   ────────────────────────────────────────────────────────── */
interface TextSectionBlockProps {
  title: string;
  content: string | ReactNode;
  subtitle?: string;
  withDivider?: boolean;
}

export function TextSectionBlock({
  title,
  content,
  subtitle,
  withDivider = true,
}: TextSectionBlockProps) {
  return (
    <div
      className={cn(
        "px-10 xl:px-12 py-10",
        withDivider && "border-b border-[hsl(var(--border))]"
      )}
      data-section="text-block"
    >
      <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-copper font-body font-medium">
          {subtitle}
        </p>
      )}
      <div className="mt-6 max-w-[640px]">
        {typeof content === "string" ? (
          <p className="text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            {content}
          </p>
        ) : (
          content
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   SPLIT LAYOUT BLOCK (Text + Image)
   ────────────────────────────────────────────────────────── */
interface SplitBlockProps {
  title: string;
  content: string | ReactNode;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  withDivider?: boolean;
}

export function SplitBlock({
  title,
  content,
  imageUrl,
  imageAlt,
  imagePosition = "right",
  withDivider = true,
}: SplitBlockProps) {
  const contentCol = (
    <div>
      <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
        {title}
      </h2>
      <div className="mt-6 max-w-[480px]">
        {typeof content === "string" ? (
          <p className="text-[12px] leading-[1.7] text-[hsl(var(--foreground-muted))] font-body">
            {content}
          </p>
        ) : (
          content
        )}
      </div>
    </div>
  );

  const imageCol = (
    <div className="relative overflow-hidden rounded-sm aspect-[3/2] bg-surface-elevated">
      <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );

  return (
    <div
      className={cn(
        "px-10 xl:px-12 py-10",
        withDivider && "border-b border-[hsl(var(--border))]"
      )}
      data-section="split-block"
    >
      <div className="grid grid-cols-2 gap-10 items-start">
        {imagePosition === "left" ? (
          <>
            {imageCol}
            {contentCol}
          </>
        ) : (
          <>
            {contentCol}
            {imageCol}
          </>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   PROCESS STEPS BLOCK
   ────────────────────────────────────────────────────────── */
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessBlockProps {
  title: string;
  steps: ProcessStep[];
  withDivider?: boolean;
}

export function ProcessBlock({
  title,
  steps,
  withDivider = true,
}: ProcessBlockProps) {
  return (
    <div
      className={cn(
        "px-10 xl:px-12 py-10",
        withDivider && "border-b border-[hsl(var(--border))]"
      )}
      data-section="process-block"
    >
      <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
        {title}
      </h2>

      <div className="mt-8 space-y-6">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-6">
            <div className="flex-shrink-0">
              <span className="text-[10px] tracking-widest-2 text-copper font-body font-bold">
                {step.number}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[12px] tracking-widest-2 uppercase text-foreground font-body font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   GALLERY / SHOWCASE BAND
   ────────────────────────────────────────────────────────── */
interface GalleryItem {
  imageUrl: string;
  alt: string;
  caption?: string;
}

interface GalleryBlockProps {
  title: string;
  items: GalleryItem[];
  columns?: 2 | 3;
  withDivider?: boolean;
}

export function GalleryBlock({
  title,
  items,
  columns = 3,
  withDivider = true,
}: GalleryBlockProps) {
  return (
    <div
      className={cn(
        "px-10 xl:px-12 py-10",
        withDivider && "border-b border-[hsl(var(--border))]"
      )}
      data-section="gallery-block"
    >
      <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
        {title}
      </h2>

      <div
        className={cn(
          "mt-8 gap-6",
          columns === 3 ? "grid grid-cols-3" : "grid grid-cols-2"
        )}
      >
        {items.map((item, idx) => (
          <div key={idx}>
            <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-surface-elevated">
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {item.caption && (
              <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
                {item.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   METRIC / RESULT BLOCK
   ────────────────────────────────────────────────────────── */
interface MetricItem {
  value: string;
  label: string;
}

interface MetricBlockProps {
  title?: string;
  metrics: MetricItem[];
  withDivider?: boolean;
}

export function MetricBlock({
  title,
  metrics,
  withDivider = true,
}: MetricBlockProps) {
  return (
    <div
      className={cn(
        "px-10 xl:px-12 py-10",
        withDivider && "border-b border-[hsl(var(--border))]"
      )}
      data-section="metric-block"
    >
      {title && (
        <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
          {title}
        </h2>
      )}

      <div
        className={cn(
          "mt-8 gap-8",
          metrics.length <= 3
            ? "grid grid-cols-3"
            : metrics.length === 4
              ? "grid grid-cols-4"
              : "grid grid-cols-5"
        )}
      >
        {metrics.map((metric, idx) => (
          <div key={idx}>
            <div className="font-display font-black text-[28px] leading-none tracking-tight text-copper">
              {metric.value}
            </div>
            <p className="mt-2 text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-muted))] font-body">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   LESSONS / TAKEAWAYS BLOCK
   ────────────────────────────────────────────────────────── */
interface LessonItem {
  title: string;
  description: string;
}

interface LessonsBlockProps {
  title: string;
  lessons: LessonItem[];
  withDivider?: boolean;
}

export function LessonsBlock({
  title,
  lessons,
  withDivider = true,
}: LessonsBlockProps) {
  return (
    <div
      className={cn(
        "px-10 xl:px-12 py-10",
        withDivider && "border-b border-[hsl(var(--border))]"
      )}
      data-section="lessons-block"
    >
      <h2 className="font-display font-bold text-[18px] tracking-tight text-foreground uppercase">
        {title}
      </h2>

      <div className="mt-8 space-y-6">
        {lessons.map((lesson, idx) => (
          <div key={idx} className="border-l-2 border-copper pl-6">
            <h3 className="text-[12px] tracking-widest-2 uppercase text-foreground font-body font-semibold">
              {lesson.title}
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-[hsl(var(--foreground-muted))] font-body">
              {lesson.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   NEXT PROJECT NAVIGATION
   ────────────────────────────────────────────────────────── */
interface NextProjectProps {
  title: string;
  descriptor: string;
  href: string;
}

export function NextProjectBlock({ title, descriptor, href }: NextProjectProps) {
  const handleNavigate = () => {
    window.location.href = href;
  };

  return (
    <div
      className="px-10 xl:px-12 py-10 border-t border-[hsl(var(--border))]"
      data-section="next-project"
    >
      <p className="text-[8px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
        Next Case Study
      </p>
      <button
        onClick={handleNavigate}
        className="mt-4 group cursor-pointer focus:outline-none"
      >
        <h3 className="font-display font-bold text-[22px] tracking-tight text-foreground uppercase group-hover:text-copper transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-[10px] tracking-widest-2 uppercase text-[hsl(var(--foreground-muted))] font-body group-hover:text-foreground transition-colors">
          {descriptor}
        </p>
      </button>
    </div>
  );
}
