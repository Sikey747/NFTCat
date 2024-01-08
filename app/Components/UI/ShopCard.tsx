import React from "react";
import { Image, Typography } from "./index";

interface ShopCardProps {
    alt: string;
    src: string;
    name: string;
    description: string;
    price: number | string;
}

const ShopCard = ({ alt, src, name, description: discription, price }: ShopCardProps) => {
    return (
        <article className="flex gap-1 justify-between items-center">
            <div className="flex gap-[15px] items-center">
                <Image
                    alt={alt}
                    src={src}
                    className="w-[clamp(3.375rem,4.732vw+2.429rem,6.688rem)] h-[clamp(3.25rem,4.911vw+2.268rem,6.688rem)]"
                />
                <div className="max-w-[122px]">
                    <Typography size="14" weight="SemiBold" element="h5">
                        {name}
                    </Typography>
                    <Typography size="14" weight="Regular">
                        {discription}
                    </Typography>
                </div>
            </div>
            <Typography className="self-start" size="16" weight="Regular">
                {price}&nbsp;
                <Typography element="span" size="16" weight="SemiBold">
                    ETH
                </Typography>
            </Typography>
        </article>
    );
};

export default ShopCard;
