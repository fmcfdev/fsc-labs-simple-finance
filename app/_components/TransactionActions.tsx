"use client";

import { ExternalLinkIcon, Plus } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogTrigger } from "../_lib/components/ui/dialog";
import { Button } from "../_lib/components/ui/button";
import UpsertTransactionDialog from "./UpsertTransactionDialog";
import { DialogOverlay } from "@radix-ui/react-dialog";

export default function TransactionActions() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full rounded-[12px] bg-[#242424] px-[30px] py-[35px]">
      <div className="flex items-center justify-between gap-[15px]">
        <h2 className="text-base font-semibold text-white">Transações</h2>
        <div className="flex gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <Button asChild>
                <span className="flex h-[30.29px] transform items-center gap-[3.74px] rounded-[5px] bg-neutral-700 px-[10px] text-xs text-white transition-transform hover:scale-105 hover:bg-neutral-600">
                  <Plus size={14} />
                  Adicionar
                </span>
              </Button>
            </DialogTrigger>
            <DialogOverlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
            <UpsertTransactionDialog onClose={() => setOpen(false)} />
          </Dialog>
          <Button className="flex h-[30.29px] w-[30.29px] transform items-center gap-[3.74px] rounded-[5px] bg-neutral-700 px-[10px] text-xs text-white transition-transform hover:scale-105 hover:bg-neutral-600">
            <ExternalLinkIcon size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
}
