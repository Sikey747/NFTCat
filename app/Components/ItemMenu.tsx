import React from "react";
import { Container, Input, Select } from "./UI/index";
import { sortData } from "./../../mocap";

const ItemMenu = () => {
    return (
        <section className="py-[30px]">
            <Container
                variant="min"
                className="gap-5 flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between items-center">
                <Input variant="Search" className="w-auto" />
                <Select data={sortData} defaultValue={sortData[0]} className="w-[233px]" />
            </Container>
        </section>
    );
};

export default ItemMenu;
