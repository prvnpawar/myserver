"use strict";
const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    
    firstName: {type: String, default: '', required: true},
    lastName: {type: String, default: '', required: true},
    email: {type: String, required: true},
    address: {type: String, default: '', required: true},
    contact: {type: String, default: '', required: true},
    password: {type: String, default: '',required: true}
},
    {
        timestamps: true
    }
);


const users = mongoose.model('users', usersSchema)

module.exports = users;