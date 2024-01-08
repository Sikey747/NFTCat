import { type InputHTMLAttributes } from "react";
import Search from "@/public/assets/icon/Search.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: "Search";
    sizes?: "min" | "max";
}

const Input = ({ className, variant, sizes = "min", ...atr }: InputProps) => {
    const props = {
        className: `
        w-full dark:bg-black-5 text-[14px] placeholder:black-2 dark:placeholder:text-static-white border-gray-1 dark:border-black-5 border font-medium rounded-[10px] bg-transparent outline-none
        ${
            variant === "Search"
                ? `pl-[45px] px-[15px] py-[7px] dark:bg-black-2 dark:border-black-2`
                : ""
        }
        ${sizes === "max" ? "px-[29px] py-[17px]" : "px-[18px] py-[12px]"}
        ${className}
        `,
        ...atr,
    };

    if (variant === "Search") {
        return (
            <search className="relative w-full min-w-[218px]">
                <Search className=" absolute top-[7px] left-[16px] fill-transparent stroke-grey-2 dark:stroke-static-white " />
                <input {...props} />
            </search>
        );
    }
    return <input {...props} />;
};

export default Input;
