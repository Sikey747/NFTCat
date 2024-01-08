import React, { type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({ className, ...atr }: TextareaProps) => {
    return (
        <textarea
            {...atr}
            className={`dark:bg-black-5 dark:border-black-5 bg-transparent w-full min-h-[190px] px-[29px] py-[17px] border border-black-1 rounded-[10px] text-[16px] leading-[162.5%] text-black-1 dark:placeholder:text-static-white placeholder:text-grey-2 ${className}`}
        />
    );
};

export default Textarea;
