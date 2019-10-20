import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { deleteMovieById } from '../../../api';

class MovieDeleteButton extends Component {
    deleteMovieHandler = e => {
        e.preventDefault();
        if (window.confirm("Proceed to delete selected movie?")) {
            deleteMovieById(this.props.id);
            window.location.reload();
        } else return;

    }

    render() {
        return (
            <Button
                variant="outline-danger"
                onClick={this.deleteMovieHandler}
                size="sm"
            >
                Delete
            </Button>
        )
    }
}

export default MovieDeleteButton;