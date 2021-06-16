// import React from "react";
// import ReactDOM from "react-dom";
import RequestInfo from './components/RequestInfo'

import { h, Component, render } from "preact"

import register from 'preact-custom-element';

const Greeting = ({ name = 'World' }) => (
  <p>Hello, {name}!</p>
);

register(Greeting, 'x-greeting', ['name']);

// import MyImage from './assets/dog.jpg';
// import './index.css';

const App = () => {
  return (
    <div>
        <div>Welcome to my-webpack-react-starter</div>
        {/* <img src={MyImage} /> */}
    </div>
  );
};

render(<RequestInfo />, document.querySelector("#root"));
// ReactDOM.render(<App />, document.querySelector("#root"));