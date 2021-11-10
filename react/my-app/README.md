# In this app - today completed(10-11-2021)

### We can write class component in two ways - 

* one way is the simple we can write like -

### 1.  import React from 'react';

    class App extends React.Component{
        render(){
            return(
                <div>hello</div>
            )
        }
    }
    export default App;

### 2. import { Component } from 'react';

   class App extends Component{
       render(){
           return(
               <div> hello </div>
           )
       }
   }

   export default App;

### We can write Function component in two different ways - 

* one way to define function using function keyword -
1. import React from 'react';

   function App(){
       return(
           <div>Hello</div>
       )
   }

   export default App;

*  to use arrow function 

2. import React from 'react';

   const App = () => {
       return(
           <div>Hello</div>
       )
   }
   
   export default App;

# More than One Component render in "index.js" file 
1. we can use <React.StrictMode>

reactDOM.render(
    <React.StrictMode>
       <App />
       <Header />
       <Footer />
    </React.StrictMode>
    document.getElementById('roots);
);

2. To use Angel bracket <></>

reactDOM.render(
    <>
       <App />
       <Header />
       <Footer />
    </>
    document.getElementById('roots);
);

3. We can use <React.Fragment>

reactDOM.render(
    <React.Fragment>
       <App />
       <Header />
       <Footer />
    </React.Fragment>
    document.getElementById('roots);
);

### In App.js we can render component inside <Fragment>. This <Fragment> is called Parent component . 
const App = () =>{
    return(
        <Fragment>
          <Header />
          <Content />
          <Footer />
        </Fragment>
    );
export default App; 

#### Here <Header />,<Content /> and <Footer /> are childern of <fragment> component. 
#### In order to see the content of children component we have to make a file Fragment.js in Component folder , in that we have to write - 

const App = (props) =>{
    return(
        <div>
           {props.children}
        </div>
    )
};

export default App;

#### And in App.js file we have to add 

import Fragment from './components/Fragment';