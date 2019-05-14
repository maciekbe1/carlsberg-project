import React from "react";
import BestBeer from "./BestBeer";
import CustomerServiceNews from "./News";
import Icons from "./Icons";
import CarlsbergPoland from "./CarlsbergPoland";

const Homepage = () => {
    return (
        <>
            <BestBeer />
            <CustomerServiceNews />
            <Icons />
            <CarlsbergPoland />
        </>
    );
};

export default Homepage;
