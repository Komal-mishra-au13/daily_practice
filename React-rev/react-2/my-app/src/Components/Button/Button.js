import { Component } from 'react';

class Button extends Component{
    render(){
        console.log(this);
        return (
            <div>
                <button>Click me</button>
            </div>
        )
    }
}

export default Button;