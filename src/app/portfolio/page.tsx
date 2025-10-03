"use client";

import styled from "styled-components";
import { AboutSection } from "../components/AboutSection";
import { ProjectsWheel } from "../components/ProjectsWheel";

const Page = styled.main`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(420px, 700px) 1fr;
    grid-template-rows: 100vh;
  }
`;

const ProjectsWrapper = styled.div`
  height: 100vh;
`;

export default function PortfolioPage() {
  return (
    <Page>
      <AboutSection />

      <ProjectsWrapper>
        <ProjectsWheel />
      </ProjectsWrapper>
    </Page>
  );
}
