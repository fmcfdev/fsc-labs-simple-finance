"use client";

import { useEffect } from "react";
import { useAuthContext } from "../_contexts/auth";
import { Button } from "../_lib/components/ui/button";
import { useRouter } from "next/navigation";
import DashboardHeader from "../_components/DashboardHeader";
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
  if (!user) return null;
  return (
    <div className="dash-container">
      <DashboardHeader />
      <div className="mt-30 flex flex-col items-center">
        <Button onClick={handleSignOut}>Sair</Button>
      </div>
    </div>
  );
}
