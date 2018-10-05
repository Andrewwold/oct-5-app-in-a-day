const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String,
    number: Number,
    schedule: {
        appointment: String,
        time: String,
        reminder: String
    }
});

const ModelClass = mongoose.model('users', userSchema);

module.exports = ModelClass;