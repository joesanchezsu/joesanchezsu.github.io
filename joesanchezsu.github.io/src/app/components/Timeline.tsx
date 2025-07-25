import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  images?: string[];
}

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "internship" | "study";
  description: string;
  projects: Project[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const getTypeColor = (type: TimelineItem["type"]) => {
    switch (type) {
      case "work":
        return "bg-blue-500";
      case "internship":
        return "bg-green-500";
      case "study":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeLabel = (type: TimelineItem["type"]) => {
    switch (type) {
      case "work":
        return "Work Experience";
      case "internship":
        return "Internship";
      case "study":
        return "Education";
      default:
        return "Other";
    }
  };

  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={item.id} className="relative">
          {/* Timeline line */}
          {index < items.length - 1 && (
            <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
          )}

          <div className="flex items-start space-x-6">
            {/* Timeline dot */}
            <div
              className={`relative z-10 w-12 h-12 rounded-full ${getTypeColor(
                item.type
              )} flex items-center justify-center text-white text-xs font-medium`}
            >
              {index + 1}
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                      item.type
                    )} text-white`}
                  >
                    {getTypeLabel(item.type)}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">{item.company}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {item.description}
                </p>
              </div>

              {/* Projects */}
              {item.projects.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Key Projects</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {item.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-medium">{project.title}</h5>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
