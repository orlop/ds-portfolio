import { ProjectCard, type ProjectCardData } from "./ProjectCard";

const featuredProjects: ProjectCardData[] = [
  {
    id: "portfolio-website",
    title: "This Portfolio Website",
    descriptor: "AI-Assisted Product Content Workflow & Design System",
    imageUrl:
      "https://api.builder.io/api/v1/image/assets/TEMP/105da3ce78db249aa62b340b78e33b52a37c31ca?width=800",
    href: "/work/portfolio-website",
    commentaryStage: 1,
  },
  {
    id: "oktv",
    title: "OKTV Brand & Content System",
    descriptor: "Creative Strategy & Automated Visuals",
    gradientClass:
      "bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#071020]",
    href: "/work/oktv",
    commentaryStage: 2,
  },
  {
    id: "magnum-photo-booths",
    title: "Magnum Photo Booths",
    descriptor: "Creative Tech Experience & Implementation",
    gradientClass:
      "bg-gradient-to-br from-[#1a1208] via-[#241a0a] to-[#0f0e0d]",
    href: "/work/magnum",
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
