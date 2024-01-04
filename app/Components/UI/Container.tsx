import React, { type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "max" | "mid" | "mid2" | "min";
}

const Container = ({ variant = "max", children, className, ...atr }: ContainerProps) => {
    return (
        <div
            className={`mx-auto px-[10px] 
            ${variant === "min" && `max-w-[990px]`}
            ${variant === "max" && `max-w-[1340px]`}
            ${variant === "mid" && `max-w-[1030px]`}
            ${variant === "mid2" && `max-w-[1120px]`}
            ${className ?? ""}
            `}
            {...atr}>
            {children}
        </div>
    );
};

export default Container;
