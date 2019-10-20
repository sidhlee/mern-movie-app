import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { updateMovieById, getMovieById } from '../api/index';
import styled from 'styled-components';

// TODO: implement validation

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

    componentDidMount() {
        getMovieById(this.props.match.params.id)
            .then(res => {
                const movie = { ...res.data.movie };
                this.setState({
                    name: movie.name,
                    time: movie.time,
                    rating: movie.rating
                })
            })
    }

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
        this.setState({
            rating: e.target.value
        })
    }

    updateMovieHandler = e => {
        e.preventDefault();

        const id = this.props.match.params.id;
        const payload = { ...this.state };
        updateMovieById(id, payload)
            .then(res => {
                window.alert('Movie updated successfully');
                this.setState({
                    name: '',
                    time: [],
                    rating: ''
                })
                this.props.history.push("/movies/list")
            })
    }


    render() {
        return (
            <Container>
                <Header>Update Movie ID</Header>
                <div className="text-info text-center h3">ID: {this.props.match.params.id}</div>
                <Form onSubmit={this.updateMovieHandler}>
                    <Form.Group controlId="formMovieName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"

                            value={this.state.name}
                            onChange={this.nameChangeHandler}
                            required />
                    </Form.Group>
                    <Form.Group controlId="formMovieTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            type="text"

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

                            value={this.state.rating}
                            onChange={this.ratingChangeHandler}
                            required />
                    </Form.Group>
                    <Buttons>
                        <StyledButton
                            type="submit"
                            variant="primary"
                            >
                            Update
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