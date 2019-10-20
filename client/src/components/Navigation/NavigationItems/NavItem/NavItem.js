import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavItem = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
    @media (min-width: 500px) {
        & {
            margin: 0;
            display: flex;
            height: 100%;
            width: auto;
            align-items: center;
        }
    }
`;

const StyledLink = styled(Link)`
    font-size: 1.2em;
    color: #111;
    text-decoration: none;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    display: block;
    :hover,
    :active {
        color: #40a4c8;
        text-decoration: none;
    }
    @media (min-width: 500px) {
        & {
            color: ${props => props.active ? "#40a4c8" : "white"};
            height: 100%;
            padding: 16px 10px;
            border-bottom: ${props => props.active ? "4px solid #40a4c8" : "4px solid transparent"};
        }
        :hover, :active {
            padding: 3px 10px !important;
            border-bottom: 4px solid #40a4c8;
            text-decoration: none;
        }
    }
`

const navigationItem = props => (
    <StyledNavItem>
        <StyledLink to={props.link}>
            {props.children}
        </StyledLink>
    </StyledNavItem>
);

export default navigationItem;