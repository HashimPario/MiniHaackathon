import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../screen/Login'
import Register from '../screen/Register'
import Home from '../screen/home'
import PrivateRoute from './privateRoute';
import AdminLogin from "../screen/superAdmin/adminLogin";
import About from '../screen/about'
import Contact from '../screen/contact'
import AdminPanel from "../screen/adminPanel";
import ViewDetails from "../screen/viewdetails";
import Booking from "../screen/booking";
import Payment from "../screen/payment";
import SuperAdmin from "../screen/superAdmin/superadminpanel";
import HotelsAdmin from "../screen/superAdmin/hotelsadmin";
import HotelsServices from "../screen/superAdmin/hotelsservices";
import UserDetails from "../screen/superAdmin/userdetails";



function AppRoute() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home /> 
                </Route>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/viewdetails">
                    <ViewDetails />
                </Route>
                <Route path="/booking">
                    <Booking />
                </Route>

                <Route path="/payment">
                    <Payment />
                </Route>

                <Route path="/about">
                    <About />
                </Route>
                
                <Route path="/contact">
                    <Contact />
                </Route>
                
                <PrivateRoute path="/adminpanel">
                    <AdminPanel />
                </PrivateRoute>
                

                {/* <Route path="/adminregister">
                    <AdminRegister />
                </Route> */}

                {/* Super Admin Routes */}

                
                <Route path="/adminlogin">
                    <AdminLogin />
                </Route>

                <Route path="/superadminpanel">
                    <SuperAdmin />
                </Route>

                <Route path="/hotelsadmin">
                    <HotelsAdmin />
                </Route>
                <Route path="/hotelsservices">
                    <HotelsServices />
                </Route>
                <Route path="/userdetails">
                    <UserDetails/>
                </Route>


               


            </Switch>
        </Router>
    )
}



export default AppRoute