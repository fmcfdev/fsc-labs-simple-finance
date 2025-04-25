"use client";
import BalanceCard from "../_components/BalanceCard";

export default function FinancialDashboard() {
  return (
    <div className="mx-auto max-w-md space-y-4 p-4">
      <BalanceCard
        label="Saldo"
        amount={12500.5}
        image="/images/empty-wallet.svg"
      />

      <BalanceCard
        label="Ganhos"
        amount={330.5}
        image="/images/empty-earnings.svg"
      />

      <BalanceCard
        label="Gastos"
        amount={1500.75}
        image="/images/empty-expenses.svg"
      />

      <BalanceCard
        label="Investimentos"
        amount={5000.0}
        image="/images/empty-investment.svg"
      ></BalanceCard>
    </div>
  );
}
