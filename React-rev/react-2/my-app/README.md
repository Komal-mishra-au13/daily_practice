###  * In this section we see what is props and how can we use it. Also we learn how to add event handler props as a function and how to call it . 

## Props - {props} are short for properties and they are used to send data between components. Props are basically a kind of object or global variable. Props are unidirectional (top to bottom)

In Button.js we do the console.log(this);

### first we will see {props} for class based component :

* I . first to demonstrate {props} - App.js 

I made a fragment component which will work as the parent component .Inside that I made 3 children button -

<Fragment>
    <Content />
    <Header />
    <Footer />
    <Button title="Login" type="success" link="/login" />
    <Button title="Signup" type="warning" link="/Signup" />
    <Button title="Logout" type="error" link="Logout" />
</Fragment>

* II.I made a Component folder in that I made 
Component -----> Button folder 

Button folder -------> i. Button.js         ii.button.css

* III. In Button.js we will pass {props}  -- <button >{this.props.title}</button>

#### we use title property so that button can have the name as Login, Signup and Logout . 

 * III Now we will define a class called btn in react - by using "className"

<button className ="btn ">{this.props.title}</button>

And also in button .css - we define a class called button and add properties. 

#####  If we want to use more property from btn class so we can write using template literal or we can concatenate the properties.

<button className ={`btn ${this.props.type}`}>{this.props.title}</button>

* Here the button will color as given the type in App.js and button.css . 


IV . Now if we want after clicking Login button it will open another page . To acheive that we can add "link" props
 in App.js. as shown above . 


#### We can also pass a function as props in App.js . we can do it in two ways - 

1. define a function at top and use the name inside props -

    function App() {

    const  clickHandler =(e) =>{
        console.log(e);
    }
      
    return (
        <Fragment>
            <Content />
            <Header />
            <Footer />
            <Button title="Login" type="success" link="/login" clickevent = {clickHandler}/>
            <Button title="Signup" type="warning" link="/Signup" clickevent = {clickHandler} />
            <Button title="Logout" type="error" link="Logout" clickevent = {clickHandler} />
        </Fragment>
    );
    }

    export default App;


2. define a annonymous function directly in props
    function App() {

    return (
        <Fragment>
            <Content />
            <Header />
            <Footer />
            <Button title="Login" type="success" link="/login" 
            clickevent = {(e)=>{
                console.log(e)
            }} />
            <Button title="Signup" type="warning" link="/Signup" 
            clickevent = {clickevent = {(e)=>{
                console.log(e)
            }} />
            <Button title="Logout" type="error" link="Logout" 
            clickevent = {clickevent = {(e)=>{
                console.log(e)
            }} />
        </Fragment>
    );
    }

    export default App;


#### To use event function or call function we can Button.js - 

    we have to use clickevent props as well that we can do either -

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

##### or 
 class Button extends Component{
    render(){
    
        return (
            <div>
                <button onClick={this.props.clickevent} className ={`btn ${this.props.type}`}>{this.props.title}</button>
            </div>
        )
    }
}

export default Button;

* Here we didn't define this.props seperately . 



### We can also add more than one event handler in App.js or any file 

    function App() {

        const  login =(e) =>{
            console.log('[login]'e);
        }
        const  signup =(e) =>{
            console.log('[signup]'e);
        }
        const  logout =(e) =>{
            console.log('[logout]'e);
        }
        return (
            <Fragment>
                <Content />
                <Header />
                <Footer />
                <Button title="Login" type="success" link="/login" clickevent = {login}/>
                <Button title="Signup" type="warning" link="/Signup" clickevent = {signup} />
                <Button title="Logout" type="error" link="Logout" clickevent = {logout} />
            </Fragment>
        );
        }

### We can pass function as a {props}.
 

We cannot pass the props from child to parent ,.

#### Note - we can only pass the props from parent to child . This is also called as Props drilling . 


## Q. Can we pass props between siblings components?
Ans -> As it is unidirectional, if a parent element has two child elements, then by default, props can be passed
to both child elements, but the child elements cannot pass to each other as it is already passed down from
the parent.

### Q. Is there any way to pass the props from child to parent ?

Ans-> Since props are unidirectional , so we can't pass the proprs from child to parent but we can acheive it by defining function. we can pass that function as props (like we pass "clickevent" and called by using event)
like in App.js -> we make a function and take argument (e) . 