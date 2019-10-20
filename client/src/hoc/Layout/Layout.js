import React, { Component } from 'react';
import { Toolbar } from '../../components';
import styled from 'styled-components';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Main = styled.main`
    margin-top: 5em;
`

export default class Layout extends Component {

    state = { showSideDrawer: false };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer};
        });
    }



    render() {
        return (
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}
                />
                <Main>
                    {this.props.children}
                </Main>
            </>
        );
    }
}
