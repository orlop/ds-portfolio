import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import ResearchVFXPipeline from "./pages/ResearchVFXPipeline";
import TlustyAdCampaigns from "./pages/TlustyAdCampaigns";
import OKTVBrandSystem from "./pages/OKTVBrandSystem";
import AIContentWorkflow from "./pages/AIContentWorkflow";
import AITraining from "./pages/AITraining";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Case Study Pages */}
          <Route path="/work/vfx-pipeline" element={<ResearchVFXPipeline />} />
          <Route path="/work/tlusty-campaigns" element={<TlustyAdCampaigns />} />
          <Route path="/work/oktv-brand-system" element={<OKTVBrandSystem />} />
            <Route path="/work/ai-content-workflow" element={<AIContentWorkflow />} />
            <Route path="/work/ai-training" element={<AITraining />} />

            {/* Placeholder pages for future development */}
            <Route path="/work" element={<PlaceholderPage title="Selected Work" />} />
            <Route path="/about" element={<PlaceholderPage title="About" />} />
            <Route path="/approach" element={<PlaceholderPage title="Approach" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact" />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
