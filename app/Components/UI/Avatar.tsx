import React from "react";
import { Image } from "./index";

interface AvatarPeops {
    alt: string;
    className?: string;
    src: string;
    variant: "min" | "mid" | "max";
    children?: React.ReactNode;
}

const Avatar = ({ alt, src, className, variant, children }: AvatarPeops) => {
    const props = {
        src,
        alt,
        className: `
        bg-grey-1 rounded-full
      ${variant === "min" ? " w-[50px] h-[50px] " : ""}
      ${variant === "mid" ? " w-[77px] h-[77px] " : ""}
      ${
          variant === "max"
              ? "[width:clamp(7.063rem,8.482vw+5.366rem,13rem)] [height:clamp(7.063rem,8.482vw+5.366rem,13rem)]"
              : ""
      }
      ${className}
    `,
    };
    return <Image {...props}>{children}</Image>;
};

export default Avatar;
