import React from "react";
import styled from "styled-components";
import { ReactComponent as YouTube } from "../images/youtube.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";

const CarlsbergPoland = () => {
    return (
        <Wrapper className="container-fluid" id="CarlsbergPoland">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-5">
                        <H2>Carlsberg Polska</H2>
                        <Paragraph>
                            Carlsberg Polska to jeden z trzech graczy na rynku
                            piwa w Polsce. W swoim portfolio mamy 9 marek i
                            zatrudniamy około 1300 pracowników. Nasze piwa
                            produkujemy w trzech browarach: Okocim w Brzesku,
                            Kasztelan w Sierpcu i Bosman w Szczecinie. W 2016
                            roku Grupa Carlsberg sprzedała 117 milionów
                            hektolitrów piwa.
                        </Paragraph>
                    </div>
                    <div className="col-lg-4 d-flex flex-column mt-5">
                        <H2>Odwiedź nas na YT, Fb i Li</H2>
                        <Link href="https://www.youtube.com/user/carlsbergpolska">
                            <YouTube className="cp-icon mr-10" />
                            YouTube
                        </Link>
                        <Link href="https://www.facebook.com/CarlsbergPL/?fref=ts">
                            <Facebook className="cp-icon" />
                            Facebook
                        </Link>
                        <Link href="https://www.linkedin.com/company/carlsbergpolska">
                            <Linkedin className="cp-icon" />
                            Linkedin
                        </Link>
                    </div>
                    <div className="col-lg-4 d-flex flex-column mt-5">
                        <Iframe
                            title="carlsberg"
                            src="https://www.youtube.com/embed/tnb7a1mtuPM"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default CarlsbergPoland;

const Wrapper = styled.div`
    background: #d7e0df;
    padding: 100px 0;
`;

const H2 = styled.div`
    font-size: 2.4rem;
    font-weight: bold;
    color: #284a41;
`;

const Paragraph = styled.p`
    font-size: 16px;
    color: #284a41;
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: "ThemeFont-Tertiary", sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    color: #284a41;
    margin-top: 10px;
    :hover {
        text-decoration: none;
        color: #284a41;
    }
    :focus {
        outline: none;
    }
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 250px;
    @media (max-width: 992px) {
        height: 380px;
    }
`;
