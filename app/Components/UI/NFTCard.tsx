import FillHard from "@/public/assets/icon/FillLike.svg";
import { Typography, Image } from "./index";

interface NFTCardProps {
    src: string;
    title: string;
    prise: number;
    like: number;
}

const NFTCard = ({ src, title, prise, like }: NFTCardProps) => {
    return (
        <article className="shadow1 bg-white dark:bg-black-3 rounded-[20px] px-[clamp(0.438rem,1.161vw+0.205rem,1.25rem)] py-[clamp(0.75rem,1.429vw+0.464rem,1.75rem)] flex flex-col gap-[clamp(0.313rem,0.893vw+0.134rem,0.938rem)] max-w-[clamp(9.063rem,7.857vw+7.491rem,14.563rem)]">
            <Image
                src={src}
                alt={title}
                className="bg-grey-2 w-full min-h-[230px] rounded-[20px]"></Image>
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
                        <FillHard className="h-[14px] w-[14px] translate-y-[-1px] fill-black-1" />
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
