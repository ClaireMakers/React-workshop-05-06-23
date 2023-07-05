import './App.css';
import { useState } from "react";
import CheerButton from "./CheerButton"

 /* 
  > React hooks - they keep track and interact with the state of a component. 
  For instance, here, our hook [shout, setShout] lets us update the value of "shout", which is held in the state of the component.
  > useState is an in-built function in React, that lets you access and update the state of a component.
  > When the state of a component is updated, for instance, when we press our buttons, the component re-renders, 
  i.e. re-displays on the page
  the right information from its state.
  */

const App = () => {
  //hook syntax - in useState, initial value when we load the page
  //shout => a key in the state object. THe state is {shout: "Initial State"} on the first render
  //setShout lets you change the value of shout, and triggers a re-render when called
  const [shout, setShout] = useState("Initial State");
  // const [word, setWord] = useState(["M", "A", "K", "E", "R", "S"]);
  let word = ["M", "A", "K", "E", "R", "S"];

  return (
    <div className="app">
      <h1>Cheerleadr</h1>

      {/*The curly brackets signal that we are using JSX here - you can write
      JavaScript code directly inside of them. .map() allows us to create a button 
      dynamically for each letter in the array. For instance, this could be really useful 
      if down the line, Iwanted to create some user input for the word itself.*/}
      
      {word.map((character) => {
        return <CheerButton letter={character} setShout={setShout} />;
      })}
  
      <p>{shout}</p>
    </div>
  );
}
export default App;


