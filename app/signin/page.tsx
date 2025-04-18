"use client";

import Link from "next/link";
import Logo from "../_components/Logo";
import { OAuthProviders } from "../_components/OAuthProviders";
import { Button } from "../_lib/components/ui/button";
import { Input } from "../_lib/components/ui/input";
import { useAuthContext } from "../_contexts/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../_forms/schemas/user";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../_components/modeToggle";

type LoginFormData = z.infer<typeof loginFormSchema>;

export default function SignIn() {
  const { login, isInitializing } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema), // Integração com o zod
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
    }
  };

  if (isInitializing) {
    return <div>Carregando...</div>;
  }

  return (
    <main className="flex h-full flex-col items-center space-y-12">
      <div className="relative space-y-12">
        <div className="flex justify-between">
          <Logo className="mb-[50px]" />
          <span className="flex justify-end">
            <ModeToggle />
          </span>
        </div>

        <h1 className="mb-[30px] h-7 text-2xl font-semibold text-white">
          Entrar na sua conta
        </h1>
        <p className="text-sm font-normal">
          Se não possui uma conta, você consegue{" "}
          <Link
            href="/signup"
            className="font-semibold text-green-500 underline decoration-green-500 underline-offset-4 hover:text-green-400"
          >
            criar uma!
          </Link>
        </p>
      </div>

      <div className="flex w-full flex-col justify-between space-y-[50px]">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="h-[62px] w-full rounded-[12px] border-0 bg-white px-[22px] text-black focus:border-0 focus:ring-0 focus:outline-none"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="h-[62px] w-full rounded-[12px] border-0 bg-white px-[22px] pr-12 text-black focus:border-0 focus:ring-0 focus:outline-none"
                placeholder="Senha"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-[22px] -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="h-[62px] w-full cursor-pointer rounded-[12px] bg-[#55D462] text-white transition-colors duration-200 hover:bg-green-700"
          >
            Entrar
          </Button>
        </form>

        <OAuthProviders />
      </div>
    </main>
  );
}
