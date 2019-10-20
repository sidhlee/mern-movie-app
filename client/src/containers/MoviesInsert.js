import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { insertMovie } from '../api/index';
import styled from 'styled-components';


const Header = styled.div`
    font-size: 3em;
    font-weight: 600;
    text-align: center;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledButton = styled(Button)`
    margin: 5px;
`;

export default class MoviesInsert extends Component {

    state = {
        name: '',
        time: [],
        rating: ''
    };

    nameChangeHandler = e => {
        this.setState({
            name: e.target.value
        });
    }

    timeChangeHandler = e => {
        const times = e.target.value.split("/");
        this.setState({
            time: times
        })
    }

    ratingChangeHandler = e => {
        if (!e.target.validity.valid) return;
        this.setState({
            rating: e.target.value
        })
    }

    insertMovieHandler = e => {
        e.preventDefault();

        const payload = {...this.state};
        insertMovie(payload)
            .then(res => {
                window.alert('Movie inserted successfully');
                this.setState({
                    name: '',
                    time: [],
                    rating: ''
                })
            })
    }


    render() {
        return (
            <Container>
                <Header>Create Movie</Header>
                <Form onSubmit={this.insertMovieHandler}>
                    <Form.Group controlId="formMovieName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Movie Name"
                            value={this.state.name}
                            onChange={this.nameChangeHandler}
                            required />
                    </Form.Group>
                    <Form.Group controlId="formMovieTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Time/Time/..."
                            value={this.state.time.join("/")}
                            onChange={this.timeChangeHandler}
                            required />
                    </Form.Group>
                    <Form.Group controlId="formMovieName">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.1"
                            min="1"
                            max="10"
                            placeholder="Rating" 
                            onChange={this.ratingChangeHandler}
                            required />
                    </Form.Group>
                    <Buttons>
                    <StyledButton 
                        type="submit"
                        variant="primary" 
                        >
                        Create
                    </StyledButton>
                    <StyledButton 
                        variant="danger" 
                        href="/movies/list">
                        Cancel
                    </StyledButton>
                </Buttons>
                </Form>               
            </Container>
        )
    }
}