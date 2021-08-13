import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

export default class Movies extends Component {
    state = {
        isLoading: false,
        searchList: [],
        error: null
    }

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate(prevProps) {
        //console.log(this.props.searchTerm);

        if (prevProps.searchTerm !== this.props.searchTerm && this.props.searchTerm.length >= 3) {
            this.setState({ isLoading: true, searchList: [], error: null });
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        fetch(`http://www.omdbapi.com/?apikey=aea3bc9d&s=${this.props.searchTerm}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ searchList: result.Search, isLoading: false })
                },
                (error) => {
                    this.setState({ error })
                }
            )
    }

    render() {
        const { searchList } = this.state

        if (this.props.searchTerm.length >= 3) {    //searchList && - ensured searchList is not empty
            if (searchList) {
                return (
                    <Container>
                        <Row>
                            {searchList.map((search, index) => {
                                return (
                                    <Col md={3} key={index}>
                                        <MovieCard search={search} /> {/* key={index} */}
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                )
            } else {

                if (this.state.isLoading === true) {
                    return (
                        <div>
                            Loading...
                        </div>
                    )
                } else {
                    return (
                        <div>
                            No results found! Type something else.
                        </div>
                    )
                }
            }
        } else {
            return (
                // <div>Search something :)</div>
                <div></div>
            )
        }
    }
}
