import React, { Component } from 'react';
import { NavBar } from '../navBar/navBar';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <NavBar />
                Home Page
            </div>
        );
    }
}

export default Home;