import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../components/notification/Notification'
import { useHistory } from 'react-router-dom'
import "./style/addproduct.css"




const initialState = {
    title: '',
    price: '',
    services:'',
    imgUrl: '',
    err: '',
    success: ''
}


function AdminPanel() {

    const history = useHistory();
    // const location = useLocation();
    const [product, setProduct] = useState(initialState)

    const { title,price,services, imgUrl, err, success } = product

    const [proId, setproId] = useState();
    const [admin, setadmin] = useState();


    // View products 
    const [userState, setUserState] = useState([]);
    useEffect(() => {
        // console.log("useEffect")
        getdata();
        dummy()

    }, []);

    const dummy = () => {
        const adminData = JSON.parse(localStorage.getItem('admin'));
        setadmin(adminData)
    }


    const getdata = async () => {

        const res = await fetch(`http://localhost:5000/user/getalldata`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });

        const data = await res.json();
        // console.log(data);
        setUserState(data);

    }


    const handleChangeInput = e => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value, err: '', success: '' })
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if (!title || !price || !services || !imgUrl)
            return setProduct({ ...product, err: "Please fill in all fields.", success: '' })

        try {
            const res = await axios.post('/user/addhotel', {
                title, price, services, imgUrl
            })
            getdata();

            setProduct({ ...product, err: '', success: res.data.msg })
        } catch (err) {
            err.response.data.msg &&
                setProduct({ ...product, err: err.response.data.msg, success: '' })
        }
    }

    const logout = () => {
        localStorage.removeItem('admin')
        history.push('/adminlogin')
        window.location.href = "/adminlogin"
    }

    //delete data
    const delProduct = async (id) => {

        try {
            const res = await axios.delete(`/user/deletedata/${id}`)
            res.json();
            setProduct({ ...product, err: '', success: res.data.msg })
            getdata();
        } catch (err) {
            
        }

        // try {
        //     const res = await fetch(`http://localhost:5000/user/deletedata/${id}`, {
        //         method: "DELETE",
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     });

        //     setProduct({ ...product, err: '', success: res.data.msg })
        //     // getdata();
        //     alert("Room Data Deleted")


        // } catch (err) {
        //     err.response.data.msg &&
        //         setProduct({ ...product, err: err.response.data.msg, success: '' })
        // }

    }

    // edit button (get data by id)
    const editproduct = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/user/getDataById/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }

            });

            const data = await res.json();
            // console.log(data);
            setProduct(data);
            setproId(id)
            // console.log(proId)

        } catch (err) {
            err.response.data.msg &&
                setProduct({ ...product, err: err.response.data.msg, success: '' })
        }
    }

    // update data 
    const updateBtn = async () => {
        try {
            // console.log(proId); 
            const res = await axios.patch(`/user/updatedata/${proId}`, {
                title, price, services, imgUrl
            })

            setProduct({ ...product, err: '', success: res.data.msg })
        } catch (err) {
            err.response.data.msg &&
                setProduct({ ...product, err: err.response.data.msg, success: '' })

        }
    }


    return (
        <div>
            <h1>Admin Panel</h1>

            <div className='logout'>
                <button className='btn btn-danger' type='button' onClick={logout}>Logout</button>
            </div>

            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <div className='add'>
                <h5>Add Room Details</h5>
                <h5>{admin}</h5>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" placeholder="Enter Product Title" id="title"
                            value={title} name="title" onChange={handleChangeInput} />
                    </div>
                    <div>
                        <label htmlFor="price">Price: </label>
                        <input type="text" placeholder="Enter Price" id="price"
                            value={price} name="price" onChange={handleChangeInput} />
                    </div>
                    <div>
                        <label htmlFor="services">Services: </label>
                        <input type="text" placeholder="Enter Services" id="services"
                            value={services} name="services" onChange={handleChangeInput} />
                    </div>
                    <div>
                        <label htmlFor="imgUrl">Image URL: </label>
                        <input type="text" placeholder="Enter Image URL" id="imgUrl"
                            value={imgUrl} name="imgUrl" onChange={handleChangeInput} />
                    </div>

                    <button className='submit' type="submit">Add </button>
                  
                </form>
                <button className='submit' onClick={updateBtn} >Update</button>
            </div>



            <div className='showdata'>
                <h3>Hotel Rooms Details</h3>
                {
                    userState.map((element, id) => {
                        return (
                            <>
                                <table className='showtable'>

                                    <tr>
                                        <td><img src={element.imgUrl} height='100px' width='100px' alt=''></img></td>
                                        <td>{element.title}</td>
                                        <td>{element.detail}</td>
                                        <td>{element.price}</td>

                                        
                                        <td><button onClick={() => editproduct(element._id)} className='btn btn-info'>Edit</button></td>
                                        <td><button onClick={() => delProduct(element._id)} className='btn btn-info'>Delete</button></td>
                                    </tr>
                                </table>


                            </>
                        )
                    })

                }

            </div>
        </div>
    )

}

export default AdminPanel