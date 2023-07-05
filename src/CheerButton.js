const CheerButton = (props) => {
  //props is an object with the key-value pairs you passed down from the parent component.
  // Here, it's {letter: "string of letter", setShout: setShout}
    
  const handleClick = () => {
    props.setShout(props.letter);
  };

  return (
    <button onClick={handleClick}>{props.letter}</button>
  );
}

export default CheerButton;