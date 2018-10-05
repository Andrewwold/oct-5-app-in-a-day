import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignInForm extends Component {

  render() {
      const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className='signIn-form'>
        <Field className="field" name='email' type='email' component='input'/>
        <Field className="field" name='password' type='password' component='input'/>
        <button className='submitButton'>Submit</button>
      </form>
    );
  }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;