import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
    text-align: center;
    margin: 1em;
    margin-top: 100px;
    @media (max-width: 500px) {
        margin-top: -15px;   
    }
`
const TextXl = styled.div`
    font-size: 60px;
    font-weight: bold;
    text-shadow: 1px 3px 0 #ccc;
    @media (max-width: 500px) {
        margin-top: -10px;
    }
`

const TextLg = styled.div`
    font-size: 30px;
    font-weight: 600;
    color: #777;
`

export default class Main extends Component {

    render() {
        return (
            <StyledMain>
                <TextXl>Mongo</TextXl>
                <TextLg>+</TextLg>
                <TextXl>Express</TextXl>
                <TextLg>+</TextLg>
                <TextXl>React</TextXl>
                <TextLg>+</TextLg>
                <TextXl>Node</TextXl>
                <TextLg>Full Stack Application For Cinemas</TextLg>
            </StyledMain>
        )
    }
}
