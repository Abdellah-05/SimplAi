const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name:{
        type : String,
        required : true,
        min : 2,
        max : 64
    },
    last_name:{
        type : String,
        required : true,
        min : 2,
        max : 64
    },
    email:{
        type : String,
        required : true,
        min : 8,
        max : 255
    },
    password:{
        type : String,
        required : true,
        min : 6,
        max : 1024
    },
    dateRegistration:{
        type : Date,
        default : Date.now
    }
    
});

module.exports = mongoose.model('User', userSchema);