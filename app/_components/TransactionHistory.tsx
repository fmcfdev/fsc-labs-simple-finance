import { SquarePen } from "lucide-react";
import {
  TransactionType,
  TransactionTypeConfig,
} from "../_types/transactionType";
import { Card, CardContent } from "../_lib/components/ui/card";
import { Button } from "../_lib/components/ui/button";

type Transaction = {
  id: string;
  name: string;
  amount: string;
  date: string;
  type: TransactionType;
};

const transactions: Transaction[] = [
  {
    id: "1",
    name: "Trabalho",
    amount: "R$ 5.200,00",
    date: "05/01/23",
    type: TransactionType.EARNING,
  },
  {
    id: "2",
    name: "Freelancing",
    amount: "R$ 2.500,00",
    date: "05/01/23",
    type: TransactionType.EARNING,
  },
  {
    id: "3",
    name: "Pizza",
    amount: "R$ 139,90",
    date: "05/01/23",
    type: TransactionType.EXPENSE,
  },
  {
    id: "4",
    name: "Aluguel",
    amount: "R$ 2.190,00",
    date: "05/01/23",
    type: TransactionType.EXPENSE,
  },
  {
    id: "5",
    name: "Tesouro Direto",
    amount: "R$ 1.000,00",
    date: "05/01/23",
    type: TransactionType.INVESTMENT,
  },
];

const TransactionHistory = () => {
  return (
    <Card className="w-full max-w-sm rounded-xl border-none bg-transparent shadow-none">
      <CardContent className="space-y-4 p-4">
        {transactions.map((tx) => {
          const { color, label } = TransactionTypeConfig[tx.type];

          return (
            <div key={tx.id} className="flex items-center justify-between pb-3">
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                  title={label}
                />
                <span className="truncate text-sm text-white">{tx.name}</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end text-right leading-none">
                  <span className="text-sm font-bold text-white">
                    {tx.amount}
                  </span>
                  <span className="text-xs text-neutral-400">{tx.date}</span>
                </div>

                <Button variant="ghost" size="icon" className="ml-2 h-6 w-6">
                  <SquarePen className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
