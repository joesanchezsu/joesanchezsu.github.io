"use client";

import React, { forwardRef } from "react";
import styled from "styled-components";

const Card = styled.button`
  position: absolute; /* Positioned by parent (wheel) via transforms */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  margin-left: -2px;
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--foreground);

  @media (prefers-color-scheme: dark) {
    background: rgba(0, 0, 0, 0.5);
    color: var(--white);
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
    background: rgba(0, 0, 0, 0.5);
    color: var(--white);
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
  font-size: 0.95rem;
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
}

export const ProjectItem = forwardRef<HTMLButtonElement, ProjectItemProps>(
  ({ title, period, description, imageUrl, ...buttonProps }, ref) => {
    return (
      <Card ref={ref} {...buttonProps} aria-label={title}>
        <Media $image={imageUrl} />
        <Overlay>{description ? <OverlayText>{description}</OverlayText> : null}</Overlay>
        <Title>{title}</Title>
        {period && <Date>{period}</Date>}
      </Card>
    );
  }
);

ProjectItem.displayName = "ProjectItem";
