"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, MapPin } from "lucide-react";
import styled from "styled-components";
import { Project } from "../../../data/projects";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background);
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--gray-200);

  @media (prefers-color-scheme: dark) {
    background-color: rgba(0, 0, 0, 0.8);
    border-bottom-color: var(--gray-800);
  }

  .dark & {
    background-color: rgba(0, 0, 0, 0.8);
    border-bottom-color: var(--gray-800);
  }
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-600);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--foreground);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);

    &:hover {
      color: var(--foreground);
    }
  }

  .dark & {
    color: var(--gray-400);

    &:hover {
      color: var(--foreground);
    }
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
`;

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const ProjectHeader = styled.div`
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 1rem;
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-600);

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.125rem;
  color: var(--gray-600);
  line-height: 1.7;

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

const ImageMosaic = styled.div`
  margin: 3rem 0;
`;

const MosaicGrid = styled.div<{ $layout: "big-left" | "big-right" }>`
  display: grid;
  grid-template-columns: ${({ $layout }) =>
    $layout === "big-left" ? "2fr 1fr" : "1fr 2fr"};
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  height: 400px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 100px 100px;
    height: auto;
  }
`;

const MainImage = styled.div<{ $layout: "big-left" | "big-right" }>`
  grid-row: 1 / 3;
  grid-column: ${({ $layout }) => ($layout === "big-left" ? "1" : "2")};
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: var(--gray-100);

  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-800);
  }

  .dark & {
    background-color: var(--gray-800);
  }

  @media (max-width: 768px) {
    grid-row: 1;
    grid-column: 1;
  }
`;

const SmallImage = styled.div`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: var(--gray-100);

  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-800);
  }

  .dark & {
    background-color: var(--gray-800);
  }
`;

const TechStackSection = styled.section`
  margin: 3rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--foreground);
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechTag = styled.span`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: var(--blue-50);
  color: var(--blue-700);
  border-radius: 0.5rem;
  border: 1px solid var(--blue-200);

  @media (prefers-color-scheme: dark) {
    background-color: var(--blue-950);
    color: var(--blue-300);
    border-color: var(--blue-800);
  }

  .dark & {
    background-color: var(--blue-950);
    color: var(--blue-300);
    border-color: var(--blue-800);
  }
`;

const LinksSection = styled.section`
  margin: 3rem 0;
`;

const LinksGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--black);
  color: var(--white);
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
  font-weight: 500;

  &:hover {
    background-color: var(--gray-800);
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--white);
    color: var(--black);

    &:hover {
      background-color: var(--gray-200);
    }
  }

  .dark & {
    background-color: var(--white);
    color: var(--black);

    &:hover {
      background-color: var(--gray-200);
    }
  }
`;

interface ProjectDetailsClientProps {
  project: Project;
}

export function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <BackButton href="/">
            <ArrowLeft size={20} />
            Back to Home
          </BackButton>
          <HeaderTitle>{project.title}</HeaderTitle>
        </HeaderContent>
      </Header>

      <Main>
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectMeta>
            {project.period && (
              <MetaItem>
                <Calendar size={16} />
                <span>{project.period}</span>
              </MetaItem>
            )}
            {project.location && (
              <MetaItem>
                <MapPin size={16} />
                <span>{project.location}</span>
              </MetaItem>
            )}
          </ProjectMeta>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectHeader>

        {project.images && project.images.length > 0 && (
          <ImageMosaic>
            <MosaicGrid $layout={project.imageLayout || "big-left"}>
              <MainImage $layout={project.imageLayout || "big-left"}>
                <Image
                  src={project.images[0]}
                  alt={`${project.title} - Main view`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </MainImage>
              {project.images[1] && (
                <SmallImage>
                  <Image
                    src={project.images[1]}
                    alt={`${project.title} - Detail 1`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </SmallImage>
              )}
              {project.images[2] && (
                <SmallImage>
                  <Image
                    src={project.images[2]}
                    alt={`${project.title} - Detail 2`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </SmallImage>
              )}
            </MosaicGrid>
          </ImageMosaic>
        )}

        {project.tech && project.tech.length > 0 && (
          <TechStackSection>
            <SectionTitle>Technologies Used</SectionTitle>
            <TechStack>
              {project.tech.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechStack>
          </TechStackSection>
        )}

        {(project.link || project.github) && (
          <LinksSection>
            <SectionTitle>Links</SectionTitle>
            <LinksGrid>
              {project.link && (
                <ProjectLink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  View Project Site
                </ProjectLink>
              )}
              {project.github && (
                <ProjectLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  View on GitHub
                </ProjectLink>
              )}
            </LinksGrid>
          </LinksSection>
        )}
      </Main>
    </PageContainer>
  );
}
