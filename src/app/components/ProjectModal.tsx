"use client";

import React, { useEffect } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const Dialog = styled.div`
  width: min(900px, 92vw);
  max-height: 88vh;
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    border-color: var(--gray-700);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--gray-200);

  @media (prefers-color-scheme: dark) {
    border-color: var(--gray-700);
  }
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
`;

const Close = styled.button`
  border: none;
  background: transparent;
  color: var(--foreground);
  font-size: 0.95rem;
  cursor: pointer;
`;

const Body = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem 1.25rem 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: var(--gray-600);

  @media (prefers-color-scheme: dark) {
    color: var(--gray-300);
  }
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const MediaItem = styled.div`
  position: relative;
  padding-top: 62%;
  background: var(--gray-100);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: var(--gray-800);
    border-color: var(--gray-700);
  }
`;

const MediaImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export interface ProjectModalData {
  title: string;
  description?: string;
  tech?: string[];
  images?: string[];
}

interface ProjectModalProps {
  open: boolean;
  data?: ProjectModalData;
  onClose: () => void;
}

export function ProjectModal({ open, data, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  const portalTarget = typeof window !== "undefined" ? document.body : null;
  if (!portalTarget) return null;

  return createPortal(
    <Backdrop onClick={onClose}>
      <Dialog role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{data?.title}</Title>
          <Close onClick={onClose}>Close</Close>
        </Header>
        <Body>
          <Description>{data?.description}</Description>
          <MediaGrid>
            {(data?.images || []).slice(0, 4).map((src, i) => (
              <MediaItem key={i}>
                <MediaImg src={src} alt={`${data?.title} ${i + 1}`} />
              </MediaItem>
            ))}
          </MediaGrid>
        </Body>
      </Dialog>
    </Backdrop>,
    portalTarget
  );
}
