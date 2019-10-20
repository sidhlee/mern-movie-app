import React, {Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import api from '../api';
import styled from 'styled-components';
import MovieDeleteButton from '../components/UI/Buttons/MovieDeleteButton';
import MovieUpdateButton from '../components/UI/Buttons/MovieUpdateButton';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

const ButtonWrapper = styled.div`
    text-align: center;
`;



export default class MoviesList extends Component {
    state = {
        movies: [],
        columns: [],
        isLoading: false
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        api.getAllMovies()
            .then(res => {
                this.setState({
                    movies: res.data.movies,
                    isLoading: false
                })
            })
    }

    render() {
        const { movies, isLoading } = this.state;

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join('/')}</span>
            },            
            {
                Header: '',
                accessor: '',
                Cell: props => <ButtonWrapper><MovieUpdateButton id={props.original._id} /></ButtonWrapper>
            },
            {
                Header: '',
                accessor: '',
                Cell: props => <ButtonWrapper><MovieDeleteButton id={props.original._id} /></ButtonWrapper>
            }
        ];

        let showTable = true;
        if (!movies.length) {
            showTable = false;
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={movies}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

