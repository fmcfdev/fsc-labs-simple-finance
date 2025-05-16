"use client";

import { useState } from "react";
import BalanceCard from "../_components/BalanceCard";
import IPeriod from "../_interfaces/IPeriod";
import TransactionActions from "../_components/TransactionActions";
import DateRangePicker from "../_components/DateRangePicker";
import { TransactionType } from "../_types/transactionType";
import TransactionTypeSelector from "../_components/TransactionTypeSelector";
import TransactionItemsCard from "../_components/TransactionItemsCard";
import TransactionPercent from "../_components/TransactionPercent";
import TransactionPieChart, {
  TransactionPieChartProps,
} from "../_components/TransactionPieChart";

export default function ComponentTest() {
  const [period, setPeriod] = useState<IPeriod>({
    startDate: new Date(),
    endDate: new Date(),
  });
  const handleSelectedMonth = (period: IPeriod) => {
    setPeriod(period);
  };

  const transactionPieChart: TransactionPieChartProps = {
    data: [
      {
        transactionType: TransactionType.EARNING,
        amount: 0,
      },
      {
        transactionType: TransactionType.EXPENSE,
        amount: 0,
      },
      {
        transactionType: TransactionType.INVESTMENT,
        amount: 0,
      },
    ],
    showAmount: true,
  };

  return (
    <div className="space-y-4">
      {/* Transaction Type Selector */}
      <div>
        <div className="text-sm">TransactionType Selector</div>
        <div className="flex w-full flex-col items-center justify-center border-2 p-5">
          <TransactionTypeSelector />
        </div>
      </div>

      {/* Date Range Picker */}
      <div>
        <div className="text-sm">Date Range Picker</div>
        <div className="flex w-full flex-col items-center justify-center border-2 p-5">
          <DateRangePicker handleOnClick={handleSelectedMonth} />
          {period && (
            <span className="text-xs">
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date(period.startDate),
              )}{" "}
              -{" "}
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date(period.endDate),
              )}
            </span>
          )}
        </div>
      </div>

      {/* Transaction Actions */}
      <div>
        <div className="text-sm">Transaction Actions</div>
        <div className="flex w-full flex-col items-center justify-center border-2 p-5">
          <TransactionActions />
        </div>
      </div>

      {/* Transaction Items */}
      <div>
        <div className="text-sm">Transaction Items</div>
        <div className="flex w-full flex-col items-center justify-center border-2 p-5">
          <TransactionItemsCard
            transactions={[
              {
                transactionType: TransactionType.EARNING,
                transactionName: "Salário",
                transactionValue: "5000",
                transactionDate: "01/01/2023",
              },
              {
                transactionType: TransactionType.EXPENSE,
                transactionName: "Faculadade de medicina",
                transactionValue: "2000",
                transactionDate: "01/01/2023",
              },
              {
                transactionType: TransactionType.INVESTMENT,
                transactionName: "Renda fixa",
                transactionValue: "2000",
                transactionDate: "01/01/2023",
              },
              {
                transactionType: TransactionType.EXPENSE,
                transactionName: "Faculadade de medicina",
                transactionValue: "2000",
                transactionDate: "01/01/2023",
              },
              {
                transactionType: TransactionType.INVESTMENT,
                transactionName: "Renda fixa",
                transactionValue: "2000",
                transactionDate: "01/01/2023",
              },
              {
                transactionType: TransactionType.EXPENSE,
                transactionName: "Faculadade de medicina",
                transactionValue: "2000",
                transactionDate: "01/01/2023",
              },
              {
                transactionType: TransactionType.INVESTMENT,
                transactionName: "Renda fixa",
                transactionValue: "2000",
                transactionDate: "01/01/2023",
              },
            ]}
          />
        </div>
      </div>

      {/* Percent Transaction */}
      <div>
        <div className="text-sm">Percent Transaction</div>
        <div className="flex w-full flex-col items-center justify-center gap-2 border-2 p-5">
          <TransactionPieChart
            data={transactionPieChart.data}
            showAmount={transactionPieChart.showAmount}
          />
          <TransactionPercent
            transactionType={TransactionType.EARNING}
            percentNumber={50}
          />
          <TransactionPercent
            transactionType={TransactionType.EXPENSE}
            percentNumber={20}
          />
          <TransactionPercent
            transactionType={TransactionType.INVESTMENT}
            percentNumber={30}
          />
        </div>
      </div>

      {/* Balance Cards */}
      <div>
        <div className="text-sm">BalanceCard</div>
        <div className="flex w-full flex-col items-center justify-center border-2 p-5">
          <div className="mx-auto w-full space-y-4">
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
        </div>
      </div>
    </div>
  );
}
