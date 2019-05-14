import React from "react";
import styled from "styled-components";
import beer from "../images/carlsberg_profil.png";
import { ReactComponent as Leaf } from "../images/brand-mark.svg";

const BestBeer = () => {
    return (
        <Jumbotron>
            <Wrapper className="row no-gutters">
                <Column className="col-md-6 col-xs-10 overflow-hidden position-relative ">
                    <Portfolio>
                        <div>
                            <Leaf />
                            <span className="font-weight-bold">PORTFOLIO</span>
                        </div>
                        <div>Poznaj nasze marki!</div>
                    </Portfolio>

                    <ImgBeer src={beer} alt="beer" />
                </Column>
                <Column className="col-md-5 col-xs-10 offset-lg-1">
                    <TextWrapper>
                        <H2>Prawdopodobnie najlepsze piwo na świecie </H2>
                        <Paragraph className="brand-slider__description">
                            Piwo Carlsberg zostało uwarzone po raz pierwszy
                            przez założyciela firmy J.C. Jacobsena w 1847 roku.
                            Inspiracją był bawarski lager – jasne piwo dolnej
                            fermentacji. W 1868 J.C. Jacobsen wysłał piwo do
                            spróbowania sklepikarzowi w Szkocji i tym samym
                            rozpoczął jego eksport. Odtąd Carlsberg stał się
                            piwem dostępnym i znanym na całym świecie.
                        </Paragraph>
                    </TextWrapper>
                </Column>
            </Wrapper>
        </Jumbotron>
    );
};

export default BestBeer;

const Jumbotron = styled.div`
    background: #e8f3e0;
    min-height: 646px
    width: 100%
`;

const Wrapper = styled.div`
    min-height: 646px;
`;

const Portfolio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 20%;
    left: 20%;
    color: #284a41;
    font-size: 14px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ImgBeer = styled.img`
    max-width: 700px;
    width: 100%;
    margin-left: -35px;
    @media (max-width: 768px) {
        margin-top: 120px;
        margin-bottom: 30px;
    }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`;

const H2 = styled.h2`
    font-size: 4.2rem;
    font-family: "ThemeFont-Tertiary", sans-serif;
    text-transform: uppercase;
    color: rgb(1, 86, 34);
    font-weight: 900;
    @media (max-width: 1200px) {
        font-size: 3.6rem;
    }
    @media (max-width: 992px) {
        font-size: 3.3rem;
    }
    @media (max-width: 768px) {
        padding: 0 50px;
    }
    @media (max-width: 576px) {
        font-size: 2.8rem;
        padding: 0 10px;
    }
`;
const Paragraph = styled.p`
    font-size: 2rem;
    line-height: 150%;
    color: rgb(1, 86, 34);
    margin: 0 0 40px;
    @media (max-width: 768px) {
        padding: 0 50px;
    }
    @media (max-width: 576px) {
        padding: 0 10px;
    }
`;
