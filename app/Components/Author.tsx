import React from "react";
import { Container, Image, Avatar } from "./UI/index";

const Author = () => {
    return (
        <section className="mb-[clamp(8.438rem,7.768vw+6.884rem,13.875rem)] relative">
            <Image
                src="/assets/bg.jpg"
                alt="bg"
                className="h-[clamp(16.875rem,3.571vw+16.161rem,19.375rem)]"
            />
            <Container variant="min" className="absolute top-[208px] left-[50%] translate-x-[-50%]">
                <div className="relative w-full flex flex-col items-center justify-center gap-[10px]">
                    <div className="w-[clamp(7.5rem,8.929vw+5.714rem,13.75rem)] h-[clamp(7.5rem,8.929vw+5.714rem,13.75rem)] rounded-full bg-static-black p-[clamp(0.188rem,0.268vw+0.134rem,0.375rem)]">
                        <Avatar alt="515" src="/kk" variant="max" />
                    </div>
                    <h1>Mia Ayana</h1>
                </div>
            </Container>
        </section>
    );
};

export default Author;
