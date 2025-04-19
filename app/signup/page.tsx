"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "../_lib/components/ui/input";
import { Button } from "../_lib/components/ui/button";
import { useAuthContext } from "../_contexts/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema } from "../_forms/schemas/user";
import { z } from "zod";
import ThemeToggleBar from "../_components/ThemeToggle";

type SignUpFormData = z.infer<typeof signupFormSchema>;

export default function SignUp() {
  const router = useRouter();
  const { user, isInitializing, signup } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    if (data.password !== data.passwordConfirmation) {
      return;
    }

    try {
      const response = await signup({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });

      console.log("Cadastro realizado com sucesso:", response);
    } catch (error) {
      console.error("Erro ao realizar o cadastro:", error);
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
    <main className="flex min-h-screen flex-col">
      {/* Header com Logo */}
      <div className="relative mb-[50px]">
        <ThemeToggleBar />

        <h1 className="mb-[30px] h-[26px] text-[24px] font-semibold">
          Criar sua conta
        </h1>
        <p className="text-sm font-normal">
          Se já possui uma conta, você consegue fazer{" "}
          <Link
            href="/signin"
            className="font-semibold text-[var(--primary)] underline decoration-[var(--primary)] underline-offset-4"
          >
            Login aqui!
          </Link>
        </p>
      </div>

      {/* Form */}
      <form
        className="mb-[50px] w-full space-y-[20px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative">
          <Input
            id="firstName"
            type="text"
            {...register("firstName")}
            className="h-[62px] w-full rounded-[12px] border-0 bg-[var(--input)] px-[22px] text-[var(--input-foreground)] focus:border-0 focus:ring-0 focus:outline-none"
            placeholder="Primeiro nome"
          />
          {errors.firstName && (
            <p className="p-1 text-sm text-[var(--danger)]">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="relative">
          <Input
            id="lastName"
            type="text"
            {...register("lastName")}
            className="h-[62px] w-full rounded-[12px] border-0 bg-[var(--input)] px-[22px] text-[var(--input-foreground)] focus:border-0 focus:ring-0 focus:outline-none"
            placeholder="Sobrenome"
          />
          {errors.lastName && (
            <p className="p-1 text-sm text-[var(--danger)]">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div className="relative">
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="h-[62px] w-full rounded-[12px] border-0 bg-[var(--input)] px-[22px] text-[var(--input-foreground)] focus:border-0 focus:ring-0 focus:outline-none"
            placeholder="Email"
          />
          {errors.email && (
            <p className="p-1 text-sm text-[var(--danger)]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="h-[62px] w-full rounded-[12px] border-0 bg-[var(--input)] px-[22px] text-[var(--input-foreground)] focus:border-0 focus:ring-0 focus:outline-none"
              placeholder="Senha"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-[22px] -translate-y-1/2 text-[var(--muted-foreground)]"
            >
              {showPassword ? (
                <Eye className="h-4 w-4" />
              ) : (
                <EyeOff className="h-4 w-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="p-1 text-sm text-[var(--danger)]">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <Input
              id="passwordConfirmation"
              type={showConfirmPassword ? "text" : "password"}
              {...register("passwordConfirmation")}
              className="h-[62px] w-full rounded-[12px] border-0 bg-[var(--input)] px-[22px] text-[var(--input-foreground)] focus:border-0 focus:ring-0 focus:outline-none"
              placeholder="Confirme a senha"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-1/2 right-[22px] -translate-y-1/2 text-[var(--muted-foreground)]"
            >
              {showConfirmPassword ? (
                <Eye className="h-4 w-4" />
              ) : (
                <EyeOff className="h-4 w-4" />
              )}
            </button>
          </div>
          {errors.passwordConfirmation && (
            <p className="p-1 text-sm text-[var(--danger)]">
              {errors.passwordConfirmation.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="min-h-[62px] w-full cursor-pointer rounded-[12px] bg-[var(--primary-button)] py-[22px] hover:bg-[var(--primary-button-hover)]"
        >
          Criar Conta
        </Button>
      </form>

      <div className="relative mb-[50px] w-full">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[var(--background)] px-5">ou continue com</span>
        </div>
      </div>

      <div className="flex justify-center space-x-4 pb-8">
        {/* Facebook Button */}
        <Button
          type="button"
          variant="outline"
          className="h-9 w-9 rounded-full border-0 bg-gradient-to-b from-[#18acfe] to-[#0163e0] p-0"
          asChild
        >
          <Link
            href="/auth/facebook"
            className="flex items-center justify-center"
          >
            <Image
              src="/images/facebook.svg"
              alt="Facebook"
              width={12}
              height={12}
            />
          </Link>
        </Button>

        {/* Apple Button */}
        <Button
          type="button"
          variant="outline"
          className="h-9 w-9 rounded-full border-0 bg-[#283544] p-0 hover:bg-[#283544]"
          asChild
        >
          <Link href="/auth/apple" className="flex items-center justify-center">
            <Image src="/images/apple.svg" alt="Apple" width={16} height={16} />
          </Link>
        </Button>
        {/* Google Button */}
        <Button
          type="button"
          variant="outline"
          className="rounded-full border-0 bg-[#141414] p-0 hover:bg-[#141414]"
          asChild
        >
          <Link href="/auth/google">
            <Image
              src="/images/google.svg"
              alt="Google"
              width={32}
              height={32}
            />
          </Link>
        </Button>
      </div>
    </main>
  );
}
