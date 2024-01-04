import React from "react";
import { Container, Avatar, Tabs, Image, Typography, Chip, Button } from "./../Components/UI/index";
const page = () => {
    return (
        <section>
            <Container variant="mid2" className="flex gap-2 justify-between items-center">
                <Image src="/public/assets/bg.jpg" alt="title" className="h-[542px]" />
                <div>
                    <div className="">
                        <div className="flex items-center gap-[11px] mb-[5px]">
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
                            <h2>Mia Ayana</h2>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default page;
