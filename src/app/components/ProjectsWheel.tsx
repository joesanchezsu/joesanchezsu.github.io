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
`;

export function ProjectsWheel({
  scrollerRef,
}: {
  scrollerRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLButtonElement[]>([]);
  const data = useMemo(() => projects.slice(0, Math.min(projects.length, 12)), []);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<ProjectModalData | undefined>();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CSSPlugin);
    if (!containerRef.current) return;

    // ensure internal scroller is used when available

    const ctx = gsap.context(() => {
      const total = data.length || 1;
      const angleStep = 360 / total;
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const radius = isMobile ? 300 : 600;

      const state = { baseAngle: 0 } as { baseAngle: number };

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
              // @ts-expect-error: vars is writable config
              st.vars.scroller = el;
              st.refresh();
            }
          },
        },
        defaults: { ease: "none" },
      });

      // Rotate a full circle mapped to scroll; wrap to loop forever
      tl.to(state, { baseAngle: "+=360" });

      const frontAngle = -180; // front at screen center (downwards visually if y grows positive)
      const visibleWindow = 120; // degrees span for full opacity (shows ~3-5 items)
      const initialPosition = { x: 370, y: -40 };

      // Ensure each element starts centered via translate(-50%, -50%)
      itemsRef.current.forEach((el) => {
        if (!el) return;
        el.style.transform = "translate(-50%, -50%)";
      });

      const update = () => {
        for (let i = 0; i < itemsRef.current.length; i += 1) {
          const el = itemsRef.current[i];
          if (!el) continue;
          const angleDeg = gsap.utils.wrap(0, 360, state.baseAngle + i * angleStep);
          const rad = (angleDeg * Math.PI) / 180;
          const x = radius * Math.cos(rad) + initialPosition.x;
          const y = radius * Math.sin(rad) + initialPosition.y;

          // scale by depth so front items are larger
          // const depth = (y + radius) / (2 * radius); // 0..1
          const scale = 1; // 0.85 + depth * 0.35; // 0.85..1.2
          const z = Math.round(scale * 100);

          // align tangentially to the circle (tangent angle is angleDeg + 90)
          const rotation = angleDeg - 180;

          // opacity window: show only those near front
          // const delta = Math.abs(gsap.utils.wrap(-180, 180, angleDeg - frontAngle));
          // const opacity = delta < visibleWindow ? 1 : 0;

          el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
          // el.style.opacity = String(opacity);
          // el.style.zIndex = String(z);
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
  }, [data, scrollerRef]);

  return (
    <WheelContainer>
      <WheelInner ref={containerRef}>
        {data.map((p, i) => (
          <ProjectItem
            key={p.slug}
            ref={(el) => {
              if (el) itemsRef.current[i] = el;
            }}
            aria-label={p.title}
            title={p.title}
            description={p.description}
            imageUrl={p.images?.[0]}
            onClick={() => {
              setModalData({
                title: p.title,
                description: p.description,
                tech: p.tech,
                images: p.images,
              });
              setOpen(true);
            }}
          />
        ))}
        <ProjectModal open={open} data={modalData} onClose={() => setOpen(false)} />
      </WheelInner>
    </WheelContainer>
  );
}
