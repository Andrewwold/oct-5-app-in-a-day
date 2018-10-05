import React, { Component } from 'react';
import { NavBar } from '../navBar/navBar';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faPlusCircle);

import SignIn from '../signIn/signIn';
import SignUp from '../signUp/signUp';

import logo from '../../../static/assets/logo (1).png';



class Home extends Component {
    render() {
        return (
            <div className="home">

                <NavBar />
                Home Page
                <SignIn />
                <SignUp />

                <div className="heading">
                    <img src={logo} width="400vw"></img>
                    <div className="buttons">
                        <div className="signin">
                            <p>Sign In:</p>
                            <SignIn />
                        </div>

                        <div className="signup">
                            <p>Sign Up:</p>
                        </div>
                    </div>
                    
                </div>

                <div className="tagline">
                    <h3>Maximize the day...</h3>
                    <h4 className="secondH3">for morning misers.</h4>
                </div>

                

                <div className="footer">
                    <p> Made with love, by Bottega cohort July 16, 2018</p>
                </div>

                

            </div>
        );
    }
}

export default Home;