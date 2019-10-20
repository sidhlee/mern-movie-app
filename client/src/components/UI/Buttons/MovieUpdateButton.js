import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class MovieUpdateButton extends Component {
    updateMovieHandler = e => {
        e.preventDefault();
        window.location.href = `/movies/update/${this.props.id}`
    }

    render() {
        return (
            <Button
                variant="outline-info"
                onClick={this.updateMovieHandler}
                size="sm"
            >
                Update
            </Button>
        )
    }
}

export default MovieUpdateButton;