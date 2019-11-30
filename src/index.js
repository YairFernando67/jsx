// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';
// const React = require('react');

// Create a REACT Component
function getCurrentTime() {
  return (new Date()).toLocaleTimeString();
}
const App = () => {
  const buttonText = { text: 'click me'};
  const labelText = 'Enter name: '
  return (
    <div>
      <label htmlFor="name" className="label">{labelText}</label>
      <input id="name" type="text"/>
      <button style={{ backgroundColor: "#ccc", color: "white", border: "2px solid #444"}}>
        {buttonText.text}
      </button>
      <div>
        <h1>Current Time</h1>
        <p>{getCurrentTime()}</p>
      </div>
    </div>
  );
};

// Take the REACT Component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);