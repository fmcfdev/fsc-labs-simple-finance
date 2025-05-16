import {
  TransactionTypeConfig,
  TransactionType,
} from "../_types/transactionType";
import TransactionBadge from "./TransactionBadge";

export interface TransactionPercentProps {
  transactionType: TransactionType;
  percentNumber: number;
  showAmount?: boolean;
}

const TransactionPercent = ({
  transactionType,
  percentNumber,
  showAmount = false,
}: TransactionPercentProps) => {
  const { label } = TransactionTypeConfig[transactionType];
  return (
    <div className="flex w-10/16 items-center justify-between">
      <div className="flex items-center gap-2">
        <TransactionBadge transactionType={transactionType} />
        <p className="text-sm font-normal text-[var(--label-foreground)]">
          {label}
        </p>
      </div>
      <p className="text-sm text-[var(--card-foreground)]">
        {showAmount ? percentNumber : "***"}%
      </p>
    </div>
  );
};

export default TransactionPercent;
