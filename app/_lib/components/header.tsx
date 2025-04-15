"use client";

import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex items-center justify-between pb-6">
      <div className="relative h-[26px] w-[330px]">
        <Image src="/images/logo.svg" alt="Logo" fill priority />
      </div>

      <Button size="icon" variant="ghost" onClick={toggleTheme}>
        {theme === "dark" ? (
          <Sun color="white" size={20} />
        ) : (
          <Moon color="white" size={20} />
        )}
      </Button>
    </div>
  );
}
