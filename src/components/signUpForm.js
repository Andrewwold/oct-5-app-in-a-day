import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

class SignUpForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className='signup-form'>
                <Field name='email' type='email' component='input'/>
                <Field name='password' type='password' component='input'/>
                <button>submit</button>
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignupForm'
})(SignUpForm);

export default SignUpForm;