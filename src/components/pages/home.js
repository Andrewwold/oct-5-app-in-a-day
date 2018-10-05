import React, { Component } from 'react';
import { NavBar } from '../navBar/navBar';
import SignIn from '../signIn';
import SignUP from '../signUp';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <NavBar />
                Home Page
                <SignIn />
                <SignUP />
            </div>
        );
    }
}

export default Home;