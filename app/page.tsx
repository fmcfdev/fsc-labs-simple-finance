"use client";

import Image from "next/image";
import { Button } from "./_lib/components/ui/button";
import Link from "next/link";

import ThemeToggle from "./_components/ThemeToggle";

import { useRouter } from "next/navigation";
import { useAuthContext } from "./_contexts/auth";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  const { user, isInitializing } = useAuthContext();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  if (isInitializing || user) {
    return null;
  }

  return (
    <main className="flex w-full flex-col">
      <ThemeToggle />
      <Image
        src="/images/simple-finance-home.svg"
        width={330}
        height={285}
        alt="Simple Finance Home"
        className="mr-auto mb-[50px] ml-auto"
      />
      <h2 className="mb-[20px] text-[27px] leading-10 font-semibold">
        Controle suas finanças pessoais de maneira{" "}
        <span className="text-[var(--primary)]">fácil e inteligente!</span>
      </h2>
      <p className="mb-[20px] leading-5 font-light text-[var(--muted-foreground)]">
        Organize e planeje suas metas financeiras com nossa plataforma
        simplificada.
      </p>
      <Link href="/signup" passHref>
        <Button className="mb-5 min-h-[62px] w-full cursor-pointer rounded-[12px] bg-[var(--primary-button)] py-[22px] hover:bg-[var(--primary-button-hover)]">
          Experimente agora mesmo!
        </Button>
      </Link>
      <Link href="/signin" passHref>
        <Button className="mb-5 min-h-[62px] w-full cursor-pointer rounded-[12px] bg-[var(--secondary-button)] py-[22px] hover:bg-[var(--secondary-button-hover)]">
          Entrar na minha conta
        </Button>
      </Link>
    </main>
  );
};

export default Home;
