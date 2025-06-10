import { TransactionType } from "../_types/transactionType";
import TransactionTypeOption from "./TransactionTypeOption";

interface TransactionTypeSelectorProps {
  value: TransactionType;
  onChange: (type: TransactionType) => void;
}

const TransactionTypeSelector = ({
  value,
  onChange,
}: TransactionTypeSelectorProps) => {
  const types = [
    TransactionType.EARNING,
    TransactionType.EXPENSE,
    TransactionType.INVESTMENT,
  ];

  return (
    <div className="flex w-full items-center justify-between gap-3">
      {types.map((type) => (
        <TransactionTypeOption
          key={type}
          type={type}
          isSelected={value === type}
          onClick={() => onChange(type)}
        />
      ))}
    </div>
  );
};

export default TransactionTypeSelector;
