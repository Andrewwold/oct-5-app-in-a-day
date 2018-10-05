import React, { Component } from 'react';
import { NavBar } from '../navBar/navBar';
import SignIn from '../signIn/signIn';
import SignUp from '../signUp/signUp';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <NavBar />
                Home Page
                <SignIn />
                <SignUp />
            </div>
        );
    }
}

export default Home;