import z from "zod";
import { parse } from "date-fns";

export const transactionFormSchema = z.object({
  title: z
    .string()
    .trim()
    .nonempty({ message: "O título é de preenchimento obrigatório" })
    .min(3, {
      message: "O título deve ter no mínimo 3 caracteres",
    }),
  amount: z
    .string()
    .trim()
    .nonempty({ message: "O valor é de preenchimento obrigatório" })
    .refine(
      (val) => {
        const numeric = parseFloat(val.replace(/\./g, "").replace(",", "."));
        return !isNaN(numeric) && numeric > 0;
      },
      {
        message: "O valor deve ser maior que zero",
      },
    ),
  date: z
    .string()
    .trim()
    .nonempty({ message: "A data é de preenchimento obrigatório" })
    .refine(
      (val) => {
        const date = parse(val, "dd/MM/yyyy", new Date());
        return !isNaN(date.getTime());
      },
      {
        message: "A data deve ser uma data válida",
      },
    ),
});
