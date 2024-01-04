import React from "react";
import { Container, Logo, Input, Button, Typography } from "./UI/index";
import Link from "next/link";
import Instagram from "@/public/assets/icon/instagram.svg";
import Twiter from "@/public/assets/icon/twiter.svg";
import Telegram from "@/public/assets/icon/telegram.svg";
import Discord from "@/public/assets/icon/discord.svg";

const Footer = () => {
    return (
        <footer className="pt-[32px] border-t border-grey-1">
            <Container variant="min" className="flex flex-col ">
                <div className="flex flex-wrap md:flex-nowrap gap-3 justify-between border-b border-grey-1 pb-[32px]">
                    <div className="md:max-w-[357px] max-w-full flex flex-col gap-[25px]">
                        <Logo title />
                        <Typography size="16" weight="SemiBold">
                            Get the lastes Updates
                        </Typography>
                        <div className="flex">
                            <Input sizes="min" placeholder="Your Email" />
                            <Button className="ml-[-17px]" variants="primary">
                                Email Me!
                            </Button>
                        </div>
                    </div>
                    <div className="w-fit flex gap-[24px] flex-col">
                        <h3>CryptoKet</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Typography size="16" weight="Regular">
                                    Explore
                                </Typography>
                            </li>
                            <li>
                                <Typography size="16" weight="Regular">
                                    How it Works
                                </Typography>
                            </li>
                            <li>
                                <Typography size="16" weight="Regular">
                                    Contact Us
                                </Typography>
                            </li>
                        </ul>
                    </div>
                    <div className="w-fit flex gap-[24px] flex-col">
                        <h3>Support</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Typography size="16" weight="Regular">
                                    Help center
                                </Typography>
                            </li>
                            <li>
                                <Typography size="16" weight="Regular">
                                    Terms of service
                                </Typography>
                            </li>
                            <li>
                                <Typography size="16" weight="Regular">
                                    Legal
                                </Typography>
                            </li>
                            <li>
                                <Typography size="16" weight="Regular">
                                    Privacy policy
                                </Typography>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 py-[32px] items-center justify-center sm:justify-between">
                    <Typography className="text-center" size="16" weight="SemiBold">
                        CrpytoKet, Inc. All Rights Reserved
                    </Typography>
                    <ul className="flex gap-5 items-center ">
                        <li>
                            <Link href="/insta">
                                <Instagram className="fill-black-1" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/insta">
                                <Twiter className="fill-black-1" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/insta">
                                <Telegram className="fill-black-1" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/insta">
                                <Discord className="fill-black-1" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
