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
  const data = useMemo(
    () => projects.reverse().slice(0, Math.min(projects.length, 12)),
    []
  );
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<ProjectModalData | undefined>();

  console.log({ data });

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CSSPlugin);
    if (!containerRef.current) return;

    // ensure internal scroller is used when available
    const ctx = gsap.context(() => {
      const total = data.length || 1;
      const angleStep = 360 / total;
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const radius = isMobile ? 300 : 600;
      const angleOffset = 252;

      const state = { baseAngle: angleOffset } as { baseAngle: number };

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
        defaults: { ease: "power1.inOut" },
      });

      // Rotate a full circle mapped to scroll; wrap to loop forever
      tl.to(state, { baseAngle: "+=262" });

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
            period={p.period}
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
