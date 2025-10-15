"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { projects } from "../../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ProjectItem } from "./ProjectItem";
import { ProjectModal, ProjectModalData } from "./ProjectModal";
import { useState } from "react";
import CurvedText from "./CurvedText";

type CompanyInfo = {
  name: string;
  occurrences: number;
  firstIndex: number;
  role: string;
};

const WheelContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WheelInner = styled.div`
  position: relative;
  width: 1000px;
  height: 1000px;
  transform: translate(340px, -40px);
`;

const CenterCircle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  border: 2px solid var(--gray-400);
  background: rgba(0, 0, 0, 0);
  z-index: 0;
`;

const WorkText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 132px;
  font-size: 76px;
  z-index: 1000;
  color: var(--yellow-photo);
`;

const CurvedTextsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function ProjectsWheel({
  scrollerRef,
}: {
  scrollerRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLButtonElement[]>([]);
  const curvedTextsContainerRef = useRef<HTMLDivElement | null>(null);
  const angleOffset = 252;

  const data = useMemo(
    () => projects.reverse().slice(0, Math.min(projects.length, 12)),
    []
  );

  const arr = data.map((p) => p.company).filter((c) => c !== undefined);
  const companies: CompanyInfo[] = Object.values(
    arr.reduce<Record<string, CompanyInfo>>((acc, name, index) => {
      if (!acc[name]) {
        acc[name] = {
          name,
          occurrences: 0,
          firstIndex: index,
          role: data.find((p) => p.company === name)?.role || "",
        };
      }
      acc[name].occurrences++;
      return acc;
    }, {})
  );

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<ProjectModalData | undefined>();
  const lastScrollTopRef = useRef<number>(0);

  const openProjectModal = (dataForModal: ProjectModalData) => {
    lastScrollTopRef.current = scrollerRef?.current?.scrollTop ?? 0;
    setModalData(dataForModal);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    const el = scrollerRef?.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTop = lastScrollTopRef.current;
        try {
          ScrollTrigger.update();
          // el.scrollTo({ top: lastScrollTopRef.current, behavior: "smooth" });
        } catch {}
      });
    }
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CSSPlugin);
    if (!containerRef.current) return;

    // ensure internal scroller is used when available
    const ctx = gsap.context(() => {
      const totalProjects = data.length || 1;
      const angleStepProjects = 360 / totalProjects;
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const radius = isMobile ? 300 : 600;

      // const scrolledHeight = scrollerRef?.current?.scrollTop ?? 0;
      // console.log(scrollerRef?.current?.scrollHeight);
      // const scrolledAnglePercentage =
      //   scrolledHeight / (scrollerRef?.current?.scrollHeight ?? 0);
      // const scrolledAngle = scrolledAnglePercentage * 360;
      // const state = { baseAngle: scrolledAngle + angleOffset } as {
      //   baseAngle: number;
      // };

      const state = { baseAngle: angleOffset } as {
        baseAngle: number;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3600",
          scrub: true,
          pin: false,
          scroller: scrollerRef?.current ?? undefined,
          onRefresh: (st) => {
            const el = scrollerRef?.current;
            if (el && st.scroller !== el) {
              // update target scroller and refresh
              (st as unknown as { vars: { scroller?: Element } }).vars.scroller = el;
              st.refresh();
            }
          },
        },
        defaults: { ease: "power1.inOut" },
      });

      // Rotate a full circle mapped to scroll; wrap to loop forever
      tl.to(state, { baseAngle: "+=262" });

      const update = () => {
        for (let i = 0; i < itemsRef.current.length; i += 1) {
          const el = itemsRef.current[i];
          if (!el) continue;
          const angleDeg = gsap.utils.wrap(
            0,
            360,
            state.baseAngle + i * angleStepProjects
          );
          const rad = (angleDeg * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          // scale by depth so focused items are larger (the ones on the left)
          const totalItems = itemsRef.current.length - 1;
          const focusedIndex =
            totalItems -
            1 -
            ((state.baseAngle - angleOffset) / 360) * itemsRef.current.length;
          const distance = Math.abs(i - focusedIndex);

          let scale = 1 - distance / (itemsRef.current.length - 1);
          if (scale < 0.3) {
            scale = 0;
          }

          // align tangentially to the circle (tangent angle is angleDeg + 90)
          const rotation = angleDeg - 180;

          el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
        }

        if (curvedTextsContainerRef.current) {
          curvedTextsContainerRef.current.style.transform = `rotate(${
            state.baseAngle - angleOffset
          }deg)`;
        }
      };

      gsap.ticker.add(update);

      // Initial position
      update();

      return () => {
        gsap.ticker.remove(update);
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, containerRef);

    return () => ctx.revert();
  }, [data, scrollerRef, companies]);

  return (
    <WheelContainer>
      <WheelInner ref={containerRef}>
        <CenterCircle>
          <CurvedTextsContainer ref={curvedTextsContainerRef}>
            {companies.map((c) => (
              <CurvedText
                key={c.name}
                text={c.name === "Betomorrow" ? c.name + " - " + c.role : c.name}
                radius={350}
                arc={c.occurrences * (360 / data.length)}
                initialAngle={
                  c.firstIndex * (360 / data.length) -
                  (c.name === "Betomorrow" ? 160 : 135)
                }
              />
            ))}
          </CurvedTextsContainer>
        </CenterCircle>
        <WorkText>Work</WorkText>
        {data.map((p, i) => (
          <ProjectItem
            key={p.slug}
            ref={(el) => {
              if (el) itemsRef.current[i] = el;
            }}
            aria-label={p.title}
            title={p.title}
            period={p.period}
            description={p.shortDescription}
            imageUrl={p.thumbnail}
            onClick={() =>
              openProjectModal({
                title: p.title,
                description: p.description,
                tech: p.tech,
                mainMedia: p.mainMedia,
                images: p.images,
                // Pass origin rect for FLIP transition
                originRect: itemsRef.current[i]?.getBoundingClientRect(),
              })
            }
          />
        ))}
        <ProjectModal open={open} data={modalData} onClose={handleCloseModal} />
      </WheelInner>
    </WheelContainer>
  );
}
