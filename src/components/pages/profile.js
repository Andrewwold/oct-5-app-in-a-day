import React, { Component } from 'react';
import { NavBar } from '../navBar/navBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdateProfile from '../updateProfile.js';

class Profile extends Component {
    render() {
        return (
            <div id="profileHTML">
                <NavBar />
                <div id="profileTop">
                    <div id="profilePic">
                        <img src="http://via.placeholder.com/100x100"></img>
                    </div>
                    <div id="profileContact">
                        <div id="profileTopRight">
                            <div id="ci">
                                <a>
                                    Contact Info
                                </a>
                            </div>
                            <div id="raf">
                                <a>
                                    Refer a friend
                                </a>
                            </div>
                        </div>
                        <div id="profileContactInfo">
                            <a>Phone: 000-000-0000</a>
                            <a>Email: test@</a>
                            {/* <form onSubmit={ handleSubmit } className='signIn-form'>
                                <Field name='email' type='email' component='input'/>
                                <Field name='password' type='password' component='input'/>
                                <button className='submitButton'>Submit</button>
                            </form> */}
                            <UpdateProfile />
                        </div>
                    </div>
                </div>
                <div id="profileReminders">
                    Your Schedule Reminders
                </div>
                <div id="profileTabs">
                    <div id="appointment" className="profileTab">

                        <select>
                            <option value="appointment1">Appointments</option>
                            <option value="appointment1">Appointment 1</option>
                            <option value="appointment1">Appointment 2</option>
                            <option value="appointment1">work</option>
                            <option value="appointment1">InLaws</option>
                        </select>
                        
                    </div>

                    <div id="time" className="profileTab">

                        <select>
                            <option value="appointment1">Time</option>
                            <option value="appointment1">Appointment 1</option>
                            <option value="appointment1">Appointment 2</option>
                            <option value="appointment1">work</option>
                            <option value="appointment1">InLaws</option>
                        </select>
                    </div>

                    <div id="reminderType" className="profileTab">

                        <select>
                            <option value="appointment1">Reminder</option>
                            <option value="appointment1">Appointment 1</option>
                            <option value="appointment1">Appointment 2</option>
                            <option value="appointment1">work</option>
                            <option value="appointment1">InLaws</option>
                        </select>

                    </div>
                </div>
                <div id="addReminder">
                    <FontAwesomeIcon icon="plus-circle" />
                    <a>Add reminder</a>
                </div>
            </div>
        );
    }
}

export default Profile;