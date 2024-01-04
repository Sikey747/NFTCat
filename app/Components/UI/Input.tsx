import { type InputHTMLAttributes } from "react";
import Search from "@/public/assets/icon/Search.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: "Search";
    sizes?: "min" | "max";
}

const Input = ({ className, variant, sizes = "min", ...atr }: InputProps) => {
    const props = {
        className: `
        w-full black-2 text-[14px] placeholder:black-2 border-gray-1 border font-medium rounded-[10px] bg-transparent outline-none
        ${variant === "Search" ? `pl-[45px] px-[15px] py-[7px]` : ""}
        ${sizes === "max" ? "px-[29px] py-[17px]" : "px-[18px] py-[12px]"}
        ${className}
        `,
        ...atr,
    };

    if (variant === "Search") {
        return (
            <search className="relative w-full min-w-[218px]">
                <Search className=" absolute top-[7px] left-[16px] stroke-grey-2" />
                <input {...props} />
            </search>
        );
    }
    return <input {...props} />;
};

export default Input;
