import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMessage, signUp } from '../../actions';

import SignUpForm from './signUpForm';

class SignUp extends Component {
  
  onSignup = (fields) => {
    console.log('trying to sign up with fields: ', fields);
    this.props.signUp(fields);
  }

  render() {
    return (
      <div className='app'>
        <SignUpForm onSubmit={this.onSignup}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    message: state.message.message
  }
}

SignUp = connect(mapStateToProps, {fetchMessage, signUp})(SignUp);

export default SignUp;