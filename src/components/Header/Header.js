import React from 'react';
import './Header.css'

const Header = ({ isLoading }) => {
        return isLoading ? (<div></div>) : (
            <div className="header">
                <h1> Deep Breath </h1>
            </div>
        );
}
export default Header;