import { Route,Redirect } from "react-router-dom";


const PrivateRoute=({ children, ...rest }) => {
    const data = localStorage.getItem("admin");
    
    return(
        <Route 
        {...rest}
        render={()=>
            data ?(children) 
            :
            (
                <Redirect to="/adminlogin" />
                )
        }
        />
    ) 
    }




export default PrivateRoute;