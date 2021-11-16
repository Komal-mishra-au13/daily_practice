import React from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const Header = ()=>{
    return(
        <header className="App-header">
            <nav>
                <Login /> <Signup />
            </nav>
        </header>
    )
}

export default Header;