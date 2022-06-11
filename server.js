require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles:true
}))


// Routes
app.use('/user', require('./routes/userRouter'))

// connect to mongodb
// const URI = process.env.MONGODB_URL

// mongoose.connect(URI,{
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, err => {
//     if(err) throw err;
//     console.log("connected to mongodb")
// })


mongoose.connect('mongodb+srv://hashim:hashim123@cluster0.iuzyi.mongodb.net/mernecommerce?retryWrites=true&w=majority',{
    
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,    

}).then(()=>{
    console.log(`connected to mongodb`)
       
}).catch((err)=>{
    console.log(`connection not Successful`)
})





app.use('/',(req,res,next)=>{
    res.json({msg: "Hello Ecommerce"})
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})