import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { createTransactionFormSchema } from "../schemas/transaction";
import { z } from "zod";

type CreateTransactionFormData = z.infer<typeof createTransactionFormSchema>;
export const useCreateTransactionForm = () => {
  const form: UseFormReturn<CreateTransactionFormData> =
    useForm<CreateTransactionFormData>({
      resolver: zodResolver(createTransactionFormSchema),
      defaultValues: {
        name: "",
        amount: 0,
        date: new Date(),
        type: "EARNING",
      },
      shouldUnregister: true,
    });

  return { form };
};
