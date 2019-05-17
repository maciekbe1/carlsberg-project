import React from "react";
import Slider from "./Slider";
import BestBeer from "./BestBeer";
import styled from "styled-components";

export default function Jumbotron() {
    return (
        <>
            <Content2>
                <BestBeer />
            </Content2>
            <Content1>
                <Slider />
            </Content1>
        </>
    );
}

const Content1 = styled.div`
    @media (max-width: 1200px) {
        display: none;
    }
`;
const Content2 = styled.div`
    @media (min-width: 1200px) {
        display: none;
    }
`;
