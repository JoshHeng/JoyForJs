import React from 'react';

function GuessInput({ onGuess }) {
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
        />
      </form>
  );
}

export default GuessInput;
