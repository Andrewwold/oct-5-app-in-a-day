import React, { Component } from 'react';
// import { sid, authToken } from '../../secrets.js';
import { connect } from 'react-redux';
import * as actions from '../actions';
// const twilio = require("twilio");
// const client = new twilio(sid, authToken);

class SendReminder extends Component {
    onClick = () => {
        this.props.sendAlert()
    }

    render() {
        return (
            <div>
                <button onClick={ this.onClick }>
                    Send Reminder
                </button>
            </div>
        );
    }
}

SendReminder = connect(null, actions)(SendReminder);
export default SendReminder;