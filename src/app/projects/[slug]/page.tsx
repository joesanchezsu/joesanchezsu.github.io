import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import { ProjectDetailsClient } from "./ProjectDetailsClient";

// Generate static params for all project slugs
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectDetailsPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
