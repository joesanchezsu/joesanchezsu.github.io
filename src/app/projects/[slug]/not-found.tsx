"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { styled } from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: var(--gray-600);
  margin-bottom: 2rem;

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
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

export default function NotFound() {
  return (
    <Container>
      <Content>
        <Title>Project Not Found</Title>
        <Description>
          The project you&apos;re looking for doesn&apos;t exist or has been moved.
        </Description>
        <BackButton href="/">
          <ArrowLeft size={20} />
          Back to Home
        </BackButton>
      </Content>
    </Container>
  );
}
