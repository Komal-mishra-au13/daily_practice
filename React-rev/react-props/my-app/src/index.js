import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const name = "komal";
const myName = <h1> My name is {name}</h1>;

ReactDOM.render(
  // <React.StrictMode>
    myName,
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

