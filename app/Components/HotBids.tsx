import React from "react";
import { Container, NFTCard, Button } from "./UI/index";
import { sellers } from "./../../mocap";

const HotBids = () => {
    return (
        <section>
            <Container variant="min">
                <h2 className="mb-[30px]">Hot Bids</h2>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(clamp(9.063rem,7.143vw+7.634rem,14.063rem),1fr))] gap-[clamp(0.625rem,0.893vw+0.446rem,1.25rem)] mb-[60px]">
                    {sellers.map((el) => {
                        return (
                            <NFTCard
                                like={el.like}
                                prise={el.price}
                                src={el.img}
                                title={el.title}
                                key={el.title}
                            />
                        );
                    })}
                </div>
                <div className="mb-[clamp(2.5rem,1.786vw+2.143rem,3.75rem)] w-full flex justify-center">
                    <Button variants="secondary" className="w-[300px] ">
                        Load More
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default HotBids;
