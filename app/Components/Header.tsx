"use client";

import React, { useEffect, useState } from "react";
import { Button, Container, Input, Typography, Logo, Switch } from "./UI/index";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import Burger from "@/public/assets/icon/Burger.svg";
import Close from "@/public/assets/icon/close.svg";
import { useMediaQuery, useLockedBody } from "usehooks-ts";
import { useTheme } from "next-themes";
import { link } from "./../../mocap";

const Header = () => {
    const pathname = usePathname();
    const matches = useMediaQuery("(min-width: 968px)");
    const [isOpen, setIsOpen] = useState(false);
    const [locked, setLocked] = useLockedBody(false, "body");
    const { theme, setTheme } = useTheme();

    const handlerMenu = () => {
        setIsOpen(!isOpen);
        setLocked(!locked);
    };

    useEffect(() => {
        if (matches) {
            setIsOpen(false);
            setLocked(false);
        }
    }, [matches]);

    return (
        <header className="py-[clamp(1.063rem,1.161vw+0.83rem,1.875rem)] border-b border-grey-1 dark:border-red-violet relative">
            <Container
                variant="max"
                className="flex gap-[10px] lg:gap-5 items-center justify-between ">
                <Logo title={matches} />
                <Input placeholder="Search Item Here" variant="Search" className="w-full" />
                <ul className="hidden lg:flex gap-5 items-center">
                    {link.map((el) => {
                        return (
                            <li key={el.title}>
                                <Link href={el.link}>
                                    <Typography
                                        size="16"
                                        weight="SemiBold"
                                        className={`whitespace-nowrap
                                        ${
                                            pathname === el.link
                                                ? "text-black-1 dark:text-static-white"
                                                : "text-grey-2"
                                        }
                                        `}>
                                        {el.title}
                                    </Typography>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {matches && (
                    <Switch
                        onClick={() => {
                            setTheme(theme === "dark" ? "light" : "dark");
                        }}
                    />
                )}
                <div className="hidden lg:flex gap-[10px]">
                    <Button>Create</Button>
                    <Button variants="secondary">Connect</Button>
                </div>
                <button
                    onClick={() => {
                        handlerMenu();
                    }}
                    type="button"
                    className="lg:hidden">
                    <Burger className="fill-dark h-[30px] w-[30px]  overflow-visible" />
                </button>
            </Container>

            {!matches && (
                <div
                    className={`absolute w-full h-dvh z-50 top-0 left-0 overflow-auto ${
                        !isOpen ? "translate-y-[-100%]" : ""
                    } bg-white transition-all`}>
                    <Container className="flex flex-col h-full">
                        <div className="pt-[28px] pb-[15px] flex items-center justify-between gap-1">
                            <Logo />
                            <Switch
                                onClick={() => {
                                    setTheme(theme === "dark" ? "light" : "dark");
                                }}
                            />
                            <button
                                onClick={() => {
                                    handlerMenu();
                                }}
                                type="button">
                                <Close className="h-[24px] w-[24px] fill-dark" />
                            </button>
                        </div>
                        <ul className="py-[12px] px-[2px] h-full flex flex-col gap-[15px] items-start border-t border-b border-grey-1">
                            {link.map((el) => {
                                return (
                                    <li key={el.title}>
                                        <Link href={el.link}>
                                            <Typography
                                                size="16"
                                                weight="SemiBold"
                                                className={`
                                        ${
                                            pathname === el.link
                                                ? "text-black-1 dark:text-static-white"
                                                : "text-grey-2"
                                        }
                                        `}>
                                                {el.title}
                                            </Typography>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="flex gap-[10px] pt-[20px] pb-[10px] items-center justify-between gap-1">
                            <Button>Create</Button>
                            <Button variants="secondary">Connect</Button>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
};

export default Header;
