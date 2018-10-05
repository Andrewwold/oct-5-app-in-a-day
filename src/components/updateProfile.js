import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../actions';
import UpdateProfileForm from './updatePF';


class UpdateProfile extends Component {

    onUpdateProfile = (fields) => {
        console.log('trying to sign in with fields: ', fields);
        this.props.updateProfile(fields);
    }

    render() {
        return (
            <div>
                <UpdateProfileForm onSubmit={ this.onUpdateProfile } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message.message
    }
}

UpdateProfile = connect(mapStateToProps, { updateProfile })(UpdateProfile);

export default UpdateProfile; 