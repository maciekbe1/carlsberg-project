import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <Wrapper>
            <Div>
                <Paragraph>Carlsberg Polska </Paragraph>
                <Paragraph>ul. Krakowiaków 34,</Paragraph>
                <Paragraph>02-255 Warszawa,</Paragraph>
                <br />
                <Paragraph>Telefon + 22 543 15 00 </Paragraph>
                <Paragraph>info@carlsberg.pl</Paragraph>
                <hr />
                <nav className="navbar navbar-light">
                    <div className="navbar-nav ml-auto d-flex flex-row">
                        <a className="nav-item nav-link m-3" href="test">
                            Polityka prywatności
                        </a>
                        <a className="nav-item nav-link m-3" href="test">
                            Polityka Cookie
                        </a>
                        <a className="nav-item nav-link m-3" href="test">
                            Kontakt
                        </a>
                    </div>
                </nav>
            </Div>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.footer`
    height: 420px;
    position: relative;
`;

const Div = styled.div`
    height: 420px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Paragraph = styled.p`
    color: #5a5a5a;
    font-weight: bold;
`;
