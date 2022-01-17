import React from 'react';
import logo from '../Header/image/main-img.jpg';
import './Header.css';


const Header = ()=>{
    return(
        <div >
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-header"> Welcome to Lessee</h1>
            </header>
        </div>
    )
}

export default Header;