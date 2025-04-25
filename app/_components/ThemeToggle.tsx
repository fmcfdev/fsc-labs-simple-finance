"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function ThemeToggleBar() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="relative mb-[50px] flex w-full items-center justify-between">
      <Logo isDark={isDark} />

      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="absolute -top-5 right-2 cursor-pointer rounded-md p-1 transition"
        aria-label="Alternar tema"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
