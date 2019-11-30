// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';
// const React = require('react');

// Create a REACT Component
const App = () => {
  return <div>Hi there!</div>
};

// Take the REACT Component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);