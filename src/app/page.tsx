"use client";

import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ProjectsWheel } from "./components/ProjectsWheel";

const Page = styled.main`
  min-height: 100vh;
  width: 100%;
`;

const ProjectsWrapper = styled.div`
  height: 100vh;

  @media (max-height: 700px) {
    height: 120vh;
  }

  // ipad mini aspect ratio
  @media (width: 768px) and (height: 1024px) {
    height: 110vh;
  }

  @media (max-width: 1199px) {
    display: none;
  }
`;

const ScrollArea = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 1199px) {
    overflow-y: visible;
    height: auto;
  }
`;

const StickyWheel = styled.div`
  position: sticky;
  top: 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 1200px) and (max-width: 1659px) {
    height: 220vh;
    grid-template-rows: minmax(auto, 100vh) minmax(100vh, auto);
  }

  @media (min-width: 1660px) {
    grid-template-columns: minmax(420px, 1024px) 1fr;
    grid-template-rows: 100vh;
  }

  @media (max-width: 1199px) {
    display: block;
    position: relative;
    height: auto;
  }
`;

const Spacer = styled.div`
  height: 3200px; /* controls scroll length for wheel rotation */

  @media (max-width: 1659px) {
    height: 0px;
  }
`;

const Footer = styled.footer`
  @media (min-width: 1660px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  @media (max-width: 1659px) {
    position: relative;
    width: 100%;
    padding: 1rem;
    margin-top: auto;
  }
`;

const FooterContent = styled.div`
  display: flex;
  padding: 1rem;
  font-size: 0.8rem;
  text-align: left;
  color: var(--gray-400);

  @media (max-width: 1659px) {
    padding: 0;
  }

  @media (max-width: 767px) {
    font-size: 0.6rem;
    flex-direction: column;
  }
`;

export default function HomePage() {
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
          <AboutSection scrollerRef={scrollerRef} />
          <ProjectsWrapper>
            {ready ? <ProjectsWheel scrollerRef={scrollerRef} /> : null}
          </ProjectsWrapper>
        </StickyWheel>
        <Spacer />
        <Footer>
          <FooterContent>
            <p style={{ marginRight: "0.5rem" }}>
              &copy; 2025 Made with ❤️ by John Eric Sánchez Suárez. All rights reserved -
            </p>
            <a href="/legal">Legal Notice</a>
          </FooterContent>
        </Footer>
      </ScrollArea>
    </Page>
  );
}
