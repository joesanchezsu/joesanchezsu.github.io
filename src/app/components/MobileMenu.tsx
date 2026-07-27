"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuButton = styled.button`
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 1001;
  width: 50px;
  height: 50px;
  background: var(--yellow-photo);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: var(--yellow-photo-hover);
  }

  @media (max-width: 1199px) {
    display: flex;
  }
`;

const MenuLine = styled.span<{ $isOpen: boolean; $index: number }>`
  width: 28px;
  height: 3px;
  background: var(--background);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;

  ${({ $isOpen, $index }) => {
    if ($isOpen) {
      if ($index === 0) return "transform: rotate(45deg) translateY(8px);";
      if ($index === 1) return "opacity: 0;";
      if ($index === 2) return "transform: rotate(-45deg) translateY(-8px);";
    }
    return "";
  }}
`;

const MenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease;
  display: none;

  @media (max-width: 1199px) {
    display: block;
  }
`;

const MenuPanel = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: var(--background);
  border-right: 2px solid var(--yellow-photo);
  z-index: 1001;
  padding: 6rem 2rem 2rem;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1199px) {
    display: flex;
  }
`;

const MenuItem = styled(Link)<{ $isActive: boolean }>`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? "var(--yellow-photo)" : "var(--foreground)")};
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 2px solid
    ${({ $isActive }) => ($isActive ? "var(--yellow-photo)" : "transparent")};
  transition: color 0.3s ease, border-color 0.3s ease;

  &:hover {
    color: var(--yellow-photo);
    border-color: var(--yellow-photo);
  }
`;

const MenuItemExternal = styled.a<{ $isActive: boolean }>`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? "var(--yellow-photo)" : "var(--foreground)")};
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 2px solid
    ${({ $isActive }) => ($isActive ? "var(--yellow-photo)" : "transparent")};
  transition: color 0.3s ease, border-color 0.3s ease;

  &:hover {
    color: var(--yellow-photo);
    border-color: var(--yellow-photo);
  }
`;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
        <MenuLine $isOpen={isOpen} $index={0} />
        <MenuLine $isOpen={isOpen} $index={1} />
        <MenuLine $isOpen={isOpen} $index={2} />
      </MenuButton>

      <MenuOverlay $isOpen={isOpen} onClick={closeMenu} />

      <MenuPanel $isOpen={isOpen}>
        <MenuItem href="/" $isActive={pathname === "/"} onClick={closeMenu}>
          Home
        </MenuItem>
        <MenuItem href="/work" $isActive={pathname === "/work"} onClick={closeMenu}>
          Work
        </MenuItem>
        <MenuItem
          href="/experiments"
          $isActive={pathname === "/experiments"}
          onClick={closeMenu}
        >
          Experiments
        </MenuItem>
        <MenuItemExternal
          href="/docs/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          $isActive={false}
          onClick={closeMenu}
        >
          CV
        </MenuItemExternal>
      </MenuPanel>
    </>
  );
}
