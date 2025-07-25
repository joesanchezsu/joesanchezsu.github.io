"use client";

import { ThemeToggle } from "./components/ThemeToggle";
import { SocialLinks } from "./components/SocialLinks";
import { Timeline } from "./components/Timeline";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--gray-200);

  @media (prefers-color-scheme: dark) {
    background-color: rgba(0, 0, 0, 0.8);
    border-bottom-color: var(--gray-800);
  }

  .dark & {
    background-color: rgba(0, 0, 0, 0.8);
    border-bottom-color: var(--gray-800);
  }
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
`;

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const HeroContent = styled.div`
  margin-bottom: 2rem;
`;

const Avatar = styled.div`
  width: 8rem;
  height: 8rem;
  margin: 0 auto 1.5rem;
  border-radius: 9999px;
  background-color: var(--gray-300);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-700);
  }

  .dark & {
    background-color: var(--gray-700);
  }
`;

const AvatarText = styled.span`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--gray-600);

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--foreground);
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--gray-600);
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

const HeroDescription = styled.p`
  color: var(--gray-600);
  max-width: 1536px;
  margin: 0 auto;

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

const TimelineSection = styled.section`
  margin-bottom: 4rem;
`;

const TimelineTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--foreground);
`;

const ContactSection = styled.section`
  margin-top: 4rem;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--foreground);
`;

const ContactDescription = styled.p`
  color: var(--gray-600);
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

const ContactActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const EmailButton = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: var(--black);
  color: var(--white);
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--gray-800);
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--white);
    color: var(--black);

    &:hover {
      background-color: var(--gray-200);
    }
  }

  .dark & {
    background-color: var(--white);
    color: var(--black);

    &:hover {
      background-color: var(--gray-200);
    }
  }
`;

const Footer = styled.footer`
  border-top: 1px solid var(--gray-200);
  margin-top: 4rem;

  @media (prefers-color-scheme: dark) {
    border-top-color: var(--gray-800);
  }

  .dark & {
    border-top-color: var(--gray-800);
  }
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  text-align: center;
  color: var(--gray-600);

  @media (prefers-color-scheme: dark) {
    color: var(--gray-400);
  }

  .dark & {
    color: var(--gray-400);
  }
`;

// Sample timeline data - replace with your actual data
const timelineData = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Tech Company",
    location: "San Francisco, CA",
    period: "2023 - Present",
    type: "work" as const,
    description:
      "Full-stack development with focus on React, Node.js, and cloud technologies.",
    projects: [
      {
        title: "E-commerce Platform",
        description:
          "Built a scalable e-commerce platform serving 100k+ users with real-time inventory management.",
        tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
        link: "https://github.com/joesanchezsu/ecommerce-platform",
      },
      {
        title: "Mobile App",
        description:
          "Developed a cross-platform mobile app for task management with offline capabilities.",
        tech: ["React Native", "TypeScript", "Firebase", "Redux"],
        link: "https://github.com/joesanchezsu/task-app",
      },
    ],
  },
  {
    id: "2",
    title: "Software Engineering Intern",
    company: "Startup Inc.",
    location: "New York, NY",
    period: "Summer 2022",
    type: "internship" as const,
    description: "Worked on frontend development and user experience improvements.",
    projects: [
      {
        title: "Dashboard Redesign",
        description: "Redesigned the main dashboard to improve user engagement by 40%.",
        tech: ["Vue.js", "D3.js", "SCSS", "Jest"],
        link: "https://github.com/joesanchezsu/dashboard-redesign",
      },
    ],
  },
  {
    id: "3",
    title: "Computer Science",
    company: "University of Technology",
    location: "Boston, MA",
    period: "2019 - 2023",
    type: "study" as const,
    description:
      "Bachelor's degree in Computer Science with focus on software engineering and algorithms.",
    projects: [
      {
        title: "Machine Learning Library",
        description:
          "Implemented a lightweight machine learning library for educational purposes.",
        tech: ["Python", "NumPy", "Matplotlib", "Jupyter"],
        link: "https://github.com/joesanchezsu/ml-library",
      },
      {
        title: "Database Management System",
        description: "Built a simple relational database management system from scratch.",
        tech: ["C++", "SQL", "File I/O", "Memory Management"],
        link: "https://github.com/joesanchezsu/dbms",
      },
    ],
  },
];

export default function Home() {
  return (
    <PageContainer>
      {/* Header */}
      <Header>
        <HeaderContent>
          <HeaderTitle>Joe Sanchez Su</HeaderTitle>
          <ThemeToggle />
        </HeaderContent>
      </Header>

      <Main>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            {/* Replace with your actual photo */}
            <Avatar>
              <AvatarText>JS</AvatarText>
            </Avatar>
            <HeroTitle>Joe Sanchez Su</HeroTitle>
            <HeroSubtitle>
              Software Engineer passionate about building impactful applications
            </HeroSubtitle>
            <HeroDescription>
              I&apos;m a full-stack developer with experience in modern web technologies,
              mobile development, and cloud platforms. I love creating user-centered
              solutions that solve real-world problems.
            </HeroDescription>
          </HeroContent>

          <SocialLinks justifyCenter />
        </HeroSection>

        {/* Timeline Section */}
        <TimelineSection>
          <TimelineTitle>Career Journey</TimelineTitle>
          <Timeline items={timelineData} />
        </TimelineSection>

        {/* Contact Section */}
        <ContactSection>
          <ContactTitle>Get In Touch</ContactTitle>
          <ContactDescription>
            I&apos;m always interested in new opportunities and collaborations.
          </ContactDescription>
          <ContactActions>
            <EmailButton href="mailto:joe@example.com">Email Me</EmailButton>
            <SocialLinks />
          </ContactActions>
        </ContactSection>
      </Main>

      {/* Footer */}
      <Footer>
        <FooterContent>
          <p>&copy; 2024 Joe Sanchez Su. Built with Next.js and Styled Components.</p>
        </FooterContent>
      </Footer>
    </PageContainer>
  );
}
