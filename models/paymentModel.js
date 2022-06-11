const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    bname: {
        type: String,
        required: [true, "Please Enter Your Bank Name:"] 
    },
    card: {
        type: String,
        required: [true, "Please Enter Your Card No. :"]
    },
    code: {
        type: String,
        required: [true, "Please Enter Your Card Code: "],
        
    },
    expiry: {
        type: String,
        required: [true, "Please Enter Your Card Expiry: "],
        
    },
   
    
}
   )

module.exports = mongoose.model("Payment", paymentSchema )