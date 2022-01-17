import React  from 'react';
import './func.css';

class ClasState extends React.Component{
    constructor(state){
        super(state);
        this.state = {color : "Pink"}
    }
    changeColor= () =>{
       this.setState({color:"purple"}) 
    }
    changeColor2= () =>{
        this.setState({color:"orange"}) 
     }
     changeColor3= () =>{
        this.setState({color:"blue"}) 
     }
     

    render(){
        return(
            <div>
                <h1>My favourite color is Pink</h1>
                <h2> What is your favourite color?</h2>
                <button type="button" className="btn1" onClick={this.changeColor}>Purple</button>
                <button type="button" className="btn2" onClick={this.changeColor2}>Orange</button>
                <button type="button" className="btn3"onClick={this.changeColor3}>Blue</button>
                <h3> Your Favourite color is : {this.state.color}</h3>
            </div>
        )
    }
}

export default ClasState;