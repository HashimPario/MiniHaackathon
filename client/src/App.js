import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../src/components/header'



import AppRoute from './router/appRoute'


function App() {
  return (
   
    <Router>
    <div className="App">

     <AppRoute/>
     {/* <Header/> */}
    
    </div>
    </Router>
 
  );
}

export default App;
