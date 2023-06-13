//Need to know what letter to display on the button
//We will need to have a way of updating the state on the App.js to trigger a re-render when the button is pressed

const CheerButton = ( { letter, setLetter } ) => {

    const handleClick = () => {
        //changes
        setLetter(letter);
    };

    return (
        <button data-cy="cheerButton" onClick={handleClick}>{letter}</button>
    );
}

export default CheerButton;