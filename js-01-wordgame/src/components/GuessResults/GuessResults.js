import React from 'react';
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
      <div className="guess-results">
        {guesses.map(guess => <Guess guess={guess.guess} key={guess.id} />)}
      </div>
  )
}

export default GuessResults;
