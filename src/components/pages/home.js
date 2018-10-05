import React, { Component } from 'react';
import { NavBar } from '../navBar/navBar';
import SignIn from '../signIn';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <NavBar />
                Home Page
                <SignIn />
            </div>
        );
    }
}

export default Home;