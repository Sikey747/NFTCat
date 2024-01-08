import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    type ModalProps as ModalPropsUI,
} from "@nextui-org/react";
import { Typography, Image } from "./UI/index";
import Link from "next/link";
import Instagram from "@/public/assets/icon/instagram.svg";
import Twiter from "@/public/assets/icon/twiter.svg";
import Telegram from "@/public/assets/icon/telegram.svg";
import Discord from "@/public/assets/icon/discord.svg";

interface ModalProps extends Omit<ModalPropsUI, "children"> {
    children?: React.ReactNode;
}

const PaymentSuccess = ({ isOpen, onOpenChange }: ModalProps) => {
    return (
        <Modal
            hideCloseButton
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            classNames={{ base: "sm:max-w-[585px] sm:p-[40px] mx-0 my-0 rounded-[20px] " }}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex justify-center pb-[25px] border-b border-grey-1">
                            <Typography className="text-[24px] font-semibold" element="h4">
                                Payment Successful
                            </Typography>
                        </ModalHeader>
                        <ModalBody className="py-[25px] max-w-[365px] text-center mx-auto px-4 flex flex-col gap-[35px] border-b border-grey-1">
                            <Image
                                alt="title"
                                className="w-[211px] h-[206px] mx-auto"
                                src="/assets/creator5.png"
                            />
                            <div className="flex gap-1 justify-between items-center">
                                <Typography size="16" weight="Regular">
                                    You successfully purchased{" "}
                                    <Typography element="span" weight="SemiBold">
                                        Abstact Smoke Red Blue
                                    </Typography>{" "}
                                    from{" "}
                                    <Typography element="span" weight="SemiBold">
                                        Mia Ayana
                                    </Typography>
                                </Typography>
                            </div>
                        </ModalBody>
                        <ModalFooter className="flex flex-col justify-center items-center gap-[20px] mx-auto pt-[30px] max-w-[300px]">
                            <Typography className="text-[20px]" weight="SemiBold">
                                Share
                            </Typography>
                            <ul className="flex gap-5 items-center ">
                                <li>
                                    <Link href="/insta">
                                        <Instagram className="fill-black-1 h-[25px] w-[25px]" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insta">
                                        <Twiter className="fill-black-1 h-[25px] w-[25px]" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insta">
                                        <Telegram className="fill-black-1 h-[25px] w-[25px] " />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insta">
                                        <Discord className="fill-black-1 h-[25px] w-[25px]" />
                                    </Link>
                                </li>
                            </ul>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default PaymentSuccess;
