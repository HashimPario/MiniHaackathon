import React,{useEffect, useState} from "react";
import "../screen/style/viewdetails.css"
import Header from '../components/header'


const initialState = {
    title: '',
    price: '',
    services:'',
    imgUrl: ''
}

function ViewDetails (){

    const [rId,setrId] = useState("") 
    const [viewId,setViewId] = useState(initialState) 
    const { title,price,services, imgUrl} = viewId
   

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
  

    const booking = () => {
        window.location.href = "/booking"
    }

    return(
        <>
        <Header/>
        <div className="view">
        <div><h2>Room Details</h2></div>

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

        <button className="btn-Book" onClick={booking}>Book Now</button>

        
        </div>
        </>
    )
}


export default ViewDetails