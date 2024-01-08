"use client";

import React from "react";
import { Container, Avatar, Tabs, Image, Typography, Chip, Button } from "./../Components/UI/index";
import ModalCheckOut from "./ModalCheckOut";
import { useDisclosure } from "@nextui-org/react";
import ModalPaymentSuccess from "./ModalPaymentSuccess";

const Items = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {
        isOpen: isOpenSuccess,
        onOpen: onOpenSuccess,
        onOpenChange: onOpenChangeSuccess,
    } = useDisclosure();
    return (
        <>
            <section className="border-t border-b border-grey-1">
                <Container
                    variant="mid2"
                    className="flex flex-col gap-2 justify-between .items-center md:flex-row ">
                    <Image
                        src="/assets/bg.jpg"
                        alt="title"
                        className="md:h-[542px] h-[300px] my-auto md:w-1/2 w-full pr-[30px] py-[4.375rem]"
                        rounded="20px"
                    />
                    <div className="flex md:gap-[30px] gap-[10px] flex-col md:w-1/2 w-full md:max-w-[26.25rem] max-w-full md:pl-[clamp(0.938rem,4.464vw-1.205rem,2.813rem)] pl-0 md:border-l md:border-grey-1 md:py-[4.375rem] py-4 border-transparent">
                        <div>
                            <div className="flex items-start gap-[11px] mb-[5px] ">
                                <h1 className="text-[28px]">Abstact Smoke Red Blue</h1>
                                <Chip>92</Chip>
                            </div>
                            <div>
                                <Typography size="14" weight="Regular">
                                    From&nbsp;
                                    <Typography size="14" weight="SemiBold" element="span">
                                        4.5 ETH&nbsp;
                                    </Typography>
                                    &nbsp;20 of 25 available
                                </Typography>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-[10px]">
                            <Typography size="12" weight="Regular">
                                Creator
                            </Typography>
                            <div className="flex gap-2 items-center">
                                <Avatar src="/public/assets/creator.png" alt="ff" variant="min" />
                                <Typography size="14" weight="SemiBold" element="h2">
                                    Mia Ayana
                                </Typography>
                            </div>
                        </div>
                        <Tabs />
                        <div className="gap-5 flex justify-between md:items-center ">
                            <Button onClick={onOpen}>Buy for 4.5 ETH</Button>
                            <Button onClick={onOpenSuccess} variants="secondary">
                                Make Offer
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
            <ModalCheckOut isOpen={isOpen} onOpenChange={onOpenChange} />
            <ModalPaymentSuccess isOpen={isOpenSuccess} onOpenChange={onOpenChangeSuccess} />
        </>
    );
};

export default Items;
