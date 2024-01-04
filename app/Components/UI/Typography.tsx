import React, { type ComponentProps, type ElementType } from "react";

interface TypographyOwnProps<E extends ElementType = ElementType> {
    size?: "10" | "12" | "14" | "16";
    weight?: "Regular" | "SemiBold";
    children: React.ReactNode;
    className?: string;
    element?: E;
}

type TypographyProps<E extends ElementType> = TypographyOwnProps<E> &
    Omit<ComponentProps<E>, keyof TypographyOwnProps>;

const defaultElement = "p";

const Typography = <E extends ElementType = typeof defaultElement>({
    size = "16",
    weight = "Regular",
    children,
    className,
    element,
    ...props
}: TypographyProps<E>) => {
    const textSize = `text-[${size}px]`;
    const fontWeight = weight === "SemiBold" ? "font-semibold" : "font-normal";
    const TagName = element ?? defaultElement;
    const combinedClassName = `${textSize} ${fontWeight} ${className ?? ""}`;

    return (
        <TagName className={combinedClassName} {...props}>
            {children}
        </TagName>
    );
};

export default Typography;
