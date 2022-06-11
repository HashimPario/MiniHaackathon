import React, { useState, useEffect } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import "../screen/style/home.css"
import { useHistory, Link } from "react-router-dom";
import Header from '../components/header'
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';







const Home = (props) => {


    const [userState, setUserState] = useState([]);

    useEffect(() => {
        console.log("useEffect")
        getdata()


    }, []);



    const getdata = async () => {

        const res = await fetch(`http://localhost:5000/user/getalldata`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });

        const data = await res.json();
        console.log(data);
        setUserState(data);

    }

    const viewdetails = (id) => {
        const hotelId = id;
        localStorage.setItem('roomId', JSON.stringify(hotelId))

        window.location.href = "/viewdetails";
    }

    return (
        <>
         <Header />
            <div>
                <img src='http://res.cloudinary.com/drpucpwqu/image/upload/v1653744330/HotelManagement/a7a13a3bd19496cfd8e4bb9710bff1e8_r71ssr.jpg'
                    height="600px" alt="" width="100%" />
            </div>

        <div className="productsWrapper">
            {userState.map((product) => (
                <div className="card" key={product._id}>
                    <img src={product.imgUrl} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => viewdetails(product._id)} className="btn">
                        View Detalis
                    </button>
                </div>
            ))}
        </div>
        </>
    )


}
export default Home;