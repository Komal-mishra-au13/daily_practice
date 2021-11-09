import "./App.css";
import React from 'react';
import logo from './image/logo2.png';

const Header = () =>{     // arrow function 
    return(
        <div>
            <Head />
            <h3>This is heading</h3>
            <Form />
        </div>
    );
}

const Head = () =>{
  return(
    <div className="heading">
      <h1>
      <img  id ="logo" src={logo} alt="logo" />
      KOM'S Technologies</h1>;
    </div>
  )
}

function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked button.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Login</button>
        <button type="submit">Signup</button>
      </form>
    );
  }
export default Header;
    

    
 
 