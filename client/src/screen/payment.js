import React,{useEffect, useState} from "react";
import axios from 'axios'
import "../screen/style/payment.css"
import Header from '../components/header'


function Payment(){

    const [payment,setPayment] = useState("")

    const {bname,card,code,expiry} = payment

    const handleChange = e =>{
        const {name,value} = e.target
        setPayment({...payment,[name]:value})
    }
  
    
    const handlePaymentSubmit =async e =>{
        const data = localStorage.getItem("userLogin")
        if(data){
        e.preventDefault()
        try{
            const res = await axios.post('/user/payment', {bname,card,code,expiry})
         
            alert("Payment Done, Your Room is booked")



        }catch(err){
           
        }
    }
    else{
        alert("You are not logged in")
        
    }

    }

    return(
        <>
        <Header/>
        
        <div className="payment">
        <h4>Payment Details</h4>
        <form onSubmit={handlePaymentSubmit}>

                <div>
                <label>Bank Name: </label>
                <input type="text" placeholder='Enter Your Bank Name' onChange={handleChange} id="bname" name="bname" value={bname}
                  />
                </div>

                <div>
                <label>Credit/Debit Card No: </label>
                <input type="text" placeholder='Enter Your Credit/Debit Card No.' onChange={handleChange} id="card" name="card" value={card}
                />
                </div>

                <div>
                <label>Card Code: </label>
                <input type="text" placeholder='Enter Your Card Code' onChange={handleChange} id="code" name="code" value={code}
                />
                </div>

                <div>
                <label>Card Expiry Date: </label>
                <input type="text" placeholder='Enter Your Card Expiry Date ' onChange={handleChange} id="expiry" name="expiry" value={expiry}
                />
                </div> 
    
                <div className='row'>
                <button className="btn-Book" type='submit'>Done</button> 
               
                </div>
            </form>
        </div>
        </>
    )
}

export default Payment;