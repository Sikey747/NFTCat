import React from "react";
import ImageNext, { type StaticImageData } from "next/image";

interface ImageProps {
    className: string;
    alt: string;
    src: string | StaticImageData;
    children?: React.ReactNode;
}

const Image = ({ className, alt, src, children }: ImageProps) => {
    return (
        <div className={`ibg ${className}`}>
            <ImageNext alt={alt} src={src} fill sizes="100vw" />
            {children}
        </div>
    );
};

export default Image;
