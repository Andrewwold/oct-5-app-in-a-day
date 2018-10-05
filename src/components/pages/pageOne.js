import React, { Component } from 'react';
import { NavBar } from '../navBar/navBar';

class PageOne extends Component {
    render() {
        return (
            <div className="page-one">
                <NavBar />
                Page One
            </div>
        );
    }
}

export default PageOne;