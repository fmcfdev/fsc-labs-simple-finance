import { Sun } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex items-center justify-between pb-6">
      <div className="relative h-[26px] w-[330px]">
        <Image src="/images/logo.svg" alt="Logo" fill priority />
      </div>

      <Button size="icon" variant="ghost">
        <Sun color="white" size={20} />
      </Button>
    </div>
  );
}
