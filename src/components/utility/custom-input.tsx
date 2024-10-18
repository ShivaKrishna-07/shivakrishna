import { InputHTMLAttributes, forwardRef } from "react";

import { classNames } from "@/utility/classNames";

// Directly use InputHTMLAttributes instead of a custom interface
const CustomInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={classNames(
          "w-full rounded-lg border-none bg-background font-semibold text-accent placeholder:font-normal placeholder:text-zinc-400 focus-within:border-2 focus-within:border-accent focus-within:ring-accent",
          className,
        )}
      />
    );
  },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
