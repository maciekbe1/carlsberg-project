import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PromotionsDetails = props => {
    const [promotion] = useState(props.match.params.promotion);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [harnas] = useState(["harnas-1.png", "harnas-2.png"]);
    const [kasztelan] = useState([
        "kasztelan-1.png",
        "kasztelan-2.png",
        "kasztelan-3.png",
        "kasztelan-4.png",
        "kasztelan-5.png"
    ]);
    const [somersby] = useState([
        "somersby-1.png",
        "somersby-2.png",
        "somersby-3.png",
        "somersby-4.png",
        "somersby-5.png",
        "somersby-6.png",
        "somersby-7.png",
        "somersby-8.png"
    ]);

    const beer = eval(promotion);
    return (
        <Wrapper className="container-fluid d-flex">
            {beer.map((item, index) => {
                return (
                    <Img
                        key={index}
                        src={require(`../images/promotions/${promotion}/${item}`)}
                        alt=""
                    />
                );
            })}
        </Wrapper>
    );
};

export default PromotionsDetails;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Img = styled.img`
    width: 100%;
`;
