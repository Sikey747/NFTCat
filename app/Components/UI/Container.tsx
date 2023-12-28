import React, { type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "max" | "min";
}

const Container = ({ variant = "max", children, className, ...atr }: ContainerProps) => {
    return (
        <div
            className={`mx-auto px-[10px] 
            ${variant === "max" ? `max-w-[1340px]` : "max-w-[990px]"}
            ${className ?? ""}
            `}
            {...atr}>
            {children}
        </div>
    );
};

export default Container;
