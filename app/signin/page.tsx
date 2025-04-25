"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { OAuthProviders } from "../_components/OAuthProviders";
import { Button } from "../_lib/components/ui/button";
import { useAuthContext } from "../_contexts/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../_forms/schemas/user";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";

import { useState, useEffect } from "react";

import ThemeToggleBar from "../_components/ThemeToggle";
import { FloatingLabel } from "../_components/FloatingLabelInput";

type LoginFormData = z.infer<typeof loginFormSchema>;

export default function SignIn() {
  const router = useRouter();
  const { user, login, isInitializing } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  if (isInitializing || user) {
    return null;
  }

  return (
    <main className="flex h-full flex-col space-y-12">
      <div className="relative space-y-12">
        <ThemeToggleBar />

        <h1 className="mb-[30px] h-7 text-2xl font-semibold">
          Entrar na sua conta
        </h1>
        <p className="text-sm font-normal">
          Se não possui uma conta, você consegue{" "}
          <Link
            href="/signup"
            className="font-semibold text-[var(--primary)] underline decoration-[var(--primary)] underline-offset-4"
          >
            criar uma!
          </Link>
        </p>
      </div>

      <div className="flex w-full flex-col justify-between space-y-[50px]">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <FloatingLabel
              id="email"
              type="email"
              label="Email"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <p className="p-1 text-sm text-[var(--danger)]">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <FloatingLabel
                id="password"
                type={showPassword ? "text" : "password"}
                label="Senha"
                {...register("password", { required: true })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-[22px] -translate-y-1/2 text-[var(--muted-foreground)]"
              >
                {showPassword ? (
                  <Eye className="h-4 w-4 cursor-pointer" />
                ) : (
                  <EyeOff className="h-4 w-4 cursor-pointer" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="p-1 text-sm text-[var(--danger)]">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="min-h-[62px] w-full cursor-pointer rounded-[12px] bg-[var(--primary-button)] py-[22px] hover:bg-[var(--primary-button-hover)]"
          >
            Entrar
          </Button>
        </form>

        <OAuthProviders />
      </div>
    </main>
  );
}
