import React from "react";
import icons from "../context/context-icons.json";
import styled from "styled-components";
import { ReactComponent as Leaf } from "../images/brand-mark.svg";
import Icon from "./Icon";

const Icons = () => {
    return (
        <Wrapper className="container" id="icons">
            <Title>
                <Leaf />
                <span className="font-weight-bold">Obsługa klienta</span>
            </Title>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {icons.map(icon => {
                            return <Icon icon={icon} key={icon.id} />;
                        })}
                    </div>
                </div>
                <div className="col-md-4">
                    <Paragraph>
                        Jako Carlsberg stawiamy na współpracę z każdym z Was i
                        chcemy być lepsi...
                    </Paragraph>
                    <Paragraph>
                        Jeśli coś możemy poprawić zachęcamy do wypełnienia
                        ankiety.
                    </Paragraph>
                    <div className="d-flex justify-content-center p-5">
                        <Button href="http://carlsberg-qa.bpower2.com/index.php/workflow/workflowInstance/create/wc_id/264">
                            Wypełnij ankietę
                        </Button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Icons;

const Wrapper = styled.div`
    color: #284a41;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    padding: 90px 0 30px;
`;

const Paragraph = styled.p`
    font-size: 16px;
    color: #284a41;
    font-weight: 500;
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
