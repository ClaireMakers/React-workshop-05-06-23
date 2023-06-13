import './App.css';
import { useState } from "react";
import CheerButton from "./CheerButton.js";

// First rendering:
//{ 
//  letter: "Initial State" 
//}

const App = () => {
  const [letter, setLetter] = useState("Initial State");
  const [word, setWord] = useState("SIGRID");

  const handleClickRandomButton = () => {
    fetch("https://randomuser.me/api").then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data)
      let name = data.results[0].name.first;
      setWord(name);
      console.log(name);
    })
  }

  return (
    <div className="app">
      <h1>Cheerleadr</h1>

      {word.split("").map((character) => {
        return <CheerButton letter={character} setLetter={setLetter} />;
      })}

      <button data-cy="random-button" onClick={handleClickRandomButton}>Random User</button>

      <p>{letter}</p>
    </div>
  );
}
export default App;


