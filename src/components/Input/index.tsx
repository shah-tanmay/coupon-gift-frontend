import { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`outline-none border-t-0 border-r-0 border-l-0 border-b-2 border-black w-full text-[15px] font-serif ${className}`}
    />
  );
};

export default Input;
