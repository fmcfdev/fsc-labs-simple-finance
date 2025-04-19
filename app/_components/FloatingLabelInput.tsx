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
        className="peer h-[62px] w-full rounded-lg border border-gray-300 bg-white px-4 pt-2 text-black placeholder-transparent transition-all duration-200 hover:border-gray-400 focus:border-2 focus:border-green-500 focus:ring-0 focus:outline-none [:not(:placeholder-shown)]:border-2 [:not(:placeholder-shown)]:border-green-500"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute top-2 left-4 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-500 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-green-500"
      >
        {label}
      </label>
    </div>
  );
};
