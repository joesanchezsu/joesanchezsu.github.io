"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Card = styled(motion.button)`
  position: absolute; /* Positioned by parent (wheel) via transforms */
  left: 50%;
  top: 50%;
  width: 350px;
  height: 250px;
  border-radius: 0px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background: var(--background);
  color: var(--foreground);
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  will-change: transform, opacity;

  @media (prefers-color-scheme: dark) {
    border: none;
  }
`;

const Media = styled.div<{ $image?: string }>`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background: ${({ $image }) =>
    $image ? `center/cover no-repeat url('${$image}')` : "var(--gray-100)"};

  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-800);
  }
`;

const Title = styled.div`
  position: absolute;
  left: 0px;
  bottom: -34px;
  z-index: 2;
  padding: 6px 10px;
  padding-left: 0;
  margin-left: -1px;
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--foreground);

  @media (prefers-color-scheme: dark) {
    color: var(--gray-100);
  }
`;

const Date = styled.div`
  position: absolute;
  left: 0px;
  top: -11px;
  z-index: 2;
  padding: 6px 10px;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--foreground);
  transform-origin: left top;
  transform: rotate(-270deg);

  @media (prefers-color-scheme: dark) {
    color: var(--gray-100);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px;
  text-align: center;
  color: var(--white);
  background: rgba(0, 0, 0, 0);
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border: 2px solid #000000;
  opacity: 0;
  transition: opacity 400ms ease, background 400ms ease, border 400ms ease;
  backdrop-filter: blur(0px);
  overflow: hidden;

  ${Card}:hover & {
    opacity: 1;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(7px);
    border: 2px solid var(--yellow-photo);
  }
`;

const OverlayText = styled.p`
  font-size: 1.2rem;
  line-height: 1.35;
  text-align: left;
  max-height: 200px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 400ms ease, transform 400ms ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export interface ProjectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  period?: string;
  description?: string;
  imageUrl?: string;
  layoutId?: string;
  baseAngle: number;
  radius: number;
  wheelRotation: MotionValue<number>;
}

export const ProjectItem = ({
  title,
  period,
  description,
  imageUrl,
  layoutId,
  onClick,
  baseAngle,
  radius,
  wheelRotation,
}: ProjectItemProps) => {
  // Compute angle based on scroll-driven wheelRotation
  const angle = useTransform(wheelRotation, (r) => baseAngle + r);
  const x = useTransform(angle, (a) => radius * Math.cos((a * Math.PI) / 180));
  const y = useTransform(angle, (a) => radius * Math.sin((a * Math.PI) / 180));
  const rotate = useTransform(angle, (a) => a - 180);

  return (
    <Card
      layoutId={layoutId}
      aria-label={title}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ x, y, rotate }}
    >
      <Media $image={imageUrl} />
      <Overlay>{description ? <OverlayText>{description}</OverlayText> : null}</Overlay>
      <Title>{title}</Title>
      {period && <Date>{period}</Date>}
    </Card>
  );
};
