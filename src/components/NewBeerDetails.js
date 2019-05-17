import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import * as okocim from "../images/newbeers/okocim";
// import * as radler from "../images/newbeers/radler";
// import * as somersby from "../images/newbeers/somersby";

const NewBeerDetails = props => {
    const [beerParam] = useState(props.match.params.newBeer);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [okocim] = useState(["Nowosci-1.png", "Nowosci-2.png"]);
    const [radler] = useState([
        "Nowosci-1.png",
        "Nowosci-2.png",
        "Nowosci-3.png",
        "Nowosci-4.png",
        "Nowosci-5.png",
        "Nowosci-6.png"
    ]);
    const [somersby] = useState([
        "Nowosci-1.png",
        "Nowosci-2.png",
        "Nowosci-3.png"
    ]);

    const beer = eval(beerParam);

    return (
        <Wrapper className="container-fluid d-flex">
            {beer.map((item, index) => {
                return (
                    <Img
                        key={index}
                        src={require(`../images/newbeers/${beerParam}/${item}`)}
                        alt=""
                    />
                );
            })}
        </Wrapper>
    );
};

export default NewBeerDetails;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Img = styled.img`
    width: 100%;
`;
