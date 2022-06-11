// import { alertcenter } from 'googleapis/build/src/apis/alertcenter';
import React, { useEffect, useState } from 'react'
import SuperAdminHeader from '../../components/superadminheader'
import "../../screen/style/addproduct.css"

function HotelsAdmin() {

    const [admin, setadmin] = useState([]);
    const [userStatus, setUserStatus] = useState("");

    useEffect(() => {

        getdata();

    }, []);


    const getdata = async () => {
        const role = "admin";
        const res = await fetch('http://localhost:5000/user/getadmin', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });

        const data = await res.json();
        console.log(data);
        setadmin(data)

    }

    // const toogleBtn = (id) => {
    //    { admin.map((value,ind)=>{
    //        const tempData = value._id
    //        if(tempData === id){
    //            console.log("Id Matched",tempData,id)
    //             // const testStatus = value.status;
    //             // if(testStatus === "true")
    //             // {
    //             //     alert("status is true")
    //             // }
    //             // else{
    //             //     alert("status is false")
    //             // }
    //        }
    //    })
    //    }

    // }   

       


    return (
        <>
            <SuperAdminHeader />

            <div>
                <h2>Hotels Admin</h2>
                <div className='showdata'>

                    <table className='showtable'>
                        <tr>
                            <td><b>Name</b></td>
                            <td><b>Email</b></td>
                            <td><b>Contact</b></td>
                            <td><b>Status</b></td>


                        </tr>
                    </table>
                    {
                        admin.map((element, id) => {
                            return (
                                <>
                                    <table className='showtable'>

                                        <tr>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>{element.contact}</td>
                                            {/* <td>{element.status} <label class="switch">
                                                <input type="checkbox" onClick={() => toogleBtn(element._id)} />
                                                <span class="slider round"></span>  
                                            </label></td> */}
                                        </tr>
                                    </table>


                                </>
                            )
                        })

                    }

                </div>
            </div>
        </>

    )
}

export default HotelsAdmin