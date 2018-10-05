import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class SignInForm extends Component {

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit } className='signIn-form'>
                <Field className="input" name='email' type='email' component='input' />
                <Field className="input" name='password' type='password' component='input' />
                <button className='submitButton'>Submit</button>
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

function mapStateToProps(state) {
    return { 
        initialValues: { email: 'example@gmail.com', password: '' }
    }
}

SignInForm = connect(mapStateToProps)(SignInForm);

export default SignInForm;