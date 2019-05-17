import React from "react";
import BestBeer from "./BestBeer";
import kasztelan from "../images/promotions/kasztelan/kasztelan-1.png";
import somersby from "../images/newbeers/somersby/Nowosci-2.png";
import styled from "styled-components";

const Slider = () => {
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
        >
            <ol className="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                />
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                />
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <BestBeer />
                </div>
                <div className="carousel-item">
                    <div className="d-flex justify-content-center align-items-center">
                        <Img src={kasztelan} alt="" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex justify-content-center align-items-center">
                        <Img src={somersby} alt="" />
                    </div>
                </div>
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                />
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Slider;
const Img = styled.img`
    height: 646px;
`;
