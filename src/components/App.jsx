import React from "react";
import Login from "./login";
var isLoggedin = false;

function renderConditionally() {}

const currentTime = new Date(2019, 11, 1, 19).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        //isLoggedin === true ? <h1>Hello</h1> : <Login />
        currentTime > 11 ? <h1>Why sre you still working</h1> : null
      }
    </div>
  );
}

export default App;
