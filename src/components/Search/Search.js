import React, { Component }from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <div className="search-container">
            <input className="search-input" type="text" placeholder="City"/>
            <button className="search-btn" type="submit">Search </button>
        </div>
        )
    }
}
export default Search;