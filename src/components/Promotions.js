import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Leaf } from "../images/brand-mark.svg";
import { GlobalState } from "../context/Store";

const Promotions = () => {
    const { promotions } = useContext(GlobalState);
    return (
        <Wrapper className="container" id="customer-service">
            <Title>
                <Leaf />
                <span className="font-weight-bold">
                    Promocje
                </span>
            </Title>
            <div className="row">
                {!promotions
                    ? null
                    : promotions.map(item => {
                          return (
                              <Column className="col-md-4" key={item.id}>
                                  <NavLink to={`promocje/${item.slug}`} className="news-link">
                                      <Img
                                          src={require(`../images/promotions/${item.img}`)}
                                          alt={item.title}
                                      />
                                      <p>{item.title}</p>
                                  </NavLink>
                              </Column>
                          );
                      })}
            </div>
        </Wrapper>
    );
};

export default Promotions;

const Wrapper = styled.div`
    color: #284a41;
`;
const Title = styled.div`
    display: flex;
    align-items: center;
    padding: 90px 0 30px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0 0 30px;
    overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    transition: 0.6s;
    cursor: pointer;
    :hover {
        transform: scale(1.02);
    }
`;
