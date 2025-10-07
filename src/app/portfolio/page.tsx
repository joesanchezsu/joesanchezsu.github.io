"use client";

import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { AboutSection } from "../components/AboutSection";
import { ProjectsWheel } from "../components/ProjectsWheel";

const Page = styled.main`
  min-height: 100vh;
  width: 100%;
`;

const ProjectsWrapper = styled.div`
  height: 100vh;
`;

const ScrollArea = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const StickyWheel = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 1660px) {
    grid-template-columns: minmax(420px, 1024px) 1fr;
    grid-template-rows: 100vh;
  }
`;

const Spacer = styled.div`
  height: 3200px; /* controls scroll length */
`;

export default function PortfolioPage() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) {
      el.scrollTop = 0;
      setReady(true);
    }
  }, []);
  return (
    <Page>
      <ScrollArea ref={scrollerRef} id="portfolio-scroll">
        <StickyWheel>
          <AboutSection />
          <ProjectsWrapper>
            {ready ? <ProjectsWheel scrollerRef={scrollerRef} /> : null}
          </ProjectsWrapper>
        </StickyWheel>
        <Spacer />
      </ScrollArea>
    </Page>
  );
}
