"use client";

import Link from "next/link";
import styled from "styled-components";

const cardBorderHoverColor = ($type: "work" | "internship" | "study") => {
  switch ($type) {
    case "work":
      return "var(--blue-500)";
    case "internship":
      return "var(--green-500)";
    case "study":
      return "var(--purple-500)";
    default:
      return "var(--blue-500)";
  }
};

const CardBase = styled.div<{ $type: "work" | "internship" | "study" }>`
  padding: 1.25rem;
  border: 1px solid var(--gray-200);
  border-radius: 0;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ $type }) => cardBorderHoverColor($type)};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    border-color: var(--gray-700);

    &:hover {
      border-color: ${({ $type }) => cardBorderHoverColor($type)};
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    }
  }

  .dark & {
    border-color: var(--gray-700);

    &:hover {
      border-color: ${({ $type }) => cardBorderHoverColor($type)};
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Title = styled.h5`
  font-weight: 500;
  color: var(--foreground);
  text-decoration: none;
`;

const CardExternal = styled.a<{ $type: "work" | "internship" | "study" }>`
  display: block;
  text-decoration: none;
  color: inherit;

  &:hover ${Title} {
    text-decoration: underline;
  }
`;

const CardInternal = styled(Link)<{ $type: "work" | "internship" | "study" }>`
  display: block;
  text-decoration: none;
  color: inherit;

  &:hover ${Title} {
    text-decoration: underline;
  }
`;

const Description = styled.p`
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

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  slug?: string;
  type: "work" | "internship" | "study";
}

export function ProjectCard({
  title,
  description,
  tech,
  link,
  slug,
  type,
}: ProjectCardProps) {
  const hasExternal = Boolean(link);
  const hasInternal = Boolean(slug);

  const content = (
    <CardBase $type={type}>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Description>{description}</Description>
      <TechStack>
        {tech.map((t, i) => (
          <TechTag key={i}>{t}</TechTag>
        ))}
      </TechStack>
    </CardBase>
  );

  if (hasExternal) {
    return (
      <CardExternal $type={type} href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </CardExternal>
    );
  }

  if (hasInternal) {
    return (
      <CardInternal $type={type} href={`/projects/${slug}`}>
        {content}
      </CardInternal>
    );
  }

  return content;
}
