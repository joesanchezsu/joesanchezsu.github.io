"use client";

import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import CurvedText from "./CurvedText";

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: var(--background);
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const Dialog = styled(motion.div)`
  position: relative;
  width: min(86vw, 92vw);
  min-height: 86vh;
  max-height: 92vh;
  background: rgba(17, 17, 17, 0.7);
  color: var(--foreground);
  border: 2px solid var(--yellow-photo);
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  overflow: visible;

  @media (prefers-color-scheme: dark) {
    border: 2px solid var(--yellow-photo);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;

  @media (prefers-color-scheme: dark) {
    border-color: var(--gray-700);
  }
`;

const Title = styled.h3`
  font-size: 4.5rem;
  font-weight: 700;
`;

const CurvedCloseContainer = styled.div`
  position: absolute;
  top: -19px;
  right: 113px;
  width: 50px;
  height: 50px;
  z-index: 10;
`;

const Body = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1rem 3rem 3rem;
  height: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 1fr;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--gray-300);

  @media (prefers-color-scheme: dark) {
    color: var(--gray-300);
  }
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`;

const MainMedia = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; //16:9 aspect ratio
  overflow: hidden;
`;

const MainImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const MainVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const ThumbnailItem = styled.div<{ $isActive?: boolean }>`
  position: relative;
  padding-top: 75%; // 4:3 aspect ratio for thumbnails
  background: var(--gray-100);
  overflow: hidden;
  cursor: pointer;
  border: 4px solid
    ${({ $isActive }) => ($isActive ? "var(--yellow-photo)" : "transparent")};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--yellow-photo);
  }

  @media (prefers-color-scheme: dark) {
    background: var(--gray-800);
  }
`;

const ThumbnailImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ThumbnailVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export interface MediaItem {
  src: string;
  type: "image" | "video";
  alt?: string;
}

export interface ProjectModalData {
  title: string;
  description?: string;
  tech?: string[];
  mainMedia?: MediaItem;
  thumbnails?: MediaItem[];
  images?: string[];
  layoutId?: string;
}

interface ProjectModalProps {
  open: boolean;
  data?: ProjectModalData;
  onClose: () => void;
}

export function ProjectModal({ open, data, onClose }: ProjectModalProps) {
  const [selectedMedia, setSelectedMedia] = React.useState<MediaItem | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Set initial selected media when modal opens
  useEffect(() => {
    if (open && data) {
      if (data.mainMedia) {
        setSelectedMedia(data.mainMedia);
      } else if (data.images && data.images.length > 0) {
        setSelectedMedia({
          src: data.images[0],
          type: "image",
          alt: `${data.title} main image`,
        });
      }
    }
  }, [open, data]);

  const portalTarget = typeof window !== "undefined" ? document.body : null;
  if (!portalTarget) return null;

  // Helper function to get all media items
  const getAllMedia = (): MediaItem[] => {
    if (data?.mainMedia && data?.thumbnails) {
      return [data.mainMedia, ...data.thumbnails];
    }
    if (data?.images) {
      const images = data.images.map((src, i) => ({
        src,
        type: "image" as const,
        alt: `${data.title} ${i + 1}`,
      }));
      if (data?.mainMedia) {
        return [data.mainMedia, ...images];
      }
      return images;
    }
    return [];
  };

  const allMedia = getAllMedia();

  return (
    open &&
    data &&
    createPortal(
      <Backdrop
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Dialog
          layoutId={data?.layoutId}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          <CurvedCloseContainer>
            <CurvedText
              text="close"
              radius={90}
              arc={120}
              initialAngle={240}
              color="var(--yellow-photo)"
              onTextClick={onClose}
            />
          </CurvedCloseContainer>
          <Header>
            <Title>{data?.title}</Title>
          </Header>
          <Body>
            <MediaContainer>
              {selectedMedia && (
                <MainMedia>
                  {selectedMedia.type === "video" ? (
                    <MainVideo
                      src={selectedMedia.src}
                      controls
                      autoPlay
                      muted
                      loop
                      aria-label={selectedMedia.alt || `${data?.title} video`}
                    />
                  ) : (
                    <MainImg
                      src={selectedMedia.src}
                      alt={selectedMedia.alt || `${data?.title} main image`}
                    />
                  )}
                </MainMedia>
              )}

              {allMedia.length > 1 && (
                <ThumbnailGrid>
                  {allMedia.map((media, i) => (
                    <ThumbnailItem
                      key={i}
                      $isActive={selectedMedia?.src === media.src}
                      onClick={() => setSelectedMedia(media)}
                    >
                      {media.type === "video" ? (
                        <ThumbnailVideo
                          src={media.src}
                          muted
                          aria-label={media.alt || `${data?.title} thumbnail ${i + 1}`}
                        />
                      ) : (
                        <ThumbnailImg
                          src={media.src}
                          alt={media.alt || `${data?.title} thumbnail ${i + 1}`}
                        />
                      )}
                    </ThumbnailItem>
                  ))}
                </ThumbnailGrid>
              )}
            </MediaContainer>
            <Description>{data?.description}</Description>
          </Body>
        </Dialog>
      </Backdrop>,
      portalTarget
    )
  );
}
