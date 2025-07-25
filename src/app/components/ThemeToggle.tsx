"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--gray-100);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--gray-200);
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-800);

    &:hover {
      background-color: var(--gray-700);
    }
  }

  .dark & {
    background-color: var(--gray-800);

    &:hover {
      background-color: var(--gray-700);
    }
  }
`;

const Icon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  color: var(--foreground);
`;

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ToggleButton
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Icon>{theme === "dark" ? <Sun /> : <Moon />}</Icon>
    </ToggleButton>
  );
}
