"use client";

import Image from "next/image";
import styled from "styled-components";
import { SocialLinks } from "./SocialLinks";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const Container = styled.section`
  max-width: 680px;
  height: 100%;
  padding: 3rem;
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: 1rem 1rem 3rem 1rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

const DynamicName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--yellow-photo);
  margin-bottom: 1rem;
  position: relative;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

const CharSpan = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 300px;
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 2px solid var(--yellow-photo);
  width: 140px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  ${Content}:hover & {
    width: 300px;
  }

  @media (prefers-color-scheme: dark) {
    border: 2px solid var(--yellow-photo);
  }
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin-top: 60px;

  @media (max-width: 767px) {
    max-width: 250px;
    margin-top: 20px;
  }
`;

const Bio = styled.p`
  min-width: 320px;
  font-size: 1.2rem;
  color: var(--gray-400);

  @media (max-width: 767px) {
    min-width: 250px;
    max-width: 250px;
    font-size: 1rem;
  }
`;

const ResumeLink = styled.a`
  position: relative;
  margin-top: -4px;
  margin-left: 92px;
  display: inline-flex;
  align-self: flex-start;
  padding: 5px;
  font-weight: 700;
  color: var(--yellow-photo);
  font-size: 1.25rem;
  transition: background-color 200ms ease, color 200ms ease;

  > span:first-child {
    text-decoration: underline;
  }

  &:hover {
    color: var(--background);
    transition: color 300ms ease;
    will-change: color;
  }

  @media (max-width: 767px) {
    margin-top: 0px;
    margin-left: 0px;
    display: flex;
    align-self: center;
  }

  /* @media (prefers-color-scheme: dark) {
    border-color: var(--yellow-photo);
  } */
`;

const EyesIcon = styled.span`
  position: absolute;
  font-size: 2rem;
  margin-top: -7px;
  margin-left: -1px;
  transform: scale(0);
  transition: transform 250ms ease;
  will-change: transform;

  ${ResumeLink}:hover & {
    transform: scale(1.2, 1);
    transition: transform 250ms ease;
  }
`;

export function AboutSection() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const shortName = "J E  Schz";
  const fullName = "John Eric Sánchez Suárez";
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!nameRef.current) return;

    const shortChars = nameRef.current.querySelectorAll(".short-char");
    const fullChars = nameRef.current.querySelectorAll(".full-char");

    // Initial animation for short name
    gsap.fromTo(
      shortChars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.02,
        ease: "power2.out",
      }
    );

    return () => {
      gsap.killTweensOf(shortChars);
      gsap.killTweensOf(fullChars);
    };
  }, []);

  useEffect(() => {
    if (!nameRef.current) return;

    const shortChars = nameRef.current.querySelectorAll(".short-char");
    const fullChars = nameRef.current.querySelectorAll(".full-char");

    if (isHovered) {
      // Hide short name
      gsap.to(shortChars, {
        opacity: 0,
        y: -20,
        duration: 0.1,
        stagger: 0.015,
        ease: "power2.in",
      });

      // Show full name with slight delay
      gsap.fromTo(
        fullChars,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          stagger: 0.01,
          ease: "power2.out",
        }
      );
    } else {
      // Hide full name
      gsap.to(fullChars, {
        opacity: 0,
        y: 20,
        duration: 0.1,
        stagger: 0.015,
        ease: "power2.in",
      });

      // Show short name with slight delay
      gsap.fromTo(
        shortChars,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          stagger: 0.015,
          ease: "power2.out",
        }
      );
    }
  }, [isHovered]);

  const renderName = (text: string, className: string) => {
    return text.split("").map((char, i) => (
      <CharSpan key={`${className}-${i}`} className={className}>
        {char === " " ? "\u00A0" : char}
      </CharSpan>
    ));
  };

  return (
    <Container>
      <ContentContainer>
        <Content
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AvatarContainer>
            <DynamicName ref={nameRef}>
              <NameContainer>{renderName(shortName, "short-char")}</NameContainer>
              <NameContainer>{renderName(fullName, "full-char")}</NameContainer>
            </DynamicName>
            <Avatar>
              <Image
                src="/images/avatar.jpg"
                alt="John Eric Sánchez Suárez"
                width={300}
                height={450}
              />
            </Avatar>
          </AvatarContainer>
          <BioContainer>
            <Bio>
              I&apos;m a creative frontend developer and technologist with a background in
              mechatronics and cognitive engineering. With over 6 years of experience,
              I&apos;ve worked on web and mobile platforms, interactive installations, and
              research prototypes. I bring together technical expertise and a
              designer&apos;s eye to craft interfaces that are both functional and
              visually engaging.
            </Bio>
            <SocialLinks />
          </BioContainer>
        </Content>
        <ResumeLink
          href="/docs/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open CV in a new tab"
        >
          <span>CV</span>
          <EyesIcon>👀</EyesIcon>
        </ResumeLink>
      </ContentContainer>
    </Container>
  );
}
