import { Component } from 'react';
import './button.css';

class Button extends Component{
    render(){
        // const {type,title,clickevent } = this.props 
        return (
            <div>
                <button onClick={this.props.clickevent} className ={`btn ${this.props.type}`}>{this.props.title}</button>
            </div>
        )
    }
}

export default Button;