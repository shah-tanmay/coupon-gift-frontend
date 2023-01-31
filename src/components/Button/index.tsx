import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  className?: string;
};

const Button = ({ text, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-[#00e5c9] text-white font-serif px-5 py-3 text-[20px] hover:bg-[#14a291] ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
