import React from "react";
import CustomerServiceNews from "./News";
import Icons from "./Icons";
import CarlsbergPoland from "./CarlsbergPoland";
import Promotions from "./Promotions";
import NewBeers from "./NewBeers";
import Jumbotron from "./Jumbotron";
const Homepage = () => {
    return (
        <>
            <Jumbotron />
            <CustomerServiceNews />
            <NewBeers />
            <Promotions />
            <Icons />
            <CarlsbergPoland />
        </>
    );
};

export default Homepage;
