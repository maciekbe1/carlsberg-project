import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Switch, HashRouter } from "react-router-dom";
import "@atlaskit/css-reset";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import NewsDetails from "./NewsDetails";
import Store from "../context/Store";

const App = () => {
    return (
        <Store>
            <HashRouter>
                <GlobalStyle />
                <Wrapper>
                    <div className="container-fluid">
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Homepage} />
                            <Route path="/:id" component={NewsDetails} />
                            <Route component={NotFound} />
                        </Switch>

                        <Footer />
                    </div>
                </Wrapper>
            </HashRouter>
        </Store>
    );
};

export default App;

const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}
body {
    background: #c4cfd8;
}
.nav-global {
    padding: 15px 0;
    background: #fff;
}
svg {
    height: 20px;
    width: 20px;
    display: block;
    float: left;
    margin-right: 5px;
    margin-top: -2px;
}
.container-fluid {
    @media (max-width: 576px) {
        padding: 0;
    }
}
.cp-icon {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    fill: #284a41;
}
a {
    :focus {
        outline: none;
    }
}
.news-link {
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
}
`;

const Wrapper = styled.div`
    background: #fff;
    max-width: 1440px;
    padding: 0 10px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 576px) {
        padding: 0;
    }
`;
