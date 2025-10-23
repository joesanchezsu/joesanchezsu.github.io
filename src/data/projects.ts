import { MediaItem } from "@/app/components/ProjectModal";

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription?: string;
  description: string;
  company?: string;
  role?: string;
  period?: string;
  location?: string;
  tech: string[];
  link?: string;
  github?: string;
  thumbnail?: string;
  mainMedia?: MediaItem;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "skillagora",
    slug: "skillagora",
    title: "SkillAgora",
    shortDescription: "Internal corporate training management platform.",
    description:
      "Internal corporate training management platform that enables organizations to create, manage, and track employee training programs. The platform features course creation tools, progress tracking, certification management, and comprehensive analytics to help companies optimize their learning and development initiatives.",
    company: "Betomorrow",
    role: "Software Developer",
    period: "2022 - 2024",
    location: "Bordeaux, France",
    tech: ["React.js", "React Native", "TypeScript", "Firebase", "Node.js", "Express"],
    link: "https://www.skillagora.com/",
    thumbnail: "/images/projects/skillagora/skillagora2.jpg",
    images: [
      "/images/projects/skillagora/skillagora2.jpg",
      "/images/projects/skillagora/skillagora.png",
    ],
  },
  {
    id: "tooshare",
    slug: "tooshare",
    title: "TooShare",
    shortDescription:
      "African social network dedicated to online education and knowledge sharing.",
    description:
      "African social network dedicated to online education and knowledge sharing. The platform connects learners across Africa, providing access to educational content, peer-to-peer learning opportunities, and community-driven knowledge exchange. Features include content creation tools, discussion forums, and progress tracking.",
    company: "Betomorrow",
    role: "Software Developer",
    period: "2021 - 2023",
    location: "Remote",
    tech: ["React.js", "GraphQL", "TypeScript", "Apollo Client", "Node.js", "MongoDB"],
    link: "https://www.tooshare.com/",
    thumbnail: "/images/projects/tooshare/tooshare.jpeg",
    images: [
      "/images/projects/tooshare/tooshare.jpeg",
      "/images/projects/tooshare/tooshare2.webp",
    ],
  },
  {
    id: "manuel-numerique-max",
    slug: "manuel-numerique-max",
    title: "Manuel Numérique Max",
    shortDescription:
      "Web & Mobile application for enriched visualization of Belin Education's digital manual.",
    description:
      "Web & Mobile application for enriched visualization of Belin Education's digital manual. The app provides interactive, multimedia content that enhances the traditional textbook experience with videos, animations, interactive exercises, and personalized learning paths for students.",
    company: "Betomorrow",
    role: "Software Developer",
    period: "2020 - 2022",
    location: "Bordeaux, France",
    tech: ["React.js", "React Native", "TypeScript", "Firebase", "Redux", "Expo"],
    link: "https://manuelnumeriquemax.belin.education/",
    thumbnail: "/images/projects/manuel-max/manuel_numerique.jpeg",
    images: ["/images/projects/manuel-max/manuel_numerique.jpeg"],
  },
  {
    id: "spot-inflows",
    slug: "spot-inflows",
    title: "Spot Inflows by SUEZ",
    shortDescription:
      "Interactive mapping app for detecting pipeline issues and analyzing multi-regional data across France.",
    description:
      "Research project in the form of a web application using interactive maps (Mapbox, GIS) to identify sections of pipeline networks needing inspection or repair. The application facilitates statistical analysis by assembling and processing existing data from multiple sources and regions of France, helping optimize maintenance operations.",
    company: "Betomorrow",
    role: "Software Developer",
    period: "2019 - 2021",
    location: "Bordeaux, France",
    tech: ["Angular", "Mapbox", "GIS", "Kotlin", "Spring Boot", "PostgreSQL"],
    thumbnail: "/images/projects/suez/suez-logo.jpg",
    images: ["/images/projects/suez/suez-logo.jpg"],
  },
  {
    id: "crazy-ideas",
    slug: "crazy-ideas",
    title: "Crazy Ideas - KTM Motohall",
    shortDescription:
      "Interactive touchscreen application for children to design their dream motorcycle and receive a personalized photo montage.",
    description:
      "Interactive touchscreen application for children to design their dream motorcycle and receive a personalized photo montage. Built for the KTM Motohall museum, this app emphasizes modular design, child-friendly UX, and creative simplicity in a constrained museum environment. Features intuitive drag-and-drop interface and real-time 3D preview.",
    company: "17K GmbH",
    role: "Creative Technologist Intern",
    period: "May - August 2018",
    location: "Stuttgart, Germany",
    tech: ["Processing", "Java", "UI/UX Design", "Computer Vision", "Touch Interface"],
    link: "https://www.17k.de/en/projects/ktm-motohall-mattighofen",
    thumbnail: "/images/projects/crazy-ideas/crazy-ideas.jpeg",
    images: [
      "/images/projects/crazy-ideas/crazy-ideas.jpeg",
      "/images/projects/crazy-ideas/crazy-ideas_app.png",
      "/images/projects/crazy-ideas/crazy-ideas_result.png",
    ],
  },
  {
    id: "become-a-hero",
    slug: "become-a-hero",
    title: "Become a Hero - KTM Motohall",
    shortDescription:
      "Webcam-based interactive experience that integrates a child's face into a superhero character.",
    description:
      "Webcam-based interactive experience that integrates a child's face into a superhero character. Built a custom background subtraction and face detection algorithm using Processing and OpenCV to handle uncontrolled lighting and posture variations. The app creates engaging, personalized experiences for museum visitors.",
    company: "17K GmbH",
    role: "Creative Technologist Intern",
    period: "May - August 2018",
    location: "Stuttgart, Germany",
    tech: [
      "Processing",
      "OpenCV",
      "Computer Vision",
      "UX Design",
      "Real-time Processing",
    ],
    link: "https://www.17k.de/en/projects/ktm-motohall-mattighofen",
    thumbnail: "/images/projects/become-hero/become-hero-result.png",
    images: [
      "/images/projects/become-hero/become-hero-result.png",
      "/images/projects/become-hero/become-hero.png",
      "/images/projects/become-hero/become-hero2.png",
      "/images/projects/become-hero/become-hero3.png",
      "/images/projects/become-hero/become-hero4.png",
    ],
  },
  {
    id: "inner-flower",
    slug: "inner-flower",
    title: "Inner Flower",
    shortDescription:
      "Tangible biofeedback device designed to support breathing-based relaxation and well-being.",
    description:
      "Inner Flower is a tangible biofeedback device designed to support breathing-based relaxation and well-being. The device uses LED lights and moving petals to provide real-time visual and kinetic feedback, guiding users through breathing exercises in a gentle, ambient manner. Patterns of light and motion sync with the user’s breathing, creating a calm and immersive experience that can be used for short breaks, stress reduction, or mindful interaction.\n When connected to a smartwatch, Inner Flower adapts dynamically to the user’s physiology, slightly adjusting the pace of the breathing guide based on heart rate, following principles of cardiac coherence. The flower form factor was chosen to evoke a natural, calming presence, reminiscent of taking a moment to breathe next to a plant. During my internship at Inria Bordeaux for the start-up Ullo, I developed the first prototype of Inner Flower, focusing on hardware and software development. I designed a respiration sensor using an Adafruit Feather 32u4 with Bluetooth, integrated Neopixel LEDs and a servo-driven petal mechanism, and programmed Arduino and Python scripts to capture, synchronize, and visualize physiological data from both the respiration sensor and a smartwatch. User testing protocols were created to refine interaction and ensure the device was intuitive, compact, and comfortable. The project combined mechatronics, physiological computing, and ambient interaction design, resulting in a responsive, calming object that bridges technology and well-being.",
    company: "Inria / Ullo Labs",
    role: "Research & Development Intern",
    period: "June - August 2017",
    location: "Bordeaux, France",
    tech: [
      "Python",
      "Arduino",
      "Raspberry Pi",
      "Bluetooth Low Energie",
      "Biofeedback",
      "Tangible interactions",
      "Physiological Sensors",
    ],
    link: "https://labs.ullo.fr/projects/flower/",
    thumbnail: "/images/projects/inner-flower/inner-flower.png",
    images: [
      "/images/projects/inner-flower/inner-flower.png",
      "/images/projects/inner-flower/inner-flower2.png",
    ],
  },
  {
    id: "carnaval-game",
    slug: "carnaval-game",
    title: "Carnaval Augmenté - The Game",
    shortDescription:
      "3-level 2D platformer developed for the Carnaval Augmenté de Bordeaux.",
    description:
      "This project is a 3-level 2D platformer developed for the Carnaval Augmenté de Bordeaux, designed to introduce players to the carnival’s augmented reality experience and immerse them in its story. The game progresses through **seasonal environments—from winter to summer—**creating a dynamic visual journey for the player. Its arcade-style gameplay draws inspiration from classic platformers, providing an engaging and playful experience for a wide audience. I worked on the entire game development, from conceptualizing the gameplay and level design to implementing mechanics and graphics in Unity 2D. Iterative testing with focus groups and real users helped refine the experience and ensure smooth gameplay, while integrating the game’s narrative and visual style to complement the broader carnival exhibition.",
    company: "ENSC - Bordeaux INP",
    period: "2019",
    location: "Bordeaux, France",
    tech: ["Unity", "C#", "2D Platformer", "Game Design"],
    github: "https://github.com/joesanchezsu/Monsieur-Carnaval-Game",
    thumbnail: "/images/projects/carnaval-game/carnaval.png",
    mainMedia: {
      src: "/images/projects/carnaval-game/carnaval_game.mp4",
      type: "video",
      alt: "Carnaval Augmenté - The Game",
    },
    images: [
      "/images/projects/carnaval-game/carnaval.png",
      "/images/projects/carnaval-game/carnaval-game3.jpg",
      "/images/projects/carnaval-game/carnaval-ar.png",
    ],
  },
  {
    id: "crehappy",
    slug: "crehappy",
    title: "CreHappy",
    shortDescription:
      "Interactive digital painting application designed for art therapy and creative exploration.",
    description:
      "This project is an interactive digital painting application designed for art therapy and creative exploration. It transforms hand gestures into expressive digital brushstrokes, simulating action painting where spontaneous movement becomes the core of expression. The application encourages users to focus on the act of creation itself, fostering creativity, relaxation, and well-being. The system uses a Leap Motion sensor to track hand movements, translating gestures into fluid brushstrokes with textures resembling real paint. To enhance interactivity, an ultrasonic sensor (HC-SR04) with Arduino MEGA 2560 measures motion distance, dynamically influencing brush color. Data flows between the hardware and the Processing 3 application using the AP-SYNC library, while the Leap Motion Processing library allows precise capture of hands and fingers gestures for artistic control. \nThe project aimed to create a first version of a tool that can be scaled for art therapy, public exhibitions, or personal creative exploration, providing an immersive and expressive digital painting experience.",
    company: "ENSC - Bordeaux INP",
    period: "2018",
    location: "Bordeaux, France",
    tech: ["Arduino", "Leap Motion", "Processing", "Motion Detection", "AP-SYNC library"],
    github: "https://github.com/joesanchezsu/crehappy",
    thumbnail: "/images/projects/crehappy/crehappy.png",
    mainMedia: {
      src: "/images/projects/crehappy/crehappy_clip.mp4",
      type: "video",
      alt: "CreHappy",
    },
    images: [
      "/images/projects/crehappy/crehappy.png",
      "/images/projects/crehappy/crehappy2.png",
    ],
  },
  {
    id: "intui-son",
    slug: "intui-son",
    title: "Intuit'Son",
    shortDescription:
      "Experimental musical instrument that transforms gesture into sound using Kinect motion tracking.",
    description:
      "Intui’Son is an experimental musical instrument that transforms gesture into sound using Kinect motion tracking. I contributed both to the development and to the design of the interactive interface, which provides users with real-time visual feedback to adjust their movements and create a fluid musical experience. The project included building the motion detection system, designing intuitive interaction flows, and testing usability to make the instrument accessible and playful.",
    company: "ENSC - Bordeaux INP",
    period: "2017",
    location: "Bordeaux, France",
    tech: ["Processing", "Kinect", "MIDI"],
    github: "",
    thumbnail: "/images/projects/intui-son/intui-son.png",
    images: ["/images/projects/intui-son/intui-son.png"],
  },
];
