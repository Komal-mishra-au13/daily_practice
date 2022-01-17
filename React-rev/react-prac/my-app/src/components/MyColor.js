import React from 'react';


class MyColor extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            color:"red"
        };
    }
    changeColor=()=>{
        this.setState({color:"blue"});
    }
    changeScolor=()=>{
        this.setState({color:"green"})
    }
    render(){
        return(
            <div>
                <h1>My favourite color is {this.state.color}</h1>
                <button type="button" onClick={this.changeColor}>Blue</button>
                <button type="button" onClick={this.changeScolor}>Green</button>
            </div>
        );
    }

}

export default MyColor;