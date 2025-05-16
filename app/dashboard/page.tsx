"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "../_contexts/auth";
import { useRouter } from "next/navigation";
import DashboardHeader from "../_components/DashboardHeader";
import DateRangePicker from "../_components/DateRangePicker";
import BalanceCard from "../_components/BalanceCard";
import TransactionActions from "../_components/TransactionActions";
import LoadingSpinner from "../_components/LoadingSpinner";
import TransactionBreakdown from "../_components/TransactionBreakdown";
import TransactionCard from "../_components/TransactionCard";
import { TransactionPieChartProps } from "../_components/TransactionPieChart";
import { TransactionType } from "../_types/transactionType";
import { TransactionPercentProps } from "../_components/TransactionPercent";
export default function Dashboard() {
  const [isShowAmount, setShowAmount] = useState(false);
  const { user, isInitializing } = useAuthContext();
  const router = useRouter();

  const transactionPieChart: TransactionPieChartProps = {
    data: [
      {
        transactionType: TransactionType.EARNING,
        amount: 5000,
      },
      {
        transactionType: TransactionType.EXPENSE,
        amount: 2000,
      },
      {
        transactionType: TransactionType.INVESTMENT,
        amount: 3000,
      },
    ],
    showAmount: isShowAmount,
  };

  const transactionPercents: TransactionPercentProps[] = [
    {
      transactionType: TransactionType.EARNING,
      percentNumber: 50,
      showAmount: isShowAmount,
    },
    {
      transactionType: TransactionType.EXPENSE,
      percentNumber: 20,
      showAmount: isShowAmount,
    },
    {
      transactionType: TransactionType.INVESTMENT,
      percentNumber: 30,
      showAmount: isShowAmount,
    },
  ];

  const handleShowAmount = (showAmount: boolean) => {
    setShowAmount(showAmount);
  };

  useEffect(() => {
    if (!isInitializing && !user) {
      router.push("/signin");
    }
  }, [isInitializing, user, router]);

  if (isInitializing || !user) {
    return <LoadingSpinner text="Carregando" />;
  }

  return (
    <div className="dash-container w-full">
      <DashboardHeader
        handleShowAmountAction={handleShowAmount}
        isShowAmmount={isShowAmount}
      />
      <div className="mt-[68px] flex w-full flex-col items-center">
        <div className="flex w-full items-center justify-between py-8">
          <div className="text-[var(--card-foreground)]">
            Olá <span className="font-semibold">{user?.firstName}</span>!
          </div>
          <DateRangePicker handleOnClick={() => {}} />
        </div>
        <div className="flex w-full flex-col gap-4">
          <BalanceCard
            label="Saldo"
            amount={12500.5}
            image="/images/empty-wallet.svg"
            showValue={isShowAmount}
          />
          <BalanceCard
            label="Ganhos"
            amount={330.5}
            image="/images/empty-earnings.svg"
            showValue={isShowAmount}
          />
          <BalanceCard
            label="Gastos"
            amount={1500.75}
            image="/images/empty-expenses.svg"
            showValue={isShowAmount}
          />

          <BalanceCard
            label="Investimentos"
            amount={5000.0}
            image="/images/empty-investment.svg"
            showValue={isShowAmount}
          />
        </div>

        <div className="my-[30px] w-full">
          <TransactionActions />
        </div>

        <TransactionCard>
          <TransactionBreakdown
            transactionPieChart={transactionPieChart}
            transactionPercents={transactionPercents}
          />
        </TransactionCard>
      </div>
    </div>
  );
}
