import "./App.css";

function CheerButton(props) {

//props is an object with the key-value pairs you passed down from the parent component. 
// Here, it's {letter: "string of letter", setShout: setShout}
const handleClickButton = () => {
      props.setShout(letter);
};
    
//className in JSX is the equivalent of "class" for CSS purposes}
// I would advise creating one stylesheet per component for styling (unless you end up using a CSS framework you like), because otherwise,
// you can end up with really long horrible stylesheets where it's hard to find what you need. 
    return (
        <button className="CheerButton" onClick={handleClickButton}>Give me an {props.letter}</button>
    )
}

export default CheerButton;
