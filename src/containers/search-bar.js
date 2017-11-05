import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);

        this.state = { term: '' };        
    }

    onInputChange(event) {
        this.setState({ term: event.target.value }); 
    }

    render() {
        return (
            <form className='input-group'>
                <input placeholder='Type your city' className='form-control' value={this.state.term} onChange={this.onInputChange} />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Search</button>
                </span>
            </form>
        );
    }
}