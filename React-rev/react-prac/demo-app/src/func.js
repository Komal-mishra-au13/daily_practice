import React from 'react';

const FunctionComponent = (props)=>{
    
    return(
        <div>
            <h1>My name is {props.name}</h1>
            <h2>I live in {props.city}</h2>
            <h3>I have completed {props.course}</h3>
        </div>
    )
}

export default FunctionComponent;