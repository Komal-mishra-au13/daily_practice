import React , { useState } from 'react';

function FavouriteColor(){
    const [ color, setColor] = useState("red");
    return(
        <div>
          <h1>My fav color is {color}</h1>
          <button type="button" onClick={()=>setColor("blue")}>Blue</button>
          <button type="button" onClick={()=>setColor("red")}>Red</button>
          <button type="button" onClick={()=>setColor("green")}>Green</button>
          <button type="button" onClick={()=>setColor("pink")}>Pink</button>
        </div>
    );
}

export default FavouriteColor;