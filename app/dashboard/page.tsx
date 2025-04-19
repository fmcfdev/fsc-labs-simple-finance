"use client";

import { useEffect } from "react";
import { useAuthContext } from "../_contexts/auth";
import { Button } from "../_lib/components/ui/button";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const { signOut, user } = useAuthContext();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push("/signin");
  };

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user, router]);

  return (
    <div className="flex flex-col items-center">
      <h1>Dashboard</h1>
      <span>Página em construção!</span>
      <Button onClick={handleSignOut}>Sair</Button>
    </div>
  );
}
