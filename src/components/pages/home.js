import React, { Component } from 'react';
import { NavBar } from '../navBar/navBar';
import SignIn from '../signIn/signIn';
import SignUp from '../signUp/signUp';
import SendReminder from '../sendReminder';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <NavBar />
                Home Page
                <SignIn />
                <SignUp />
                <SendReminder />
            </div>
        );
    }
}

export default Home;