"use client";

import {
  TransactionType,
  TransactionTypeConfig,
} from "../_types/transactionType";

interface TransactionTypeOptionProps {
  type: TransactionType;
  isSelected: boolean;
  onClick: () => void;
}

const TransactionTypeOption = ({
  type,
  isSelected,
  onClick,
}: TransactionTypeOptionProps) => {
  const { color, label } = TransactionTypeConfig[type];
  return (
    <button
      type="button"
      className="h-11 w-full cursor-pointer truncate rounded-[10px] border-2 px-3 text-[14px] font-semibold"
      style={{
        borderColor: isSelected ? color : "var(--card-border)",
        color: isSelected ? color : "var(--label-foreground)",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TransactionTypeOption;
