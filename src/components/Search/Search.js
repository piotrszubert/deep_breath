import React from 'react';
import './Search.css';

const Search = ({ isLoading, handleSearch }) => {
    return isLoading ? (<div></div>) : (
        <div className="search">
            <form>
            <input onChange={handleSearch} className="search-input" type="text" placeholder="City" />
            </form>
        </div>
    )
}
export default Search;