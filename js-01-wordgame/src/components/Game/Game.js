import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {checkGuess} from "../../game-helpers";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
  
    // 'play', 'win', 'lose'
    const [gameState, setGameState] = React.useState('play');
  
    const onGuess = (guess) => {
        const guessAndResult = checkGuess(guess, answer);

        if (guess === answer) {
          setGameState('win');
        } else if (guesses.length >= 5) {
          setGameState('lose');
        }
    
        setGuesses(prev => [...prev, guessAndResult]);
    }
    
    const keyStatuses = React.useMemo(() => {
        const keyStatusDict = {};
        
        for (const guess of guesses) {
            for (const char of guess) {
                if (!keyStatusDict[char.letter] || char.status === 'correct') {
                    keyStatusDict[char.letter] = char.status;
                }
            }
        }
        
        return keyStatusDict;
    }, [guesses]);
  
  return (
      <div>
          {gameState === 'win' ? (
              <Banner status="happy">
                  <p>
                      <strong>Congratulations!</strong> Got it in{' '}
                      <strong>{guesses.length} guess{guesses.length === 1 ? '' : 'es'}</strong>.
                  </p>
              </Banner>
          ) : (gameState === 'lose' && 
              <Banner status="sad">
                  <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
              </Banner>
          )}
        <GuessResults guesses={guesses} />
        <GuessInput onGuess={onGuess} disabled={gameState !== 'play'} keyStatuses={keyStatuses} />
      </div>
  )
}

export default Game;
