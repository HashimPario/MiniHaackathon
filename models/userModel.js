const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name:"],
        trim: true 
    },
    
    email: {
        type: String,
        required: [true, "Please enter your email:"],
        trim: true,
        unique: true 
    },
    password: {
        type: String,
        required: [true, "Please enter your password:"],
        
    },

    contact: {
        type: String,
        required: [true, "Please enter your Number:"],
        
    },

    role: {
        type: String,
        required: [true, "Please enter your role:"],
    },

    status: {
        type: String,
        default: "false"
    },

    avatar: {
        type: String,
        default: "https://res.cloudinary.com/drpucpwqu/image/upload/v1652713900/avatar/icon_dj2p84.png"
    }

},
    {
        timestamps: true
    
    
})

module.exports = mongoose.model("Users", userSchema )