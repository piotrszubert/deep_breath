import React from 'react';
import './Search.css';
function Search() {
    return (
        <div className="search-container">
            <input type="text" placeholder="City"/>
            <button className="search-btn" type="submit">Search </button>
        </div>
    )
}

export default Search;