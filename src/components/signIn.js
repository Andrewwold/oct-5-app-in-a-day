import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import SignInForm from './signInForm';


class SignIn extends Component {

    onSignIn = (fields) => {
        console.log('trying to sign in with fields: ', fields);
        this.props.signIn(fields);
    }

    render() {
        return (
            <div>
                <SignInForm onSubmit={ this.onSignIn } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message.message
    }
}

SignIn = connect(mapStateToProps, { signIn })(SignIn);

export default SignIn; 