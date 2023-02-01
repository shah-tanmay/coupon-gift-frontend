import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  className?: string;
};

const Button = ({ text, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} text-white font-serif px-5 py-3 text-[20px] ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
