"use client";

import React from "react";
import { Select as SelectUI, SelectItem } from "@nextui-org/react";
import ArrowDown from "@/public/assets/icon/ArrowDown.svg";

interface SelectOwnProps {
    data: string[];
    defaultValue: string;
    className?: string;
    variant?: "price" | "select";
}

const Select = ({ data, defaultValue, className, variant = "select" }: SelectOwnProps) => {
    return (
        <SelectUI
            aria-label="select"
            selectionMode="single"
            selectorIcon={<ArrowDown />}
            className={`${className}`}
            classNames={
                variant === "price"
                    ? {
                          base: "w-auto",
                          mainWrapper: "w-fit",
                          trigger:
                              "shadow-none data-[hover=true]:bg-transparent dark:bg-black-5 bg-transparent data-[hover=true]:transparent rounded-[10px] py-[8px] h-10 min-h-unit-10 pl-[20px] pr-[45px] ",
                          value: "group-data-[has-value=true]:text-gray-2 dark:group-data-[has-value=true]:text-static-white text-[14px] w-fit font-semibold",
                          selectorIcon: "right-4 stroke-grey-2 dark:stroke-static-white",
                          popoverContent: "bg-white text-black-2 dark:text-static-white",
                          innerWrapper: "w-auto",
                      }
                    : {
                          base: "w-full ",
                          mainWrapper: "w-full ",
                          trigger:
                              "dark:data-[hover=true]:bg-black-2 border border-gray-1 dark:border-transparent dark:bg-black-2 shadow-none data-[hover=true]:bg-transparent bg-transparent data-[hover=true]:transparent rounded-[10px] py-[8px] h-10 min-h-unit-10 px-[15px]",
                          value: "group-data-[has-value=true]:text-gray-2 text-[12px]",
                          selectorIcon: "right-4 stroke-grey-2 dark:stroke-static-white",
                          popoverContent: "bg-white text-black-2  dark:text-static-white",
                          innerWrapper: "w-full ",
                      }
            }
            defaultSelectedKeys={[defaultValue]}>
            {data.map((el) => (
                <SelectItem key={el} value={el}>
                    {el}
                </SelectItem>
            ))}
        </SelectUI>
    );
};

export default Select;

//   classNames={{
//             base: "w-auto",
//             mainWrapper: "w-fit",
//             trigger:
//                 "bg-black-2 data-[hover=true]:bg-black-1 rounded-[10px] py-[8px] h-10 min-h-unit-10 pl-[20px] pr-[45px]",
//             value: "group-data-[has-value=true]:text-white text-[12px] w-fit",
//             selectorIcon: "right-4",
//             popoverContent: "bg-black-2 text-white",
//             innerWrapper: "w-auto",
//         }}
