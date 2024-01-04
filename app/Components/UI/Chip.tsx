import React from "react";
import { Chip as ChipUi, type ChipProps } from "@nextui-org/react";
import IconHeard from "@/public/assets/icon/FillLike.svg";

interface ChipOwnProps extends ChipProps {}

const Chip = ({ children }: ChipOwnProps) => {
    return (
        <ChipUi
            className="border-[0.5px] px-[15px] py-[6px] h-auto text-[14px] rounded-[22px]  border-grey-2 "
            startContent={<IconHeard />}
            variant="bordered"
            classNames={{ content: "text-black-1 px-0 pl-[4px] text-[14px]" }}>
            {children}
        </ChipUi>
    );
};

export default Chip;
