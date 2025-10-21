"use client";

import { useMemo, useRef } from "react";
import styled from "styled-components";
import { projects } from "../../data/projects";
import { ProjectItem } from "./ProjectItem";
import { ProjectModal, ProjectModalData } from "./ProjectModal";
import { useState } from "react";
import CurvedText from "./CurvedText";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

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

const WheelWrapper = styled.div`
  position: relative;
  transform: translate(350px, 0px); /* static CSS transform */
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

const WheelInner = styled.div`
  position: relative;
  width: 1000px;
  height: 1000px;
`;

const CenterCircle = styled(motion.div)`
  position: absolute;
  left: 20%;
  top: 20%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  border: 2px solid var(--gray-400);
  background: rgba(0, 0, 0, 0);
  z-index: 0;
`;

const ItemsContainer = styled.div`
  position: absolute;
  left: -175px; // offset from center of the items container
  top: -125px; // offset from center of the items container
  width: 100%;
  height: 100%;
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
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<ProjectModalData | undefined>();
  // const translationOffset = { x: 350, y: 0 };
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const radius = isMobile ? 300 : 600;

  const { scrollYProgress } = useScroll({
    container: scrollerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0–1) → rotation degrees
  const wheelRotation = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const smoothRotation = useSpring(wheelRotation, { stiffness: 80, damping: 40 });

  const curvedTextsContainerRef = useRef<HTMLDivElement | null>(null);

  const data = useMemo(
    () => projects.reverse().slice(0, Math.min(projects.length, 10)),
    []
  );

  // const transformData = useMemo(() => {
  //   return data.map((p, i) => {
  //     const angleOffset = -108;
  //     const angleDeg = angleOffset + (i * 360) / data.length || 1;
  //     const x = radius * Math.cos((angleDeg * Math.PI) / 180);
  //     const y = radius * Math.sin((angleDeg * Math.PI) / 180);
  //     const scale = 1;
  //     const rotation = angleDeg - 180;

  //     return { x, y, scale, rotate: rotation };
  //   });
  // }, [data, radius]);

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

  const openProjectModal = (dataForModal: ProjectModalData) => {
    setModalData(dataForModal);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <WheelContainer>
      <WheelWrapper>
        <LayoutGroup>
          <WheelInner>
            <CenterCircle style={{ rotate: smoothRotation }}>
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

            <ItemsContainer>
              {data.map((p, i) => {
                const angleOffset = -108;
                const baseAngle = angleOffset + (i * 360) / data.length;

                return (
                  <ProjectItem
                    key={p.slug}
                    layoutId={p.slug}
                    aria-label={p.title}
                    title={p.title}
                    period={p.period}
                    description={p.shortDescription}
                    imageUrl={p.thumbnail}
                    baseAngle={baseAngle}
                    radius={radius}
                    wheelRotation={wheelRotation}
                    onClick={() =>
                      openProjectModal({
                        ...p,
                        layoutId: p.slug,
                      })
                    }
                  />
                );
              })}
            </ItemsContainer>

            <AnimatePresence>
              {open && modalData && (
                <ProjectModal open={open} data={modalData} onClose={handleCloseModal} />
              )}
            </AnimatePresence>
          </WheelInner>
        </LayoutGroup>
      </WheelWrapper>
    </WheelContainer>
  );
}

// style={{
//   transform: smoothRotation.to(r => `perspective(1000px) translate3d(${x}px, ${y}px, ${z}px) rotateY(${...}deg)`)
// }}
