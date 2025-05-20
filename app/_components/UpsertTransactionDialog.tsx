import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../_lib/components/ui/dialog";
import TransactionHistory from "./TransactionHistory";
import { NumericFormat } from "react-number-format";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTransactionFormSchema } from "../_forms/schemas/transaction";
import { FloatingLabelInput } from "./FloatingLabelInput";
import { Button } from "../_lib/components/ui/button";

type CreateTransactionFormData = z.infer<typeof createTransactionFormSchema>;

export default function UpsertTransactionDialog() {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateTransactionFormData>({
    resolver: zodResolver(createTransactionFormSchema),
  });

  const onSubmit = (data: CreateTransactionFormData) => {
    console.log(data);
  };

  return (
    <DialogContent
      onInteractOutside={(event) => {
        event.preventDefault();
      }}
      className="w-[370px] rounded-2xl border-none bg-[#242424] px-6 py-8 shadow-none"
    >
      <DialogHeader>
        <DialogTitle className="text-center text-xl font-semibold text-white">
          Adicionar Transação
        </DialogTitle>
      </DialogHeader>
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FloatingLabelInput
          id="name"
          type="text"
          label="Título"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="p-1 text-sm text-[var(--danger)]">
            {errors.name.message}
          </p>
        )}

        <NumericFormat
          customInput={FloatingLabelInput}
          id="amount"
          label="Valor"
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          allowNegative={false}
          decimalScale={2}
          fixedDecimalScale
          {...register("amount", { required: true, valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="p-1 text-sm text-[var(--danger)]">
            {errors.amount.message}
          </p>
        )}

        <FloatingLabelInput
          id="date"
          type="text"
          label="Data"
          placeholder="DD/MM/AA"
          {...register("date", { required: true })}
        />
        {errors.date && (
          <p className="p-1 text-sm text-[var(--danger)]">
            {errors.date.message}
          </p>
        )}

        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <div className="mb-2 grid grid-cols-3 gap-2">
              <Button
                type="button"
                className={`rounded-lg border px-0 py-2 font-medium transition-all ${
                  field.value === "EARNING"
                    ? "border-green-500 bg-transparent text-green-400"
                    : "border-[#444] bg-[#232323] text-white"
                } `}
                onClick={() => field.onChange("EARNING")}
              >
                Ganho
              </Button>
              <Button
                type="button"
                className={`rounded-lg border px-0 py-2 font-medium transition-all ${
                  field.value === "EXPENSE"
                    ? "border-red-500 bg-transparent text-red-400"
                    : "border-[#444] bg-[#232323] text-white"
                } `}
                onClick={() => field.onChange("EXPENSE")}
              >
                Gasto
              </Button>
              <Button
                type="button"
                className={`rounded-lg border px-0 py-2 font-medium transition-all ${
                  field.value === "INVESTMENT"
                    ? "border-blue-500 bg-transparent text-blue-400"
                    : "border-[#444] bg-[#232323] text-white"
                } `}
                onClick={() => field.onChange("INVESTMENT")}
              >
                Invest.
              </Button>
            </div>
          )}
        />
        {errors.type && (
          <p className="p-1 text-sm text-[var(--danger)]">
            {errors.type.message}
          </p>
        )}

        <Button className="w-full cursor-pointer rounded-lg bg-[#444] py-3 text-base font-semibold text-white">
          Adicionar
        </Button>
      </form>

      <div className="mt-4">
        <TransactionHistory />
      </div>

      <div className="flex gap-4">
        <Button
          type="button"
          variant="outline"
          className="w-1/2 rounded-lg border border-[#444] bg-[#232323] py-3 text-base font-semibold text-white"
        >
          Cancelar
        </Button>
        <Button
          type="button"
          className="w-1/2 rounded-lg bg-[#55D462] py-3 text-base font-semibold text-white hover:bg-green-600"
        >
          Salvar
        </Button>
      </div>
    </DialogContent>
  );
}
