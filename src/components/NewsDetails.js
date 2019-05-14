import React, { useState, useContext } from "react";
import { GlobalState } from "../context/Store";
import styled from "styled-components";
import icons from "../context/context-icons.json";
import Icon from "./Icon";
import parse from "html-react-parser";

const NewsDetails = props => {
    const [newsParam] = useState(props.match.params.id);
    const { news } = useContext(GlobalState);
    return (
        <Wrapper className="container-fluid d-flex">
            {!news
                ? null
                : news.map(news => {
                      if (newsParam === news.slug) {
                          return (
                              <div key={news.slug} className="container">
                                  <H2>{news.title}</H2>
                                  <div className="row">
                                      <div className="col-lg-5">
                                          <ImgWrapper
                                              src={require(`../images/${
                                                  news.img
                                              }`)}
                                              alt={news.slug}
                                          />
                                      </div>

                                      <div className="col-lg-7">
                                          <Paragraph>
                                              {parse(news.text)}
                                          </Paragraph>
                                          {news.slug ===
                                          "wygodne-narzedzia-dla-klientow" ? (
                                              <div className="container">
                                                  <div className="row">
                                                      <div className="col-sm-12">
                                                          <div className="row">
                                                              {icons.map(
                                                                  icon => {
                                                                      return (
                                                                          <Icon
                                                                              icon={
                                                                                  icon
                                                                              }
                                                                              key={
                                                                                  icon.id
                                                                              }
                                                                          />
                                                                      );
                                                                  }
                                                              )}
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          ) : null}
                                          {news.slug ===
                                          "chcemy-byc-dla-ciebie-lepsi" ? (
                                              <div className="d-flex justify-content-center p-5">
                                                  <Button href="http://carlsberg-qa.bpower2.com/index.php/workflow/workflowInstance/create/wc_id/264">
                                                      Wypełnij ankietę
                                                  </Button>
                                              </div>
                                          ) : null}
                                      </div>
                                  </div>
                              </div>
                          );
                      }
                      return null;
                  })}
        </Wrapper>
    );
};

export default NewsDetails;

const Wrapper = styled.div``;
const H2 = styled.h2`
    text-align: center;
    padding: 30px 0;
    color: #284a41;
    font-size: 4.6rem;
`;
const ImgWrapper = styled.img`
    width: 100%;
    object-fit: contain;
    object-position: top;
    margin-bottom: 30px;
    // max-width: 400px;
    // width: 100%;
    // float: left;
    // margin: 0 30px 30px 0;
    // display: flex;
    // margin: 0 auto;
    // max-width: 600px;
    // height: 250px;
    // object-fit: cover;
    // object-position: top;
    // width: 100%;
`;
const Paragraph = styled.div`
    font-size: 16px;
    color: #284a41;
    font-weight: 500;
    margin-bottom: 30px;
`;

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 200px;
    height: 40px;
    background: none;
    border: 3px solid #284a41;
    color: #284a41;
    font-weight: bold;
    transition: 0.3s;
    :hover {
        background: #284a41;
        color: #fff;
        text-decoration: none;
    }
`;
