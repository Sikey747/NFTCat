import React, { type HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
    size?: "10" | "12" | "14" | "16";
    weight?: "Regular" | "SemiBold";
}

const Typography = ({
    size = "16",
    weight = "Regular",
    children,
    className,
    ...props
}: TypographyProps) => {
    const textSize = `text-[${size}px]`;
    const fontWeight = weight === "SemiBold" ? "font-semibold" : "font-normal";

    const combinedClassName = `${textSize} ${fontWeight} ${className ?? ""}`;

    return (
        <p className={combinedClassName} {...props}>
            {children}
        </p>
    );
};

export default Typography;
