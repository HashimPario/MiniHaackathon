import React, {useEffect, useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../components/notification/Notification'
import AdminHeader from '../../components/adminheader'




const initialState = {
    email: '',
    password: '',
    err:'',
    success:''
}


function AdminLogin() {
    const [user,setUser] = useState(initialState)
    const history = useHistory();

    // useEffect(()=>{

        
    //     // localStorage.getItem('firstLogin')
    //     // history.push('/addproduct')
    //     // window.location.href = "/addproduct";

    // },[])

    const {email, password, err, success} = user

    const handleChangeInput = e =>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }

    const handleSubmit =async e =>{
        e.preventDefault()
        try{
            const res = await axios.post('/user/adminlogin', {email, password})
            console.log(res)
            setUser({...user, err: '', success: res.data.msg})

            localStorage.setItem('admin',JSON.stringify(email))
            history.push('/superadminpanel')
            window.location.href = "/superadminpanel";


        }catch(err){
            err.response.data.msg &&
            setUser({...user, err: err.response.data.msg, success:''})
        }

    }


    return (
        <>
        <AdminHeader/>
        <div className='logcss'>
        <div className='login_page'>
            <h2>Admin Login</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}>

                <div>
                <label className='lab' htmlFor='email'>Email Address</label>
                <input type="text" placeholder='Enter email address' id='email' value={email} name="email"
                 onChange={handleChangeInput} />
                </div>

                <div>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder='Enter your password' id='password' value={password} name="password"
                onChange={handleChangeInput}/>
                </div>

                <div className='row'>
                <button type='submit'>Login</button> 
               
                </div>
            </form>
        </div>
        </div>
        </>
    )
}



export default AdminLogin