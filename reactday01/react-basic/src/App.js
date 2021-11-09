import React from 'react';
import   Header  from './Header';
import './App.css';

// function component 

function App(){
  return(
    <div id="head">
      <h1>hello world </h1>
    </div>
  );
}

class Apps extends React.Component{
  render(){
    return(
      <>
      <Header />
      <h1>Hello dear</h1>
      <App />
      </>

    )
  }
}

// if we want to render two components then we have to use either <div></div> or <></> or else 
// we can use <fragment> for that we have to import fragment 

export default Apps;