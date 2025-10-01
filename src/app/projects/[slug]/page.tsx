import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import { ProjectDetailsClient } from "./ProjectDetailsClient";

// Generate static params for all project slugs
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
