import { useForm } from "react-hook-form";
import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../_lib/components/ui/dialog";
import { FloatingLabelInput } from "./FloatingLabelInput";
import { transactionFormSchema } from "../_forms/schemas/transaction";
import { z } from "zod";
import { Button } from "../_lib/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import TransactionTypeSelector from "./TransactionTypeSelector";
import { useState } from "react";
import { TransactionType } from "../_types/transactionType";
import { TransactionItemType } from "./TransactionItem";
import TransactionItemsCard from "./TransactionItemsCard";
import { XIcon } from "lucide-react";

type TransactionFormData = z.infer<typeof transactionFormSchema>;

interface UpsertTransactionDialogProps {
  onClose: () => void;
}

export default function UpsertTransactionDialog({
  onClose,
}: UpsertTransactionDialogProps) {
  const [selectedType, setSelectedType] = useState<TransactionType>(
    TransactionType.EARNING,
  );
  const [transactions, setTransaction] = useState<TransactionItemType[]>([]);
  const {
    register,
    trigger,
    getValues,
    reset,
    formState: { errors },
  } = useForm<TransactionFormData>({
    resolver: zodResolver(transactionFormSchema),
    mode: "onChange",
  });

  const validateFormFields = async () => {
    return await trigger();
  };

  const handleAddTransactionToList = async () => {
    const isNotValid = !(await validateFormFields());
    if (isNotValid) return;
    const values = getValues();
    const transactionItem: TransactionItemType = {
      transactionType: selectedType,
      transactionName: values.title,
      transactionValue: values.amount,
      transactionDate: values.date,
    };
    setTransaction([transactionItem, ...transactions]);
    reset();
    setSelectedType(TransactionType.EARNING);
  };

  const saveTransactions = (): boolean => {
    if (transactions.length === 0) {
      alert("Nenhuma transação para ser salva.");
      return false;
    }
    // TODO - Criar lógica para salvar as transações
    alert("Transações salvas!");
    return true;
  };

  const handleSaveTransactions = () => {
    if (saveTransactions()) {
      handleEndTransaction();
    }
  };

  const handleEndTransaction = () => {
    setTransaction([]);
    onClose();
  };

  return (
    <DialogContent
      onInteractOutside={(event) => {
        event.preventDefault();
      }}
      className="h-full w-full !max-w-[430px] border-0 bg-transparent py-10 [&>button.absolute]:hidden"
      aria-describedby={undefined}
    >
      <div
        className="realtive flex h-full flex-col justify-evenly space-y-2 overflow-auto rounded-md border-1 border-[var(--foreground)]/20 bg-[var(--background)]/50 p-4 shadow-none"
        style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
      >
        <div className="m-0 flex w-full items-center justify-end">
          <DialogClose asChild>
            <XIcon className="h-5 w-5 hover:text-stone-300" />
          </DialogClose>
        </div>
        <DialogHeader>
          <DialogTitle className="pb-4 text-center">
            Adicionar Transação
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-3">
            <div>
              <FloatingLabelInput
                id="title"
                type="text"
                label="Título"
                placeholder="Informe o título"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="pt-1 pl-1 text-[12px] text-[var(--danger)]">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div>
              <FloatingLabelInput
                id="amount"
                type="text"
                label="Valor"
                placeholder="Informe o valor"
                isCurrency={true}
                {...register("amount", { required: true })}
              />
              {errors.amount && (
                <p className="pt-1 pl-1 text-[12px] text-[var(--danger)]">
                  {errors.amount.message}
                </p>
              )}
            </div>
            <div>
              <FloatingLabelInput
                id="date"
                type="text"
                label="Data"
                placeholder="Informa a data"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <p className="pt-1 pl-1 text-[12px] text-[var(--danger)]">
                  {errors.date.message}
                </p>
              )}
            </div>
            <div>
              <TransactionTypeSelector
                value={selectedType}
                onChange={setSelectedType}
              />
            </div>
            <Button
              type="button"
              className="h-11 w-full cursor-pointer bg-neutral-700 text-white transition-all duration-200 hover:bg-neutral-600"
              onClick={handleAddTransactionToList}
            >
              Adicionar
            </Button>
            <div>
              <TransactionItemsCard transactions={transactions} />
            </div>
            <div className="box-border flex w-full gap-3">
              <Button
                type="button"
                className="h-11 w-full flex-1 cursor-pointer bg-neutral-700 text-white transition-all duration-200 hover:bg-neutral-600"
                onClick={() => handleEndTransaction()}
              >
                Cancelar
              </Button>
              <Button
                type="button"
                className="h-11 w-full flex-1 cursor-pointer transition-all duration-200"
                onClick={() => handleSaveTransactions()}
              >
                Salvar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </DialogContent>
  );
}
