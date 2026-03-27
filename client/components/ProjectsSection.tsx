import { ProjectCard, type ProjectCardData } from "./ProjectCard";

const featuredProjects: ProjectCardData[] = [
  {
    id: "vfx-pipeline",
    title: "Research & Applied AI VFX Pipeline",
    descriptor: "Stable generative AI workflows for theatrical film postproduction",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2Ffb3b24a9ede646a8a233cc18ebad2175?format=webp&width=800&height=1200",
    href: "/work/vfx-pipeline",
    commentaryStage: 1,
  },
  {
    id: "tlusty-campaigns",
    title: "AI Campaigns for Brašnářství Tlustý",
    descriptor: "Early Generative AI in Commercial Advertising",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2F097477050c71413492080f93116b9036?format=webp&width=800&height=1200",
    href: "/work/tlusty-campaigns",
    commentaryStage: 2,
  },
  {
    id: "oktv-brand-system",
    title: "OK TV — Brand System & Motion Design",
    descriptor: "Czech broadcast brand identity and visual system",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2F9b29ed8364584630b47810a1faa20cc6%2F01cf478ad74642e2a9de5a807f297cf6?format=webp&width=800&height=1200",
    href: "/work/oktv-brand-system",
    commentaryStage: 3,
  },
  {
    id: "ai-content-workflow",
    title: "AI-Assisted Product Content",
    descriptor: "Human-directed, AI-powered content generation system",
    gradientClass:
      "bg-gradient-to-br from-[#1a0f08] via-[#2d1a0a] to-[#0f0805]",
    href: "/work/ai-content-workflow",
    commentaryStage: 1,
  },
  {
    id: "ai-training",
    title: "Generative AI Training",
    descriptor: "Teaching creative teams to leverage AI effectively",
    gradientClass:
      "bg-gradient-to-br from-[#0a1010] via-[#0d1818] to-[#050808]",
    href: "/work/ai-training",
    commentaryStage: 2,
  },
];

interface ProjectsSectionProps {
  commentaryMode?: boolean;
}

export function ProjectsSection({ commentaryMode }: ProjectsSectionProps) {
  // Display first 3 projects on homepage, others linked from case studies
  const displayedProjects = featuredProjects.slice(0, 3);

  return (
    <section
      className="px-10 pb-6"
      data-section="featured-projects"
    >
      <div className="grid grid-cols-3 gap-5">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            card={project}
            commentaryMode={commentaryMode}
          />
        ))}
      </div>
    </section>
  );
}
