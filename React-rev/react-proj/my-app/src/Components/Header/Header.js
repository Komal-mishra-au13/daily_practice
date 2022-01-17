import React from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import logo from '../Header/image/logo2.png';
import './Header.css';


const Header = ()=>{
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-header"> KOM'S TECHNOLOGY</p>
            <nav className="navbar">
               <Login />  
               <Signup />
            </nav>
        </header>
    )
}

export default Header;