import { type InputHTMLAttributes } from "react";
import Search from "@/public/assets/icon/Search.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: "Search";
}

const Input = ({ className, variant, ...atr }: InputProps) => {
    const props = {
        className: `
        px-[18px] py-[12px] w-full text-white text-[14px] placeholder:text-white font-medium rounded-[10px] bg-black-2 
        ${className}
        ${variant === "Search" ? `pl-[45px] px-[15px] py-[7px]` : ""}
        `,
        ...atr,
    };

    if (variant === "Search") {
        return (
            <search className="relative">
                <Search className="search absolute top-[7px] left-[16px]" />
                <input {...props} />
            </search>
        );
    }
    return <input {...props} />;
};

export default Input;
