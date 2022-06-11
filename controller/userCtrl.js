const Users = require('../models/userModel')
const Hotels = require('../models/hotelModel')
const Billing = require('../models/billingModel')
const Payment = require('../models/paymentModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const req = require('express/lib/request')
const Admin = require('../models/adminModel')



const {CLIENT_URL} = process.env

const userCtrl = {

     // Super Admin login 
     adminlogin: async(req,res) =>{
        try {
            const {email,password} = req.body
            const user = await Admin.findOne({email}) 
           
            if(!user) return res.status(400).json({msg: "Email not exist"})

            const isMatch = await bcrypt.compare(password, user.password)
           
            if(!isMatch) return res.status(400).json({msg: "Password is incorrect"})

            res.json({msg: "Login Successfull"})
            
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
            
        }

    },

    // Admin / User Register 
    register: async(req,res) => {
        try{
        //    console.log(req.body)
            const {name, email, password, contact, role} = req.body

            if(!name || !email || !password || !contact || !role)
            return res.status(400).json({msg: "Please fill all the fields"})

            // regex for validate email
            if(!validateEmail(email))
            return res.status(400).json({msg: "Invalid email"})

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg: "This email already exist"})

            if(password.length < 6)
            return res.status(400).json({msg: "Password must be atleast 6 characters"})


            const passwordHash = await bcrypt.hash(password,12)
            // console.log({password,passwordHash})

            // const newUser = {
            //     name, email, password: passwordHash
            // }
            // console.log(newUser)
            const okUser = new Users({
                name, email, password: passwordHash, contact, role
            })
            await okUser.save();
            // console.log(req.body)
            res.json({msg: "Registered Successfully, Your Account will be activated in within 24 hours and you will be notified via email, If not then kindly contact at this email:admin@hotelmanagement.com.pk"})

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },

    // Admin / User login code 
    login: async(req,res) =>{
        try {
            const {email,password} = req.body

            const user = await Users.findOne({email}) 
            // console.log(user)
            if(!user) return res.status(400).json({msg: "Email Not Found"})
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Password is incorrect"})

            if(user.status === "true") {
            res.json({msg: "Login Successfull"})
            }
            else{
                return res.status(400).json({msg: "Account Not Activated. Try again after 24 hours or contact at admin@hotelmanagement.com.pk"})
            }
            
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
            
        }

    },
   
    // Get Admins
    getadmin: async(req,res) => {
        try {
            const role = "admin"
            const findProduct = await Users.find({role})
            res.json(findProduct)
            console.log(findProduct)
            
        } catch (error) {
            
            return res.status(500).json({msg: err.message})
        }
    },

    // // Add Hotel
    addhotel: async(req,res) => {
        try{
           console.log(req.body)
            const {title,price,services,imgUrl} = req.body

            if(!title || !price || !services || !imgUrl)
            return res.status(400).json({msg: "Please fill all the fields"})
           
            const okProduct = new Hotels({
                title, price, services, imgUrl
            })
            await okProduct.save();

            console.log(req.body)
            res.json({msg: "Hotel Room Added Successfully"})

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },

    // //get hotel all data 
    getalldata: async(req,res) => {
        const allpost = await Hotels.find();
        res.json(allpost);
     },

     //delete hotel data 
     deletedata: async(req,res)=>{
        try {
           
            const del = await Hotels.findByIdAndDelete(req.params._id)
            res.json({msg: "Room Data deleted"})
    
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
     },

     
    // // //update hotel data 
    updatedata: async(req,res) => {
        try {
            const {title,price,services,imgUrl} = req.body
            await Hotels.findByIdAndUpdate(req.params._id,{
                title, price, services, imgUrl
            })
            res.json({msg: "Update succuss!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getDataById: async(req,res) => {
        try {
            const findProduct = await Hotels.findById(req.params._id)
            res.json(findProduct)
            
        } catch (error) {
            
            return res.status(500).json({msg: err.message})
        }
    },

       // // checkout booking billing
       billing: async(req,res) => {
        try{
           console.log(req.body)
            const {uname,nic,contact} = req.body

            if(!uname || !nic || !contact)
            return res.status(400).json({msg: "Please fill all the fields"})
           
            const okProduct = new Billing({
                uname, nic, contact
            })
            await okProduct.save();

            console.log(req.body)
            res.json({msg: "Room booked Successfully"})

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },

    payment: async(req,res) => {
        try{
           console.log(req.body)
            const {bname,card,code,expiry} = req.body

            if(!bname || !card || !code || !expiry)
            return res.status(400).json({msg: "Please fill all the fields"})
           
            const okProduct = new Payment({
                bname, card, code, expiry
            })

            await okProduct.save();

            console.log(req.body)
            res.json({msg: "Payment Details Saved"})

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },

    // //get user info 
    // getUserInfo: async(req,res) => {
    //     try {
    //         const user = await Users.findById(req.user.id).select('-password')
    //         res.json(user)
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // },

    // // get users all info 
    // getUsersAllInfo: async(req,res) => {
    //     try {
    //         // console.log(req.user)
    //         const users = await Users.find().select('-password')
    //         // res.json(users)  
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // },

    // // logout 
    // logout: async(req,res) => {
    //     try {
    //         return res.json({msg: "Logged out"})
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // },

    // //update user 
    // updateUser: async(req,res) => {
    //     try {
    //         const {name,avatar} = req.body
    //         await Users.findOneAndUpdate({_id:req.user.id},{
    //             name, avatar
    //         })
    //         res.json({msg: "Update succuss!"})
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // },

    // // delete user 
    // deleteUser: async(req,res) => {
    //     try {
    //         await Users.findOneAndDelete(req.params.id)
    //         res.json({msg: "Deleted!"})
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
            
    //     }
    // }

}




function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    // const createActivationToken = (payload) => {
    //     return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
    // }
 
    // const createAccessToken = (payload) => {
    //     return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
    // }

    // const createRefreshToken = (payload) => {
    //     return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
    // }

module.exports = userCtrl