import React, {useEffect, useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../components/notification/Notification'
import Header from '../components/header'


const initialState = {
    email: '',
    password: '',
    err:'',
    success:''
}


function Login() {
    const [user,setUser] = useState(initialState)
    const history = useHistory();

    useEffect(()=>{

        
        // localStorage.getItem('firstLogin')
        // history.push('/addproduct')
        // window.location.href = "/addproduct";

    },[])

    const {email, password, err, success} = user

    const handleChangeInput = e =>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }

    const handleSubmit =async e =>{
        e.preventDefault()
        try{
            const res = await axios.post('/user/login', {email, password})
            // console.log(res)
            setUser({...user, err: '', success: res.data.msg})

            localStorage.setItem('userLogin',true)
            history.push('/')
            window.location.href = "/";


        }catch(err){
            err.response.data.msg &&
            setUser({...user, err: err.response.data.msg, success:''})
        }

    }

    return (
       <>
       <Header/>
        <div className='login_page'>
            <h2>Customer Login</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}>

                <div>
                <label htmlFor='email'>Email Address</label>
                <input type="text" placeholder='Enter email address' id='email' value={email} name="email"
                 onChange={handleChangeInput} />
                </div>

                <div>
                <label htmlFor='password'>Password</label>
                <input type="text" placeholder='Enter your password' id='password' value={password} name="password"
                onChange={handleChangeInput}/>
                </div>

                <div className='row'>
                <button type='submit'>Login</button>
                <Link to="/forgot_password">Forgot your password?</Link>
                </div>
            </form>
        </div>
        </>
    )
}



export default Login