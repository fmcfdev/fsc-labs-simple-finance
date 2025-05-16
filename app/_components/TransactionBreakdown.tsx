import TransactionPercent, {
  TransactionPercentProps,
} from "./TransactionPercent";
import TransactionPieChart, {
  TransactionPieChartProps,
} from "./TransactionPieChart";

interface TransactionBreakdownProps {
  transactionPieChart: TransactionPieChartProps;
  transactionPercents: TransactionPercentProps[];
}

const TransactionBreakdown = ({
  transactionPieChart,
  transactionPercents,
}: TransactionBreakdownProps) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <TransactionPieChart
          data={transactionPieChart.data}
          showAmount={transactionPieChart.showAmount}
        />
        {transactionPercents.map((transactionPercent) => (
          <TransactionPercent
            key={transactionPercent.transactionType}
            transactionType={transactionPercent.transactionType}
            percentNumber={transactionPercent.percentNumber}
            showAmount={transactionPercent.showAmount}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionBreakdown;
