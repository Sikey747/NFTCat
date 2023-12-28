import Image from "next/image";
import FillHard from "@/public/assets/icon/FillLike.svg";
import { Typography } from "./index";

interface NFTCardProps {
    src: string;
    title: string;
    prise: number;
    like: number;
}

const NFTCard = ({ src, title, prise, like }: NFTCardProps) => {
    return (
        <article className="shadow1 bg-white rounded-[20px] px-[20px] py-[28px] flex flex-col gap-[15px] max-w-[233px]">
            <div className="ibg bg-grey-2 w-full min-h-[230px] rounded-[20px]">
                <Image src={src} alt={title} fill />
            </div>
            <div className="flex gap-[5px] flex-col">
                <Typography size="12" weight="SemiBold">
                    {title}
                </Typography>
                <div className="flex justify-between gap-2 items-center">
                    <div className="flex gap-[2px] items-center">
                        <Typography size="12" weight="SemiBold">
                            {prise}
                        </Typography>
                        <Typography size="12" weight="Regular">
                            ETH
                        </Typography>
                    </div>
                    <div className="flex gap-[2px] items-center">
                        <FillHard className="h-[14px] w-[14px] translate-y-[-1px]" />
                        <Typography size="12" weight="Regular">
                            {like}
                        </Typography>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default NFTCard;
