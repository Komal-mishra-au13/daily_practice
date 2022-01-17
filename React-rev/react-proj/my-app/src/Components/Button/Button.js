import { Component } from 'react';
import './button.css';

class Button extends Component{
    render(){
        const {type,title,clickevent } = this.props 
        return (
            <div>
                <button onClick={clickevent} className ={`btn ${type}`}>{title}</button>
            </div>
        )
    }
}

export default Button;