import React, { forwardRef, InputHTMLAttributes } from "react";
import { formatToCurrencyPtBR } from "../_services/CurrencyUtils";

interface FloatingLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  isCurrency?: boolean;
}

export const FloatingLabelInput = forwardRef<
  HTMLInputElement,
  FloatingLabelProps
>(
  (
    { id, type, label, required, isCurrency = false, onChange, ...otherProps },
    ref,
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (isCurrency) {
        event.target.value = formatToCurrencyPtBR(value);
      }
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div className="relative">
        <input
          id={id}
          type={type}
          required={required}
          placeholder={label}
          className="peer stransition-all h-14 w-full rounded-[12px] border-0 bg-white px-4 pt-3 text-black placeholder-transparent duration-200 focus:border-0 focus:border-[#55D462] focus:placeholder-gray-300 focus:ring-0 focus:outline-none"
          ref={ref}
          onChange={handleChange}
          {...otherProps}
        />

        <label
          htmlFor={id}
          className="absolute top-3 left-4 text-[0.625rem] font-normal text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-[0.625rem] peer-focus:font-semibold peer-focus:text-[#55D462] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-[#55D462]"
        >
          {label}
        </label>
      </div>
    );
  },
);

FloatingLabelInput.displayName = "FloatingLabelInput";
