"use client";

import Image from "next/image";
import styled from "styled-components";
import { SocialLinks } from "./SocialLinks";

const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const Name = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--yellow-photo);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  gap: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 140px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    width: 300px;
  }

  @media (prefers-color-scheme: dark) {
    border-color: var(--gray-700);
  }
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const Bio = styled.p`
  min-width: 320px;
  font-size: 1.2rem;
  color: var(--gray-400);

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }
`;

export function AboutSection() {
  return (
    <Container>
      <Name>John Eric Sánchez Suárez</Name>
      <ContentContainer>
        <Content>
          <AvatarContainer>
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
              I’m a creative frontend developer and technologist with a background in
              mechatronics and cognitive engineering. With over 6 years of experience,
              I’ve worked on web and mobile platforms, interactive installations, and
              research prototypes. I bring together technical expertise and a designer’s
              eye to craft interfaces that are both functional and visually engaging.
            </Bio>
            <SocialLinks />
          </BioContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
}
