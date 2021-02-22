import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="search-container">
            <form>
            <input className="search-input" type="text" placeholder="City" />
            </form>
        </div>
    )
}
export default Search;