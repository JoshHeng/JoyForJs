import React from 'react';
import Guess from "../Guess";
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessResults({ guesses }) {
  return (
      <div className="guess-results">
          {range(0, NUM_OF_GUESSES_ALLOWED).map(index => <Guess guess={guesses[index]} key={index} />)}
      </div>
  )
}

export default GuessResults;
