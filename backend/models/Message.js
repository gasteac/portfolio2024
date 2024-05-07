const {Schema, model} = require('mongoose');
const MessageSchema = Schema({
    newMessage:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: false
    }
});

module.exports = model('Message', MessageSchema)