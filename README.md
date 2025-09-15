# John Eric Sanchez Suarez - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with dark/light mode support and a timeline showcasing career journey and projects.

## Features

- 🎨 Clean, modern design with Inter font
- 🌙 Dark/light mode toggle
- 📱 Fully responsive
- ⏰ Interactive timeline for career journey
- 🔗 Social media links (GitHub, LinkedIn, Twitter)
- 📁 Project showcase with tech stack
- 🚀 Optimized for GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theming**: next-themes
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/joesanchezsu/joesanchezsu.github.io.git
cd joesanchezsu.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

1. **Profile Photo**: Replace the placeholder in `src/app/page.tsx` with your actual photo
2. **Personal Details**: Update name, title, and description in the hero section
3. **Social Links**: Update URLs in `src/app/components/SocialLinks.tsx`
4. **Timeline Data**: Replace the sample data in `src/app/page.tsx` with your actual career timeline

### Timeline Data Structure

```typescript
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

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  images?: string[];
}
```

### Styling

The portfolio uses Tailwind CSS for styling. You can customize:

- Colors: Update the color scheme in `tailwind.config.js`
- Typography: Modify font settings in `src/app/layout.tsx`
- Layout: Adjust spacing and layout in component files

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your portfolio will be available at `https://joesanchezsu.github.io`

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. The static files will be generated in the `out` directory
3. Deploy the contents of the `out` directory to your hosting provider

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── SocialLinks.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Timeline.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
└── ...
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: joe@example.com
- GitHub: [@joesanchezsu](https://github.com/joesanchezsu)
- LinkedIn: [Joe Sanchez Su](https://linkedin.com/in/joesanchezsu)
- Twitter: [@joesanchezsu](https://twitter.com/joesanchezsu)
