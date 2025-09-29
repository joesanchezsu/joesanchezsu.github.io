"use client";

import Image from "next/image";
import { SocialLinks } from "./components/SocialLinks";
import { Timeline } from "./components/Timeline";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
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
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-700);
  }

  .dark & {
    background-color: var(--gray-700);
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
    company: "Betomorrow",
    location: "Bordeaux, France",
    period: "February 2019 to January 2025",
    type: "work" as const,
    description: "Cross-platform developer on web & mobiles applications.",
    projects: [
      {
        title: "Sport Inflows by SUEZ",
        description:
          "Research project in the form of a web application using interactive maps (Mapbox, GIS) to identify sections of pipeline networks needing inspection or repair and facilitating statistical analysis, assembling and processing existing data from multiple sources and regions of France.",
        tech: ["Angular", "Mapbox", "GIS", "Kotlin"],
        link: "",
      },
      {
        title: "SkillAgora",
        description: "Internal corporate training management platform.",
        tech: ["React.js", "React Native", "TypeScript", "Firebase"],
        link: "https://www.skillagora.com/",
        slug: "skillagora",
      },
      {
        title: "TooShare",
        description:
          "African social network dedicated to online education and knowledge sharing.",
        tech: ["React.js", "GraphQL", "TypeScript"],
        link: "https://www.tooshare.com/",
        slug: "tooshare",
      },
      {
        title: "Manuel Numérique Max",
        description:
          "Web & Mobile app for an enriched (interactive, multimedia) visualization of Belin Education's digital manual.",
        tech: ["React.js", "React Native", "TypeScript", "Firebase"],
        link: "https://manuelnumeriquemax.belin.education/",
        slug: "manuel-numerique-max",
      },
    ],
  },
  {
    id: "2",
    title: "Creative Technologist Intern",
    company: "17K GmbH",
    location: "Stuttgart, Germany",
    period: "May to August 2018",
    type: "internship" as const,
    description:
      "Conceived, designed, and developed two interactive touchscreen applications for the KTM Motohall museum using Processing (Java). Focused on building engaging experiences for children through creative UI/UX and custom computer vision algorithms.",
    projects: [
      {
        title: "Crazy Ideas",
        description:
          "Interactive app for children to design their dream motorcycle and receive a personalized photo montage. Emphasized modular design, child-friendly UX, and creative simplicity in a constrained museum environment.",
        tech: ["Processing", "Java", "UI/UX Design"],
        link: undefined,
        slug: "crazy-ideas",
      },
      {
        title: "Become a Hero",
        description:
          "A webcam-based interactive experience that integrated a child's face into a superhero character. Built a custom background subtraction and face detection algorithm using Processing and OpenCV to handle uncontrolled lighting and posture variations.",
        tech: ["Processing", "OpenCV", "Computer Vision", "UX"],
        link: undefined,
        slug: "become-a-hero",
      },
    ],
  },
  {
    id: "3",
    title: "Research & Development Intern",
    company: "Inria / Ullo Labs",
    location: "Bordeaux, France",
    period: "June to August 2017",
    type: "internship" as const,
    description:
      "Co-developed the first prototype of Inner Flower. Focused on hardware and software development, ambient interaction, physiological computing, and the creation of a responsive object that supports breathing-based relaxation and well-being.",
    projects: [
      {
        title: "Inner Flower",
        description:
          "A tangible biofeedback device that visualizes physiological signals through a responsive, flower-shaped object. Focused on ambient interaction design, physiological computing, and therapeutic applications for well-being. Translates physiological data (breath, heart rate, HRV) into visual and kinetic feedback using LED light and petal motion.",
        tech: [
          "Python",
          "Arduino",
          "Bluetooth",
          "Raspberry Pi",
          "Bluetooth Low Energie",
          "Biofeedback",
          "Tangible interactions",
          "Physiological Sensors",
        ],
        link: undefined,
        slug: "inner-flower",
      },
    ],
  },
  {
    id: "4",
    title:
      "Master's-level Engineering Degree in Cognitive Science and Technology (Diplôme d'Ingénieur)",
    company: "École Nationale Supérieure de Cognitique, Bordeaux INP",
    location: "Bordeaux, France",
    period: "2016 - 2019",
    type: "study" as const,
    description:
      "A multidisciplinary program focused on human-system interaction, cognitive technologies, and the human factor.",
    projects: [
      {
        title: "Carnaval Augmenté - The Game",
        description:
          "A 2D platformer built in Unity to immerse players in the world of Bordeaux’s Augmented Carnival, with evolving environments across three levels and playful arcade-style gameplay.",
        tech: ["Unity", "C#", "2D Platformer", "Game Design"],
        link: undefined,
        slug: "carnaval-game",
      },
      {
        title: "CreHappy",
        description:
          "Interactive Digital Painting Tool for Art Therapy — A gesture-based painting app built with Leap Motion and Arduino that transforms physical movements into expressive digital brushstrokes, focusing on creativity and well-being.",
        tech: [
          "Arduino",
          "Leap Motion",
          "Processing",
          "Motion Detection",
          "AP-SYNC library",
        ],
        link: undefined,
        slug: "crehappy",
      },
      {
        title: "Intui'Son",
        description:
          "Intui’Son is a digital musical instrument powered by Kinect, transforming body movements into sound through real-time motion detection and an interactive interface.",
        tech: ["Processing", "Kinect", "MIDI"],
        link: undefined,
        slug: "intui-son",
      },
    ],
  },
  {
    id: "5",
    title: "Mechatronics Engineering",
    company: "Universidad Nacional de Colombia",
    location: "Bogotá, Colombia",
    period: "2009 - 2016",
    type: "study" as const,
    description:
      "Bachelor's degree in Mechatronics Engineering with a focus on robotics, automation, and control systems.",
    projects: [],
  },
  {
    id: "6",
    title:
      "Exchange Year in TUM Munich as part of the program “Mejores Promedios” (Best Grades)",
    company: "Technical University of Munich",
    location: "Munich, Germany",
    period: "2014 - 2015",
    type: "study" as const,
    description:
      "Exchange year in TUM Munich as part of the program “Mejores Promedios” (Best Grades)",
    projects: [],
  },
];

export default function Home() {
  return (
    <PageContainer>
      <Main>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <Avatar>
              <Image
                src="/images/avatar.jpg"
                alt="John Eric Sánchez Suárez"
                width={220}
                height={220}
              />
            </Avatar>
            <HeroTitle>John Eric Sánchez Suárez</HeroTitle>
            <HeroSubtitle>
              Software Engineer passionate about web technologies and human-systems
              interaction
            </HeroSubtitle>
            <HeroDescription>
              Along my career, I have had the experience of working in modern web
              technologies, mobile development, and cloud platforms. I combine technical
              expertise with creative problem-solving to deliver meaningful, innovative
              solutions.
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
            <EmailButton href="mailto:jsanchezsua@ensc.fr">Email Me</EmailButton>
            <SocialLinks />
          </ContactActions>
        </ContactSection>
      </Main>

      {/* Footer */}
      <Footer>
        <FooterContent>
          <p>&copy; 2025 Made with ❤️ by John Eric Sánchez Suárez</p>
        </FooterContent>
      </Footer>
    </PageContainer>
  );
}
