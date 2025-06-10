import { SquarePenIcon } from "lucide-react";
import { TransactionType } from "../_types/transactionType";
import TransactionBadge from "./TransactionBadge";
import { stringCurrencyPtBRToNumber } from "../_services/CurrencyUtils";

interface TransactionItemProps {
  transactionItem: TransactionItemType;
}

export type TransactionItemType = {
  transactionType: TransactionType;
  transactionName: string;
  transactionValue: string;
  transactionDate: string;
};

const TransactionItem = ({ transactionItem }: TransactionItemProps) => {
  const {
    transactionType,
    transactionName,
    transactionValue,
    transactionDate,
  } = transactionItem;

  return (
    <div className="flex w-full justify-between gap-4">
      <div className="flex items-center gap-3">
        <TransactionBadge transactionType={transactionType} />
        <div className="text-sm text-[var(--card-foreground)]">
          {transactionName}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end">
          <div className="text-sm font-bold text-[var(--card-foreground)]">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(stringCurrencyPtBRToNumber(transactionValue))}
          </div>
          <div className="text-xs text-[var(--card-foreground)]">
            {transactionDate}
          </div>
        </div>
        <SquarePenIcon className="h-5 w-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default TransactionItem;
