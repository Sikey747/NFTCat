import React from "react";
import HotBids from "./../Components/HotBids";
import Author from "./../Components/Author";
import ItemMenu from "./../Components/ItemMenu";
const page = () => {
    return (
        <>
            <Author />
            <ItemMenu />
            <HotBids />
        </>
    );
};

export default page;
