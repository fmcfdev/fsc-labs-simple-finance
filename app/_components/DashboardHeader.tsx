import { AlignJustify } from "lucide-react";
import Logo from "./Logo";

const DashboardHeader = () => {
  return (
    <div className="fixed top-0 z-50 flex h-[100px] w-[440px] items-center justify-between bg-black p-7.5">
      <div className="">
        <Logo isDark={true} />
      </div>
      <div>
        <AlignJustify size={28} className="text-[var(--primary)]" />
      </div>
    </div>
  );
};

export default DashboardHeader;
