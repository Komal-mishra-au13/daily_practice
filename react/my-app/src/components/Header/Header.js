import React from 'react';
import Login from '../Login';
import Signup from '../Signup';

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