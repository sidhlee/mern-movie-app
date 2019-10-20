import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem/NavItem';

const NavItems = styled.ul`
    margin: 0 0 0 16px;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    height: 100%;

    @media (min-width: 500px) {
        & {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }
`;




const navigationItems = () => (
    <nav>
        <NavItems>
            <NavItem link="/">Main</NavItem>
            <NavItem link="/movies/list">Movies</NavItem>
            <NavItem link="/movies/create">Create Movie</NavItem>            
        </NavItems>
    </nav>
);

export default navigationItems;
