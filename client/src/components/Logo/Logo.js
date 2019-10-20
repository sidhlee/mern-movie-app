import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 8px;
`;

const Img = styled.img`
    width: 50px;
    height: auto;
`

class Logo extends Component {
    render() {
        return (
            <Wrapper to="/">
                <Img src={logo} alt="logo" />
            </Wrapper>
        )
    }
}

export default Logo;
