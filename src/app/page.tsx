import { ThemeToggle } from "./components/ThemeToggle";
import { SocialLinks } from "./components/SocialLinks";
import { Timeline } from "./components/Timeline";

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
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Joe Sanchez Su</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-8">
            {/* Replace with your actual photo */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-600 dark:text-gray-400">
                JS
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Joe Sanchez Su</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Software Engineer passionate about building impactful applications
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I&apos;m a full-stack developer with experience in modern web technologies,
              mobile development, and cloud platforms. I love creating user-centered
              solutions that solve real-world problems.
            </p>
          </div>

          <SocialLinks className="justify-center" />
        </section>

        {/* Timeline Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Career Journey</h2>
          <Timeline items={timelineData} />
        </section>

        {/* Contact Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I&apos;m always interested in new opportunities and collaborations.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:joe@example.com"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Email Me
            </a>
            <SocialLinks />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Joe Sanchez Su. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
