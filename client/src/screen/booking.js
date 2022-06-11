import React,{useEffect, useState} from "react";
import axios from 'axios'
import "../screen/style/booking.css"
import Header from '../components/header'

const initialState = {
    title: '',
    price: '',
    services:'',
    imgUrl: ''
}

function Booking (){

    const [rId,setrId] = useState("") 
    const [viewId,setViewId] = useState(initialState) 
    const { title,price,services, imgUrl} = viewId
    const [user,setUser] = useState("")
  
   

    useEffect(() => {
       
        roomId()


    }, []);

    useEffect(()=>{
if(rId){
    getView()
}
    },[rId])
    
    const roomId = () => {
       
        const hotelRoomId = JSON.parse(localStorage.getItem('roomId'));
        // const uniqueId = hotelRoomId;
        setrId(hotelRoomId)
        console.log(hotelRoomId)
       

        
    }


    const getView = async () => {
        try {
            const res = await fetch(`http://localhost:5000/user/getDataById/${rId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }

            });

            const data = await res.json();
            // console.log(data);
            setViewId(data)
            // console.log(proId)

        } catch (err) {
            
        }
    }

    const {uname,nic,address,contact,persons,days} = user
    
    const handleChangeInput = e =>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }

    const handleSubmit =async e =>{
        const data = localStorage.getItem("userLogin")
        if(data){
        e.preventDefault()
        try{
            const res = await axios.post('/user/billing', {uname,nic,address,contact,persons,days})
         
            alert("Room booked Allah hafiz")
            window.location.href = "/payment"



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
        <div><h2>Booking Details</h2></div>
        <div className="container">
        <div className="div2">
        <img src={imgUrl} height="400px" width="500px" />
    </div>
    
    <div className="div1">
        <h5>{title}</h5>
        <li>PKR: {price}</li>
        <li>Services: {services}</li>
    </div>
   
   </div>

        

        <div className="booking">
        <h4>Booking Form</h4>
        <form onSubmit={handleSubmit}>

                <div>
                <label>Full Name: </label>
                <input type="text" placeholder='Enter your name' onChange={handleChangeInput} id="uname" name="uname" value={uname}
                  />
                </div>

                <div>
                <label>CNIC</label>
                <input type="text" placeholder='Enter your CNIC' onChange={handleChangeInput} id="nic" name="nic" value={nic}
                />
                </div>

                <div>
                <label>Address</label>
                <input type="text" placeholder='Enter your Address' onChange={handleChangeInput} id="address" name="address" value={address}
                />
                </div>

                <div>
                <label>Number</label>
                <input type="text" placeholder='Enter your Contact Number' onChange={handleChangeInput} id="contact" name="contact" value={contact}
                />
                </div>

                <div>
                <label>No. of Persons</label>
                <input type="text" placeholder='Enter No. of Persons' onChange={handleChangeInput} id="persons" name="persons" value={persons}
                />
                </div>  

                
                <div>
                <label>No. Of Days To Stay</label>
                <input type="text" placeholder='Enter No. Of Days To Stay' onChange={handleChangeInput} id="days" name="days" value={days}
                />
                </div>   


                <div className='row'>
                <button className="btn-Book" type='submit'>Checkout</button> 
               
                </div>
            </form>
        </div>
        
        </>
    )
}


export default Booking