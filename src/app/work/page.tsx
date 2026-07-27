"use client";

import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { ProjectsWheel } from "../components/ProjectsWheel";

const Page = styled.main`
  min-height: 100vh;
  width: 100%;
`;

const ScrollArea = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
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
`;

const Spacer = styled.div`
  height: 3200px; /* controls scroll length for wheel rotation */

  @media (max-width: 1199px) {
    height: 2400px;
  }
`;

const Footer = styled.footer`
  position: relative;
  width: 100%;
  padding: 1rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  padding: 0;
  font-size: 0.8rem;
  text-align: left;
  color: var(--gray-400);

  @media (max-width: 767px) {
    font-size: 0.6rem;
    flex-direction: column;
  }
`;

export default function WorkPage() {
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
      <ScrollArea ref={scrollerRef} id="work-scroll">
        <ProjectsWrapper>
          {ready ? <ProjectsWheel scrollerRef={scrollerRef} /> : null}
        </ProjectsWrapper>
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
