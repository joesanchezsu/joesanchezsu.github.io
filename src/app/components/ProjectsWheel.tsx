"use client";

import { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { projects } from "../../data/projects";

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
  width: 520px;
  height: 520px;
`;

const Item = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--gray-200);
  background: transparent;
  color: var(--foreground);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  outline: none;

  @media (prefers-color-scheme: dark) {
    border-color: var(--gray-700);
  }
`;

export function ProjectsWheel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLButtonElement[]>([]);
  const data = useMemo(() => projects.slice(0, Math.min(projects.length, 10)), []);

  useEffect(() => {
    if (!containerRef.current) return;
    const total = data.length;
    const angleStep = 360 / total;
    const radius = 180;

    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      const a = (i * angleStep * Math.PI) / 180;
      const x = radius * Math.cos(a);
      const y = radius * Math.sin(a);
      const scale = 0.9 + (0.25 * (y / radius + 1)) / 2;
      const z = Math.round(scale * 100);
      el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`;
      (el.style as any).zIndex = String(z);
    });
  }, [data]);

  return (
    <WheelContainer>
      <WheelInner ref={containerRef}>
        {data.map((p, i) => (
          <Item
            key={p.slug}
            ref={(el) => {
              if (el) itemsRef.current[i] = el;
            }}
            aria-label={p.title}
          >
            {p.title}
          </Item>
        ))}
      </WheelInner>
    </WheelContainer>
  );
}
