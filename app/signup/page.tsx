"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../_lib/components/ui/button";
import { useAuthContext } from "../_contexts/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema } from "../_forms/schemas/user";
import { z } from "zod";
import ThemeToggleBar from "../_components/ThemeToggle";
import { FloatingLabelInput } from "../_components/FloatingLabelInput";
import { OAuthProviders } from "../_components/OAuthProviders";

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
        <div className="flex flex-col gap-1">
          <p className="text-sm font-normal">
            Se já possui uma conta, você consegue
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-normal">fazer</span>
            <Link
              href="/signin"
              className="text-sm font-semibold text-green-500 underline decoration-green-500 decoration-2 underline-offset-4 hover:text-green-400"
            >
              Login aqui!
            </Link>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        className="mb-[50px] w-full space-y-[20px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FloatingLabelInput
          id="firstName"
          type="text"
          label="Primeiro nome"
          required
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="p-1 text-sm text-[var(--danger)]">
            {errors.firstName.message}
          </p>
        )}

        <FloatingLabelInput
          id="lastName"
          type="text"
          label="Sobrenome"
          required
          {...register("lastName")}
        />
        {errors.lastName && (
          <p className="p-1 text-sm text-[var(--danger)]">
            {errors.lastName.message}
          </p>
        )}

        <FloatingLabelInput
          id="email"
          type="email"
          label="Email"
          required
          {...register("email")}
        />
        {errors.email && (
          <p className="p-1 text-sm text-[var(--danger)]">
            {errors.email.message}
          </p>
        )}

        <div className="relative">
          <FloatingLabelInput
            id="password"
            type={showPassword ? "text" : "password"}
            label="Senha"
            required
            {...register("password")}
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

        <div className="relative">
          <FloatingLabelInput
            id="passwordConfirmation"
            type={showConfirmPassword ? "text" : "password"}
            label="Confirme a senha"
            required
            {...register("passwordConfirmation")}
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

        <Button
          type="submit"
          className="min-h-[62px] w-full cursor-pointer rounded-[12px] bg-[var(--primary-button)] py-[22px] hover:bg-[var(--primary-button-hover)]"
        >
          Criar Conta
        </Button>
      </form>
      <OAuthProviders />
    </main>
  );
}
