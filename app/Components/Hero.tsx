import React from "react";
import { Container } from "./UI/index";

const Hero = () => {
    return (
        <section className="pt-[clamp(0.938rem,4.018vw+0.134rem,3.75rem)]">
            <Container variant="min">
                <div className="overflow-hidden py-[clamp(3.313rem,3.661vw+2.58rem,5.875rem)] bg-grad rounded-[25px] relative flex items-center px-[clamp(1.125rem,3.125vw+0.5rem,3.313rem)]">
                    <h1 className="text-static-white font-bold max-w-[663px] relative z-10">
                        Discover, collect, and sell extraordinary NFTs
                    </h1>
                    <div className="h-[338px] w-[338px] absolute top-[-175px] left-[-150px] bg-white opacity-20 rounded-full"></div>
                    <div className="h-[338px] w-[338px] absolute bottom-[-200px] right-[-100px] bg-white opacity-20 rounded-full"></div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
