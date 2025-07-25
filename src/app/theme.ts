export const theme = {
  colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
    gray: {
      100: "var(--gray-100)",
      200: "var(--gray-200)",
      300: "var(--gray-300)",
      400: "var(--gray-400)",
      500: "var(--gray-500)",
      600: "var(--gray-600)",
      700: "var(--gray-700)",
      800: "var(--gray-800)",
    },
    blue: {
      500: "var(--blue-500)",
      600: "var(--blue-600)",
    },
    green: {
      500: "var(--green-500)",
    },
    purple: {
      500: "var(--purple-500)",
    },
    black: "var(--black)",
    white: "var(--white)",
  },
  spacing: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    12: "3rem",
    16: "4rem",
    32: "8rem",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
  },
  fontWeight: {
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  borderRadius: {
    default: "0.25rem",
    lg: "0.5rem",
    full: "9999px",
  },
  breakpoints: {
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

export type Theme = typeof theme;
