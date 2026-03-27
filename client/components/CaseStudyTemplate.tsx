import React from "react";
import { BrandRail } from "./BrandRail";

interface CaseStudyTemplateProps {
  children: React.ReactNode;
  commentaryMode?: boolean;
  onModeChange?: (mode: "portfolio" | "commentary") => void;
}

export function CaseStudyTemplate({
  children,
  commentaryMode,
  onModeChange,
}: CaseStudyTemplateProps) {
  return (
    <div
      className="min-h-screen flex bg-background"
      style={{
        background:
          "radial-gradient(87.71% 60.86% at 50% 50%, #15151A 0%, #0C0C0F 100%)",
      }}
      data-page="case-study"
      data-mode={commentaryMode ? "commentary" : "portfolio"}
    >
      {/* Desktop: Brand Rail on left */}
      <div className="hidden lg:block">
        <BrandRail
          mode={commentaryMode ? "commentary" : "portfolio"}
          onModeChange={onModeChange}
        />
      </div>

      {/* Main content */}
      <main className="flex-1 min-w-0 overflow-auto">
        {children}
      </main>
    </div>
  );
}
