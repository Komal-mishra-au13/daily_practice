import React from 'react';


class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div>
                <h1>My name is {this.props.name}</h1>
                <h2>I live in {this.props.city}</h2>
                <h3>I have completed {this.props.course}</h3>
            </div>
        )
    }
}

export default ClassComponent;