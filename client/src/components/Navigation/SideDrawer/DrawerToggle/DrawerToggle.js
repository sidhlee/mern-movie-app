import React from "react";
import styled from "styled-components";

const ToggleButton = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;

    @media (min-width: 500px) {
        & { display: none }
    }
`

const Line = styled.div`
    width: 90%;
    height: 3px;
    background-color: white;
`

const drawerToggle = props => (
    <ToggleButton onClick={props.clicked} >
        <Line />
        <Line />
        <Line />
    </ToggleButton>
);

export default drawerToggle;