import { Github, Linkedin, Twitter } from "lucide-react";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/joesanchezsu",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/joesanchezsu",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/joesanchezsu",
      icon: Twitter,
    },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={link.name}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}
