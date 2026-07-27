export interface Experiment {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
  bgColor?: string;
  image?: string;
}

// Add your experiments here as you create them
export const experiments: Experiment[] = [
  // Example:
  // {
  //   id: "experiment-1",
  //   title: "Interactive Particles",
  //   description: "A WebGL particle system with mouse interaction",
  //   date: "2025-01",
  //   link: "/experiments/particles",
  //   bgColor: "#1a1a2e",
  //   image: "/images/experiments/particles.jpg"
  // }
];
