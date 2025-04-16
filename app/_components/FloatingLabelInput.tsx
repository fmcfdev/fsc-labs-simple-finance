import { FC } from "react";

interface FloatingLabelProps {
  id: string;
  type: string;
  label: string;
  required?: boolean;
}

export const FloatingLabel: FC<FloatingLabelProps> = ({
  id,
  type,
  label,
  required,
}) => {
  return (
    <div className="relative mb-6">
      <input
        id={id}
        type={type}
        required={required}
        className="peer h-[62px] w-full rounded-lg border-0 bg-white px-4 pt-2 text-black placeholder-transparent transition-all duration-200 focus:border-2 focus:border-[#55D462] focus:ring-0 focus:outline-none"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute top-2 left-4 text-xs font-normal text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#55D462] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-[#55D462]"
      >
        {label}
      </label>
    </div>
  );
};
