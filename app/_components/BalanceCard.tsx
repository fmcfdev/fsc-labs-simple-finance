import Image from "next/image";

export default function BalanceCard() {
  return (
    <div className="relative flex w-full max-w-sm items-center justify-between overflow-hidden rounded-2xl bg-[#242424] p-6 text-white shadow-xl">
      {/* Gradiente posicionado mais à esquerda e embaixo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_110%,_rgba(200,200,200,0.3)_0%,_transparent_80%)] opacity-100"></div>

      <div className="relative z-10">
        <p className="text-sm font-medium text-[#a8a8a8]">Saldo</p>
        <p className="text-2xl font-bold">
          <span className="text-white">R$</span> *****
        </p>
      </div>

      <div className="relative z-10 rounded-full bg-[#3a3a3a] p-3">
        <Image
          src="/images/empty-wallet.svg"
          alt="Ícone de Carteira"
          width={24}
          height={24}
          className="h-6 w-6"
          style={{ filter: "grayscale(1) brightness(0.9)" }}
        />
      </div>
    </div>
  );
}
