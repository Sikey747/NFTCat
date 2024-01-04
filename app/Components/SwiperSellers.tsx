"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { SellersCard, Container } from "./UI/index";
import { sellers } from "../../mocap";
import Next from "@/public/assets/icon/ArrowNext.svg";
import Prev from "@/public/assets/icon/ArrowPrev.svg";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useMediaQuery } from "usehooks-ts";

const SwiperSellers = () => {
    const matches = useMediaQuery("(min-width: 968px)");
    return (
        <section className="overflow-hidden">
            <Container variant="mid">
                <h2 className="mb-[30px]">Top Sellers</h2>
                <div className="relative  ">
                    <Swiper
                        className="flex"
                        loop
                        spaceBetween={10}
                        slidesPerView={2.2}
                        modules={[Navigation, Autoplay]}
                        autoplay
                        navigation={{
                            prevEl: ".prev",
                            nextEl: ".next",
                        }}
                        breakpoints={{
                            550: { slidesPerView: 3.5, spaceBetween: 16 },
                            800: { slidesPerView: 5, spaceBetween: 22 },
                        }}>
                        {sellers.map((el, idx) => {
                            return (
                                <SwiperSlide key={el.title}>
                                    <SellersCard
                                        price={el.price}
                                        srs={el.img}
                                        title={el.title}
                                        position={idx + 1}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    {matches && (
                        <>
                            <button className="prev absolute top-[50%] translate-y-[-50%] left-[-15px] z-10">
                                <Prev className="w-[30px] h-[30px] " />
                            </button>
                            <button className="next absolute top-[50%] translate-y-[-50%] right-[-15px] z-10">
                                <Next className="w-[30px] h-[30px] " />
                            </button>
                        </>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default SwiperSellers;
