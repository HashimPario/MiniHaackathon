// import React, {useState} from 'react'
// import { Link, useHistory } from 'react-router-dom'
// import axios from 'axios'
// import {showErrMsg, showSuccessMsg} from '../components/notification/Notification'
// // import { use } from 'bcrypt/promises'
// import AdminHeader from '../components/adminheader'



// const initialState = {
//     name: '',
//     email: '',
//     password: '',
//     cf_password: '',
//     err: '',
//     success: ''
// }


// //validation
// const isEmpty = value => {
//     if(!value) return true
//     return false
// }

// const isEmail = email => {
//     // eslint-disable-next-line
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

// const isLength = password => {
//     if(password.length < 6) return true
//     return false
// }

// const isMatch = (password, cf_password) => {
//     if(password === cf_password) return true
//     return false
// }



// function AdminRegister() {
//     const [user, setUser] = useState(initialState)

//     const {name, email, password,cf_password, err, success} = user

//     const history = useHistory();

//     const handleChangeInput = e => {
//         const {name, value} = e.target
//         setUser({...user, [name]:value, err: '', success: ''})
//     }


//     const handleSubmit = async e => {
//         e.preventDefault()
//         if(isEmpty(name) || isEmpty(password))
//                 return setUser({...user, err: "Please fill in all fields.", success: ''})

//         if(!isEmail(email))
//             return setUser({...user, err: "Invalid emails.", success: ''})

//         if(isLength(password))
//             return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
//         if(!isMatch(password, cf_password))
//             return setUser({...user, err: "Password did not match.", success: ''})

//         try {
//             const res = await axios.post('/user/adminregister', {
//                 name, email, password
//             })

//             setUser({...user, err: '', success: res.data.msg})
//             history.push("/adminlogin")
//             window.location.href = "/adminlogin"
//         } catch (err) {
//             err.response.data.msg && 
//             setUser({...user, err: err.response.data.msg, success: ''})
//         }
//     }

//     const gotologin = () => {
//         window.location.href = "/adminlogin"
//     }

//     return (
//         <>
//            <AdminHeader/>
//            <div className='regcss'>
//         <div className="login_page">
//             <h2>Admin Register</h2>
//             {err && showErrMsg(err)}    
//             {success && showSuccessMsg(success)}

//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name</label>
//                     <input type="text" placeholder="Enter your name" id="name"
//                     value={name} name="name" onChange={handleChangeInput} />
//                 </div>

//                 <div>
//                     <label htmlFor="email">Email Address</label>
//                     <input type="text" placeholder="Enter email address" id="email"
//                     value={email} name="email" onChange={handleChangeInput} />
//                 </div>

//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" placeholder="Enter password" id="password"
//                     value={password} name="password" onChange={handleChangeInput} />
//                 </div>

//                 <div>
//                     <label htmlFor="cf_password">Confirm Password</label>
//                     <input type="password" placeholder="Confirm password" id="cf_password"
//                     value={cf_password} name="cf_password" onChange={handleChangeInput} />
//                 </div>

//                 <div className="row">
//                     <button type="submit">Register</button>
//                 </div>
//             </form>

//             {/* <p>Already an account? <Link onClick={gotologin} to="/adminlogin">Login</Link></p> */}
//         </div>
//         </div>
//         </>
//     )
// }

// export default AdminRegister
