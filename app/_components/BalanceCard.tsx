import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface BalanceCardProps {
  label: "Saldo" | "Ganhos" | "Gastos" | "Investimentos";
  amount?: number;
  image: string | StaticImageData;
  showValue?: boolean;
  children?: ReactNode;
  compact?: boolean;
}

const cardThemes = {
  Saldo: {
    gradient:
      "radial-gradient(ellipse at 75% 100%, rgba(150,150,150,0.25) 0%, transparent 70%)",
    iconBg: "#4b5563",
    textColor: "text-gray-300",
  },
  Ganhos: {
    gradient:
      "radial-gradient(ellipse at 75% 100%, rgba(74,222,128,0.25) 0%, transparent 70%)",
    iconBg: "#16a34a",
    textColor: "text-green-400",
  },
  Gastos: {
    gradient:
      "radial-gradient(ellipse at 75% 100%, rgba(115, 43, 43, 1.0) 0%, transparent 70%)",
    iconBg: "#dc2626",
    textColor: "text-red-400",
  },
  Investimentos: {
    gradient:
      "radial-gradient(ellipse at 75% 100%, rgba(96,165,250,0.25) 0%, transparent 70%)",
    iconBg: "#2563eb",
    textColor: "text-blue-400",
  },
};

export default function BalanceCard({
  label = "Saldo",
  amount,
  image,
  showValue = false,
  children,
  compact = false,
}: BalanceCardProps) {
  const theme = cardThemes[label];

  return (
    <div
      className={`relative flex items-center justify-between overflow-hidden rounded-2xl bg-[#1e1e1e] text-white shadow-lg ${compact ? "p-4" : "p-5"} border border-[#2e2e2e]`}
    >
      {/* Gradiente em arco */}
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{ background: theme.gradient }}
      />

      {/* Fundo base escuro */}
      <div className="absolute inset-0 z-0 bg-[#1e1e1e]" />

      <div className="relative z-10">
        <p className={`text-sm font-medium ${theme.textColor}`}>{label}</p>
        <p className={`font-bold ${compact ? "text-xl" : "text-2xl"} mt-1`}>
          R${" "}
          {showValue && amount !== undefined
            ? amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
            : "******"}
        </p>
        {children && (
          <div className={`mt-1 text-xs ${theme.textColor}`}>{children}</div>
        )}
      </div>

      <div
        className={`relative z-10 rounded-full ${compact ? "p-2" : "p-3"} ${theme.textColor} bg-opacity-20`}
        style={{ backgroundColor: theme.iconBg }}
      >
        <Image
          src={image}
          alt={`Ícone de ${label}`}
          width={compact ? 20 : 24}
          height={compact ? 20 : 24}
          className={compact ? "h-5 w-5" : "h-6 w-6"}
        />
      </div>
    </div>
  );
}
