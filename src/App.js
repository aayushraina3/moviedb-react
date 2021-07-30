import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';

export default class App extends Component {
  state = {
    //error: null,
    //searchList: [],
    searchTerm: ""
  }

  handleSearch = (searchTerm) => {
    this.setState({
      //...this.state,
      //searchList: searchResults
      searchTerm: searchTerm
    })
  }

  render() {
    console.log(this.state);

    return (
      <>
        <SearchBar onSearch={this.handleSearch} />
        <Movies searchTerm={this.state.searchTerm}/>
      </>
    )
  }
}

