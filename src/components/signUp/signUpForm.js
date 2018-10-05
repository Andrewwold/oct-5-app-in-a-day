import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

class SignUpForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className='signup-form'>
                <Field className="input" name='email' type='email' component='input'/>
                <Field className="input" name='password' type='password' component='input'/>
                <button className="submitButton">submit</button>
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignupForm'
})(SignUpForm);

export default SignUpForm;