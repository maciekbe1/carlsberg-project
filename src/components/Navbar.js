import React from "react";
import styled from "styled-components";
import logo from "../images/carlsberg-polska.png";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light nav-global sticky-top">
            <Link className="navbar-brand" to="/">
                <Img src={logo} alt="logo" />
                <Span>Perfect customer service</Span>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link
                        className="nav-item nav-link"
                        to="/#newbeers-and-promotions"
                    >
                        Nowości i promocje
                    </Link>
                    <Link className="nav-item nav-link" to="/#customer-service">
                        Dla partnerów
                    </Link>
                    <Link className="nav-item nav-link" to="/#icons">
                        Obsługa klienta
                    </Link>
                    <a
                        className="nav-item nav-link"
                        href="http://carlsberg-qa.bpower2.com/index.php/workflow/workflowInstance/create/wc_id/264"
                    >
                        Chcemy być lepsi
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

const Img = styled.img`
    width: 86px;
    height: 45px;
`;

const Span = styled.span`
    color: #115622;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    margin-left: 20px;
`;
