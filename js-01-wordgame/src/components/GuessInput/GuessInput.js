import React from 'react';
import Keyboard from "../Keyboard";

function GuessInput({ onGuess, disabled, keyStatuses }) {
    const [guess, setGuess] = React.useState('');
  
    return (
        <form className="guess-input-wrapper" onSubmit={e => {
            e.preventDefault();
            onGuess(guess);
            setGuess('');
        }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value.toUpperCase())}
                maxLength={5}
                pattern="[A-Z]{5}"
                disabled={disabled}
            />
            
            <Keyboard onCharacter={char => {
                const newGuess = guess + char;
                setGuess(newGuess);
                if (newGuess.length >= 5) {
                    onGuess(newGuess);
                    setGuess('');
                }
            }} disabled={disabled} keyStatuses={keyStatuses} />
        </form>
    );
}

export default GuessInput;
