import TransactionItem, { TransactionItemType } from "./TransactionItem";

interface TransactionItemsCardProps {
  transactions: TransactionItemType[];
}

const TransactionItemsCard = ({ transactions }: TransactionItemsCardProps) => {
  return (
    <div className="relative">
      <div
        className="relative flex h-[300px] w-full flex-col items-center justify-start gap-1.5 overflow-y-auto rounded-[12px] bg-[var(--card)] px-4 py-7"
        style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
      >
        {transactions.length > 0 ? (
          <>
            {transactions.map((transaction, index) => (
              <div key={index} className="w-full">
                <TransactionItem transactionItem={transaction} />
                {index < transactions.length - 1 && (
                  <hr className="my-1.5 border-[var(--hr-border-color)]" />
                )}
              </div>
            ))}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-[var(--text-secondary)]">
            Nenhuma transação adicionada
          </div>
        )}
      </div>
      <div
        className="absolute top-0 left-0 h-10 w-full rounded-t-[12px]"
        style={{
          background:
            "linear-gradient(to bottom, var(--card) 0%, var(--card) 10%, var(--card) 15%, transparent 100%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 h-10 w-full rounded-b-[12px]"
        style={{
          background:
            "linear-gradient(to top, var(--card) 0%, var(--card) 10%, var(--card) 15%, transparent 100%)",
        }}
      ></div>
    </div>
  );
};

export default TransactionItemsCard;
