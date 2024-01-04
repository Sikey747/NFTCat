import React from "react";
import { Select } from "./index";

interface PriceProps {
    placeholder: string;
    data: string[];
    defaultValue:string;
}

const Price = ({ placeholder, data, defaultValue }: PriceProps) => {
    return (
        <div className="px-[26px] py-[17px] border rounded-[10px] border-grey-2 flex gap-1 justify-between">
            <input
                className=" text-[16px] placeholder:text-grey-2 text-black-1 outline-none"
                placeholder={placeholder}
            />
            <Select data={data} defaultValue={defaultValue} />
        </div>
    );
};

export default Price;
