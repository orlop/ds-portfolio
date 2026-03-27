interface ProcessStage {
  number: string;
  label: string;
  tool: string;
  /** Commentary data model — can later receive overview, evidence, notes, deep-dive links */
  commentary?: {
    overview?: string;
    evidence?: string[];
    notes?: string;
    deepDiveHref?: string;
  };
}

const stages: ProcessStage[] = [
  {
    number: "01",
    label: "VISUAL DESIGN",
    tool: "Nano Banana Pro in ComfyUI",
  },
  {
    number: "02",
    label: "UI STRUCTURING",
    tool: "Google Stitch → Figma",
  },
  {
    number: "03",
    label: "IMPLEMENTATION",
    tool: "Builder.io → Published Site",
  },
];

interface ProcessStripProps {
  commentaryMode?: boolean;
  activeStage?: number;
  onStageClick?: (stageIndex: number) => void;
}

export function ProcessStrip({
  commentaryMode,
  activeStage,
  onStageClick,
}: ProcessStripProps) {
  return (
    <div
      className="border-t border-[hsl(var(--border))] px-10 py-4"
      data-section="process-strip"
    >
      {/* Section label */}
      <div className="mb-3">
        <span className="text-[8px] tracking-widest-2 uppercase text-[hsl(var(--foreground-caption))] font-body">
          PROCESS / HOW I WORK
        </span>
      </div>

      {/* Stages row */}
      <div className="flex items-start gap-0 divide-x divide-[hsl(var(--border))]">
        {stages.map((stage, i) => (
          <ProcessStageItem
            key={stage.number}
            stage={stage}
            index={i}
            isActive={activeStage === i}
            commentaryMode={commentaryMode}
            onClick={onStageClick ? () => onStageClick(i) : undefined}
          />
        ))}
      </div>
    </div>
  );
}

interface ProcessStageItemProps {
  stage: ProcessStage;
  index: number;
  isActive?: boolean;
  commentaryMode?: boolean;
  onClick?: () => void;
}

function ProcessStageItem({
  stage,
  isActive,
  commentaryMode,
  onClick,
}: ProcessStageItemProps) {
  return (
    <button
      className="flex-1 px-6 first:pl-0 text-left group cursor-default disabled:cursor-default focus:outline-none"
      onClick={onClick}
      disabled={!commentaryMode && !onClick}
    >
      <div className="flex items-baseline gap-2">
        <span className="text-[8px] tracking-widest-2 text-[hsl(var(--foreground-caption))] font-body tabular-nums">
          {stage.number}
        </span>
        <span className="text-[9px] tracking-widest-2 uppercase text-[hsl(var(--foreground-muted))] font-body font-medium group-hover:text-foreground transition-colors">
          {stage.label}
        </span>

        {/* Commentary chip — shown in commentary mode */}
        {commentaryMode && isActive && (
          <span className="ml-1 bg-copper text-[8px] text-foreground font-body tracking-widest-2 uppercase px-1.5 py-0.5 rounded-sm">
            ACTIVE
          </span>
        )}
      </div>
      <div className="mt-0.5 text-[8px] tracking-widest-2 text-[hsl(var(--foreground-caption))] font-body pl-[18px]">
        {stage.tool}
      </div>
    </button>
  );
}
