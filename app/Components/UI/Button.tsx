import React, { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variants?: "primary" | "secondary";
    children: React.ReactNode;
}

const Button = ({ variants = "primary", children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={`
        px-[30px]
        py-[9px]
        rounded-[10px]
        transition-all
        text-[14px] 
        font-semibold 
        active:translate-y-1
        hover:opacity-80
        ${variants === "primary" ? "bg-grad text-white" : ""}
        ${variants === "secondary" ? "text-red-violet gradient-border" : ""}
        ${className ?? ""}
      `}
            {...props}>
            {children}
        </button>
    );
};

export default Button;
