"use client";

import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center justify-between pb-6">
      <div className="flex items-center gap-1">
        <div className="relative h-[20px] w-[23.32px]">
          <Image src="/images/logo.svg" alt="Logo" fill priority />
        </div>
        <h1 className="font-medium">Simple Finance</h1>
      </div>

      <Button size="icon" variant="ghost" onClick={toggleTheme}>
        {theme === "dark" ? (
          <Sun color="white" size={20} />
        ) : (
          <Moon color="black" size={20} />
        )}
        <span className="sr-only">Alternar tema</span>
      </Button>
    </div>
  );
}
