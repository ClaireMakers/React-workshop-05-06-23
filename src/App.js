import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import CheerButton from './CheerButton';

//JSX - JavaScript extended.

function App() {
  /* 
  > React hooks - they keep track and interact with the state of a component. 
  For instance, here, our hook [shout, setShout] lets us update the value of "shout", which is held in the state of the component.
  > useState is an in-built function in React, that lets you access and update the state of a component.
  > When the state of a component is updated, for instance, when we press our buttons, the component re-renders, i.e. re-displays on the page
  the right information from its state.
  */
  const [shout, setShout] = useState("Value when loading page for the first time");
  const word = "MAKERS";


  return (
    <div className="App">
      <h1>Cheerleadr</h1>
      {
        /*The curly brackets signal that we are using JSX here - you can write JavaScript code directly inside of them.
        .split turns word into an array, then map allows us to create a button dynamically for each letter in the array.
        For instance, this could be really useful if down the line, I wanted to create some user input for the word itself, 
        and possible storing the word inside a new hook.
        */
        word.split("").map((letter) => {
          return <CheerButton letter={letter} setShout={setShout} />
        })
      }

      {//.map returns an array, you could also have displayed the CheerButtons within an array like so:
      /* {[
      <CheerButton letter={"M"} />,
      <CheerButton letter={"A"} />,
      <CheerButton letter={"K"} />,
      <CheerButton letter={"E"} />,
      <CheerButton letter={"R"} />,
      <CheerButton letter={"S"} />,
      ]} */}

      <div>
        <h1>{shout}</h1>
      </div>
    </div>
  );
}

export default App;
