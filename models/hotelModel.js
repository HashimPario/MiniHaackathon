const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter title:"] 
    },
    price: {
        type: String,
        required: [true, "Please enter price:"]
    },
    services: {
        type: String,
        required: [true, "Please enter services:"],
        
    },
    imgUrl: {
        type: String,
        required: [true, "Please enter image url:"]
    },
    
},
    {
        timestamps: true
    
    
})

module.exports = mongoose.model("Hotels", hotelSchema )