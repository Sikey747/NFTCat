import React from "react";
import LogoMin from "@/public/assets/icon/logo02.png";
import LogoMax from "@/public/assets/logo.png";
import Image from "next/image";

interface LogoProps {
    variant: "min" | "max";
}

const Logo = ({ variant }: LogoProps) => {
    return (
        <div
            className={`
        ibg 
        h-[32px]
        ${variant === "min" ? "w-[32px]" : ""}
        ${variant === "max" ? "w-[131px]" : ""}
        `}>
            <Image src={variant === "min" ? LogoMin : LogoMax} alt="logo" fill />
        </div>
    );
};

export default Logo;
