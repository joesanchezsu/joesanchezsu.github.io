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
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  border: 1px solid var(--yellow-photo);
  background: var(--background);
  color: var(--foreground);
  /* overflow: hidden; */
  cursor: pointer;
  outline: none;
  padding: 0;
  will-change: transform, opacity;

  @media (prefers-color-scheme: dark) {
    border-color: var(--yellow-photo);
  }
`;

const Media = styled.div<{ $image?: string }>`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
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
  font-size: 0.95rem;
  color: var(--foreground);

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
  padding: 16px;
  text-align: center;
  color: var(--white);
  background: rgba(0, 0, 0, 0);
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  opacity: 0;
  transition: opacity 220ms ease, background 220ms ease;
  backdrop-filter: blur(0px);
  overflow: hidden;

  ${Card}:hover & {
    opacity: 1;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(6px);
  }
`;

const OverlayText = styled.p`
  font-size: 0.95rem;
  line-height: 1.35;
`;

export interface ProjectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description?: string;
  imageUrl?: string;
}

export const ProjectItem = forwardRef<HTMLButtonElement, ProjectItemProps>(
  ({ title, description, imageUrl, ...buttonProps }, ref) => {
    return (
      <Card ref={ref} {...buttonProps} aria-label={title}>
        <Media $image={imageUrl} />
        <Overlay>{description ? <OverlayText>{description}</OverlayText> : null}</Overlay>
        <Title>{title}</Title>
      </Card>
    );
  }
);

ProjectItem.displayName = "ProjectItem";
