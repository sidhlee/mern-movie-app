import React from "react";
import { NavigationItems } from "../..";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import styled from "styled-components";

const StyledSideDrawer = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 16px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    transform: ${props => props.open ? "translateX(0)" : "translateX(-100vw)"};

    @media (min-width: 500px) {
        & {
            display: none;
        }
    }
`

const SideDrawerLogoWrapper = styled.div`
    height: 11%;
    margin-bottom: 12px;
`

const sideDrawer = props => (
    <>
        <Backdrop show={props.open} clicked={props.closed} />
        <StyledSideDrawer open={props.open}>
            <SideDrawerLogoWrapper>
                <Logo />
            </SideDrawerLogoWrapper>
            <NavigationItems />
        </StyledSideDrawer>
    </>
);

export default sideDrawer;


    