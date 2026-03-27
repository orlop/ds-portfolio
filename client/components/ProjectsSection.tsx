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
];

interface ProjectsSectionProps {
  commentaryMode?: boolean;
}

export function ProjectsSection({ commentaryMode }: ProjectsSectionProps) {
  return (
    <section
      className="px-10 pb-6"
      data-section="featured-projects"
    >
      <div className="grid grid-cols-3 gap-5">
        {featuredProjects.map((project) => (
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
