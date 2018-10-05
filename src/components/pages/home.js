import React, { Component } from 'react';
import { NavBar } from '../navBar/navBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faPlusCircle);

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