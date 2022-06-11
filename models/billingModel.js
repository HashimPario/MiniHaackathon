const mongoose = require('mongoose')

const billingSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: [true, "Please enter your name:"] 
    },
    nic: {
        type: String,
        required: [true, "Please enter your nic :"]
    },
    contact: {
        type: String,
        required: [true, "Please enter number:"],
        
    },
   
    
}
   )

module.exports = mongoose.model("Billing", billingSchema )