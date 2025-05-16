import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  TransactionType,
  TransactionTypeConfig,
} from "../_types/transactionType";

export interface TransactionPieChartProps {
  data: { transactionType: TransactionType; amount: number }[];
  showAmount: boolean;
}

export default function TransactionPieChart({
  data,
  showAmount,
}: TransactionPieChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(() => {
    const idx = data.findIndex((item) => item.amount > 0);
    return idx === -1 ? null : idx;
  });

  const activeData =
    activeIndex !== null && data[activeIndex].amount > 0
      ? data[activeIndex]
      : null;

  return (
    <div className="relative mb-5 h-[280px] w-full">
      {data.filter((item) => item.amount > 0).length === 0 ? (
        <div className="flex h-full w-full items-center justify-center text-center">
          Não existem transações cadastradas para o período selecionado!
        </div>
      ) : (
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              dataKey="amount"
              stroke="none"
              onClick={(_, index) => setActiveIndex(index)}
              className="cursor-pointer border-0 outline-none"
            >
              {data.map((item, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={TransactionTypeConfig[item.transactionType].color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}

      {activeData && (
        <div className="pointer-events-none absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center text-center text-[14px]">
          <div className="text-[14px] font-normal">
            {TransactionTypeConfig[activeData.transactionType].label}
          </div>
          <div className="text-[16px] font-bold">
            {showAmount
              ? new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(activeData.amount))
              : "R$ ******"}
          </div>
        </div>
      )}
    </div>
  );
}
