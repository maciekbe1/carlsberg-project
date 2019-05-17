import React from "react";
import BestBeer from "./BestBeer";
import CustomerServiceNews from "./News";
import Icons from "./Icons";
import CarlsbergPoland from "./CarlsbergPoland";
import Promotions from "./Promotions";
import NewBeers from "./NewBeers";
import Slider from "./Slider";
const Homepage = () => {
  return (
    <>
      <Slider />
      <CustomerServiceNews />
      <NewBeers />
      <Promotions />
      <Icons />
      <CarlsbergPoland />
    </>
  );
};

export default Homepage;
