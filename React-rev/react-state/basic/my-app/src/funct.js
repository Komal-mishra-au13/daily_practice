import React, { useState } from 'react';
import './func.css';
const FunState = () =>{
    const [color, setColor] = useState()
    return(
        <div>
            <h1>My favourite color is Pink</h1>
            <h2> What is your favourite color?</h2>
            <button type="button" className="btn1" onClick={()=>setColor("purple")}>Purple</button>
            <button type="button" className="btn2" onClick={()=>setColor("orange")}>Orange</button>
            <button type="button" className="btn3"onClick={()=>setColor("blue")}>Blue</button>
            <button type="button" className="btn4"onClick={()=>setColor("red")}>Red</button>
            <h3> Your Favourite color is : {color}</h3>
        </div>
    )
}

export default FunState;