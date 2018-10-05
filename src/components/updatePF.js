import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class UpdateProfileForm extends Component {

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit } className='UpdateProfile-form'>
                <Field name='email' type='email' component='input' />
                <Field name='password' type='password' component='input' />
                <Field name='number' type='number' component='input' />
                <Field name='appointment' type='appointment' component='input' />
                <Field name='time' type='time' component='input' />
                <Field name='reminder' type='reminder' component='input' />
                <button className='submitButton'>Submit</button>
            </form>
        );
    }
}

UpdateProfileForm = reduxForm({
    form: 'UpdateProfileForm'
})(UpdateProfileForm);

export default UpdateProfileForm;