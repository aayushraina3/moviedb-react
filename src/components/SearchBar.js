import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default class SearchBar extends Component {
    handleInputChange = (event) => {
        this.props.onSearch(event.target.value)
    }

    render() {
        return (
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-bar"
                    name="SearchVal"
                    onChange={this.handleInputChange}
                />
                {/* <Button variant="outline-secondary" id="button-addon2">
                    Button
                </Button> */}
            </InputGroup>
        )
    }
}
