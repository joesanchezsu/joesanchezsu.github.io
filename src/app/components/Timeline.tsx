"use client";

import { Calendar, MapPin, ExternalLink } from "lucide-react";
import styled from "styled-components";

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TimelineItemContainer = styled.div`
  position: relative;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 4rem;
  bottom: 0;
  width: 0.125rem;
  background-color: var(--gray-300);

  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-600);
  }

  .dark & {
    background-color: var(--gray-600);
  }
`;

const TimelineContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

const TimelineDot = styled.div<{ $type: "work" | "internship" | "study" }>`
  position: relative;
  z-index: 10;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background-color: ${({ $type }) => {
    switch ($type) {
      case "work":
        return "var(--blue-500)";
      case "internship":
        return "var(--green-500)";
      case "study":
        return "var(--purple-500)";
      default:
        return "var(--gray-500)";
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 0.75rem;
  font-weight: 500;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--gray-500);
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

const TypeBadge = styled.span<{ $type: "work" | "internship" | "study" }>`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${({ $type }) => {
    switch ($type) {
      case "work":
        return "var(--blue-500)";
      case "internship":
        return "var(--green-500)";
      case "study":
        return "var(--purple-500)";
      default:
        return "var(--gray-500)";
    }
  }};
  color: var(--white);
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Icon = styled.div`
  width: 1rem;
  height: 1rem;
  color: var(--gray-500);

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
`;

const Company = styled.p`
  font-size: 1.125rem;
  color: var(--gray-600);
  margin-top: 0;

  @media (prefers-color-scheme: dark) {
    color: var(--gray-300);
  }

  .dark & {
    color: var(--gray-300);
  }
`;

const Description = styled.p`
  color: var(--gray-600);
  margin-top: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectsTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled.div`
  padding: 1rem;
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;

  @media (prefers-color-scheme: dark) {
    border-color: var(--gray-700);
  }

  .dark & {
    border-color: var(--gray-700);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h5`
  font-weight: 500;
  color: var(--foreground);
`;

const ProjectLink = styled.a`
  color: var(--blue-500);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--blue-600);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--blue-400);

    &:hover {
      color: var(--blue-300);
    }
  }

  .dark & {
    color: var(--blue-400);

    &:hover {
      color: var(--blue-300);
    }
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.875rem;
  color: var(--gray-600);
  margin-bottom: 0.75rem;

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  background-color: var(--gray-100);
  border-radius: 0.25rem;

  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-800);
  }

  .dark & {
    background-color: var(--gray-800);
  }
`;

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  images?: string[];
}

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "internship" | "study";
  description: string;
  projects: Project[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const getTypeLabel = (type: TimelineItem["type"]) => {
    switch (type) {
      case "work":
        return "Work Experience";
      case "internship":
        return "Internship";
      case "study":
        return "Education";
      default:
        return "Other";
    }
  };

  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineItemContainer key={item.id}>
          {/* Timeline line */}
          {index < items.length - 1 && <TimelineLine />}

          <TimelineContent>
            {/* Timeline dot */}
            <TimelineDot $type={item.type}>{index + 1}</TimelineDot>

            {/* Content */}
            <ContentArea>
              <div>
                <MetaInfo>
                  <TypeBadge $type={item.type}>{getTypeLabel(item.type)}</TypeBadge>
                  <MetaItem>
                    <Icon>
                      <Calendar />
                    </Icon>
                    <span>{item.period}</span>
                  </MetaItem>
                  <MetaItem>
                    <Icon>
                      <MapPin />
                    </Icon>
                    <span>{item.location}</span>
                  </MetaItem>
                </MetaInfo>

                <Title>{item.title}</Title>
                <Company>{item.company}</Company>
                <Description>{item.description}</Description>
              </div>

              {/* Projects */}
              {item.projects.length > 0 && (
                <ProjectsSection>
                  <ProjectsTitle>Key Projects</ProjectsTitle>
                  <ProjectsGrid>
                    {item.projects.map((project, projectIndex) => (
                      <ProjectCard key={projectIndex}>
                        <ProjectHeader>
                          <ProjectTitle>{project.title}</ProjectTitle>
                          {project.link && (
                            <ProjectLink
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Icon>
                                <ExternalLink />
                              </Icon>
                            </ProjectLink>
                          )}
                        </ProjectHeader>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        <TechStack>
                          {project.tech.map((tech, techIndex) => (
                            <TechTag key={techIndex}>{tech}</TechTag>
                          ))}
                        </TechStack>
                      </ProjectCard>
                    ))}
                  </ProjectsGrid>
                </ProjectsSection>
              )}
            </ContentArea>
          </TimelineContent>
        </TimelineItemContainer>
      ))}
    </TimelineContainer>
  );
}
