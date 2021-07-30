import React, { Component } from 'react';
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

    displayMovies = () => {
        if (this.state.searchList) {
            this.state.searchList.forEach(info => {
                <MovieCard info={info} />
            })
        }
    }

    render() {
        //console.log(this.props.searchTerm)
        console.log(this.state)

        return (
            <div>
                {this.displayMovies()}
            </div>
        )
    }
}
