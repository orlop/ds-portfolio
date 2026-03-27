interface KpiItemProps {
  value: string;
  label: string;
  /** Optional commentary stage marker for future use */
  stage?: number;
}

export function KpiItem({ value, label }: KpiItemProps) {
  return (
    <div className="kpi-item group">
      <div className="font-display font-black text-[28px] leading-none tracking-tight text-foreground uppercase">
        {value}
      </div>
      <div className="mt-1.5 text-[9px] tracking-widest-2 uppercase text-copper font-body font-medium">
        {label}
      </div>
    </div>
  );
}

const kpiData: KpiItemProps[] = [
  { value: "20+ YEARS", label: "Creative Industry Leadership" },
  { value: "4500+ SHOTS", label: "Delivered in VFX Pipelines" },
  { value: "€4M CAMPAIGNS", label: "Led as Director" },
  { value: "AI PIPELINES", label: "Since 2019" },
];

export function KpiColumn() {
  return (
    <div
      className="w-[240px] flex-shrink-0 flex flex-col gap-8 pt-10 pr-10 pl-6"
      data-section="kpi-column"
    >
      {kpiData.map((kpi) => (
        <KpiItem key={kpi.value} {...kpi} />
      ))}
    </div>
  );
}
