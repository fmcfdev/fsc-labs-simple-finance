"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../_lib/components/ui/input";
import { Label } from "../_lib/components/ui/label";
import { Button } from "../_lib/components/ui/button";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header com Logo */}
      <div className="relative mb-[50px]">
        <h1 className="mb-[30px] h-[26px] text-[24px] font-semibold">
          Criar sua conta
        </h1>
        <p className="text-sm font-normal">
          Se já possui uma conta, você consegue fazer{" "}
          <Link
            href="/login"
            className="font-semibold text-green-500 underline decoration-green-500 underline-offset-4 hover:text-green-400"
          >
            Login aqui!
          </Link>
        </p>
      </div>

      {/* Form */}
      <form className="mb-[50px] w-full space-y-[20px]">
        <div className="relative">
          <Input
            id="name"
            type="text"
            required
            className="h-[62px] w-full rounded-[12px] border-0 px-[22px] placeholder:text-transparent focus:border-0 focus:ring-0 focus:outline-none"
            placeholder="Nome"
          />
          <Label
            htmlFor="name"
            className="absolute top-1/2 left-[22px] -translate-y-1/2 text-gray-500 transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-black"
          >
            Nome
          </Label>
        </div>

        <div className="relative">
          <Input
            id="email"
            type="email"
            required
            className="h-[62px] w-full rounded-[12px] border-0 px-[22px] placeholder:text-transparent focus:border-0 focus:ring-0 focus:outline-none"
            placeholder="Email"
          />
          <Label
            htmlFor="email"
            className="absolute top-1/2 left-[22px] -translate-y-1/2 text-[#7A7A7A] transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-black"
          >
            Email
          </Label>
        </div>

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            className="h-[62px] w-full rounded-[12px] border-0 px-[22px] pr-12 placeholder:text-transparent focus:border-0 focus:ring-0 focus:outline-none"
            placeholder="Senha"
          />
          <Label
            htmlFor="password"
            className="absolute top-1/2 left-[22px] -translate-y-1/2 text-gray-500 transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-black"
          >
            Senha
          </Label>
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

        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            required
            className="h-[62px] w-full rounded-[12px] border-0 px-[22px] pr-12 placeholder:text-transparent focus:border-0 focus:ring-0 focus:outline-none"
            placeholder="Confirme a senha"
          />
          <Label
            htmlFor="confirmPassword"
            className="absolute top-1/2 left-[22px] -translate-y-1/2 text-gray-500 transition-all peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-black"
          >
            Confirme a senha
          </Label>
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-1/2 right-[22px] -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </button>
        </div>

        <Button
          type="submit"
          className="h-[62px] w-full cursor-pointer rounded-[12px] bg-[#55D462] text-white transition-colors duration-200 hover:bg-green-700"
        >
          Criar Conta
        </Button>
      </form>

      <div className="relative mb-[50px] w-full">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-500" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-5 font-medium dark:text-gray-400">
            ou continue com
          </span>
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
