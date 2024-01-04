import React from "react";
import Check from "@/public/assets/icon/Check.svg";
import { Typography, Avatar } from "./index";

interface SellersCardProps {
    srs: string;
    title: string;
    price: number;
    position: number;
}

const SellersCard = ({ srs, title, price, position }: SellersCardProps) => {
    return (
        <article className="max-w-[180px] min-w-[130px] relative min-h-[200px] p-[11px] bg-white rounded-[20px] border border-grey-1">
            <div className="text-white absolute top-[11px] left-[11px] w-[33px] h-[33px] flex justify-center items-center bg-red-violet rounded-full ">
                <Typography size="16" weight="SemiBold">
                    {position}
                </Typography>
            </div>
            <div className="mx-auto mt-[34px] flex flex-col gap-[5px] items-center justify-center text-center">
                <Avatar variant="mid" src={srs} alt={title}>
                    <div className="w-[15px] h-[15px] bg-[#00B247] rounded-full bottom-0 right-[5px] z-10 absolute flex justify-center items-center">
                        <Check />
                    </div>
                </Avatar>
                <Typography size="16" weight="SemiBold">
                    {title}
                </Typography>
                <div className="flex gap-[2px] items-center">
                    <Typography size="16" weight="SemiBold">
                        {price}
                    </Typography>
                    <Typography size="16" weight="Regular">
                        ETH
                    </Typography>
                </div>
            </div>
        </article>
    );
};

export default SellersCard;
