import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

export default class App extends Component {
  state = {
    error: null,
    searchList: [],
    searchTerm: ""
  }

  handleSearch = (searchResults) => {
    this.setState({
      ...this.state,
      //searchList: searchResults
      searchTerm: searchResults
    })
  }

  render() {
    console.log(this.state);
    
    return (
      <>
        <SearchBar onSearch={this.handleSearch} />
        <MovieCard />
      </>
    )
  }
}

