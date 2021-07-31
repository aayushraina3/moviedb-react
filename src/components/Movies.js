import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

export default class Movies extends Component {
    state = {
        searchList: [],
        error: null
    }

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate(prevProps) {
        //console.log(this.props.searchTerm);

        if (prevProps.searchTerm !== this.props.searchTerm && this.props.searchTerm.length >= 3) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        fetch(`http://www.omdbapi.com/?apikey=aea3bc9d&s=${this.props.searchTerm}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ searchList: result.Search })
                },
                (error) => {
                    this.setState({ error })
                }
            )
    }

    render() {
        const { searchList } = this.state

        if (searchList && this.props.searchTerm.length >= 3) {
            return (
                <Container>
                    <Row>
                        {searchList.map((search, index) => {
                            return (
                                <Col>
                                    <MovieCard key={index} search={search} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
