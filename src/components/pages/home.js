import React, { Component } from 'react';
import { NavBar } from '../navBar/navBar';
import SignIn from '../signIn';
import logo from '../../../static/assets/logo (1).png';


class Home extends Component {
    render() {
        return (
            <div className="home">
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