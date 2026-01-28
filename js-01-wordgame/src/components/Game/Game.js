import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  
  const onGuess = (guess) => {
    setGuesses(prev => [...prev, { id: Math.random(), guess }]);
  }
  
  return (
      <div>
        <GuessResults guesses={guesses} />
        <GuessInput onGuess={onGuess} />
      </div>
      
  )
}

export default Game;
