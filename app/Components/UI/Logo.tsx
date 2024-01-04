import React from "react";
import LogoMin from "@/public/assets/icon/Logo.svg";

interface LogoProps {
    title?: boolean;
}

const Logo = ({ title = false }: LogoProps) => {
    return (
        <>
            {!title && <LogoMin className={`h-[32px] w-[32px] stroke-white overflow-visible`} />}
            {title && (
                <div className="flex items-center gap-1">
                    <LogoMin className={`h-[32px] w-[32px] stroke-white overflow-visible`} />
                    <p className="text-[18px] font-bold text-black-1 ">CryptoKet</p>
                </div>
            )}
        </>
    );
};

export default Logo;
