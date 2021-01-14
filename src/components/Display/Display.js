import React, { Component } from 'react';
import Details from '../Details/Details';
import './Display.css';

class Display extends Component {
    render() {
        return (
            <div className="display-container">
                <Details />
            </div>
        );
    }
}

export default Display;