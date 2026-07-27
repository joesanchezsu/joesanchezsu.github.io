"use client";

import styled from "styled-components";
import Link from "next/link";
import { experiments } from "../../data/experiments";

const Page = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: 2rem;

  @media (max-width: 767px) {
    padding: 1rem;
    padding-top: 5rem;
  }
`;

const Header = styled.header`
  max-width: 1400px;
  margin: 0 auto 3rem;

  @media (max-width: 767px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--yellow-photo);
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--gray-400);
  max-width: 800px;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ExperimentCard = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--gray-900);
  border: 2px solid var(--gray-700);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: var(--yellow-photo);
    transform: translateY(-4px);
  }

  @media (prefers-color-scheme: dark) {
    background: var(--gray-800);
  }
`;

const ExperimentImage = styled.div<{ $bgColor?: string }>`
  width: 100%;
  height: 240px;
  background: ${({ $bgColor }) => $bgColor || "var(--gray-700)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--gray-500);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ExperimentContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ExperimentTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
`;

const ExperimentDescription = styled.p`
  font-size: 0.95rem;
  color: var(--gray-400);
  line-height: 1.5;
`;

const ExperimentDate = styled.span`
  font-size: 0.85rem;
  color: var(--gray-500);
  margin-top: 0.5rem;
`;

const ComingSoon = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  color: var(--gray-400);
  font-size: 1.2rem;
`;

const Footer = styled.footer`
  position: relative;
  width: 100%;
  padding: 2rem 1rem 1rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  display: flex;
  padding: 0;
  font-size: 0.8rem;
  text-align: center;
  justify-content: center;
  color: var(--gray-400);

  @media (max-width: 767px) {
    font-size: 0.6rem;
    flex-direction: column;
  }
`;

export default function ExperimentsPage() {
  return (
    <Page>
      <Header>
        <Title>Experiments</Title>
        <Description>
          A collection of creative coding sketches, interactive demos, and technical
          experiments. This space is dedicated to exploration and learning.
        </Description>
      </Header>

      {experiments.length > 0 ? (
        <Grid>
          {experiments.map((exp) => (
            <ExperimentCard key={exp.id} href={exp.link}>
              <ExperimentImage $bgColor={exp.bgColor}>
                {exp.image ? <img src={exp.image} alt={exp.title} /> : "🎨"}
              </ExperimentImage>
              <ExperimentContent>
                <ExperimentTitle>{exp.title}</ExperimentTitle>
                <ExperimentDescription>{exp.description}</ExperimentDescription>
                <ExperimentDate>{exp.date}</ExperimentDate>
              </ExperimentContent>
            </ExperimentCard>
          ))}
        </Grid>
      ) : (
        <ComingSoon>
          <p>🚧 Coming soon! New experiments will be added here over time.</p>
        </ComingSoon>
      )}

      <Footer>
        <FooterContent>
          <p style={{ marginRight: "0.5rem" }}>
            &copy; 2025 Made with ❤️ by John Eric Sánchez Suárez. All rights reserved -
          </p>
          <Link href="/legal">Legal Notice</Link>
        </FooterContent>
      </Footer>
    </Page>
  );
}
