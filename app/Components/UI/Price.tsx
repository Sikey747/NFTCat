import React from "react";
import { Select } from "./index";

interface PriceProps {
    placeholder: string;
    data: string[];
    defaultValue: string;
}

const Price = ({ placeholder, data, defaultValue }: PriceProps) => {
    return (
        <div className="pl-[26px] pr-[10px] py-[17px] border rounded-[10px] dark:border-black-5 dark:bg-black-5 border-grey-2 flex gap-1 justify-between">
            <input
                className="bg-transparent w-full text-[16px] placeholder:text-grey-2 dark:placeholder:text-static-white text-black-1 outline-none"
                placeholder={placeholder}
            />
            <Select variant="price" data={data} defaultValue={defaultValue} />
        </div>
    );
};

export default Price;
