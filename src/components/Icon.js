import React from "react";
import styled from "styled-components";

const Icon = props => {
    const icon = props.icon;
    return (
        <Column className="col-lg-3 col-sm-3" key={icon.id}>
            <Link href={icon.link}>
                <Img src={require(`../images/${icon.img}`)} alt={icon.title} />
                <p>{icon.title}</p>
            </Link>
        </Column>
    );
};

export default Icon;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0 0 30px;
    overflow: hidden;
    @media (max-width: 576px) {
        width: 50%;
    }
    @media (max-width: 300px) {
        width: 60%;
        margin: 20px auto;
    }
`;

const Img = styled.img`
    width: 100%;
    transition: 0.6s;
    cursor: pointer;
    :hover {
        transform: scale(1.02);
    }
`;

const Link = styled.a`
    font-size: 14px;
    font-family: "ThemeFont-Tertiary", sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    color: #284a41;
    :hover {
        text-decoration: none;
        color: #284a41;
    }
`;
