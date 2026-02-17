import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {checkGuess} from "../../game-helpers";
import Banner from "../Banner";

function Game() {
    const [answer, setAnswer] = React.useState(() => sample(WORDS));
    React.useEffect(() => console.info({ answer }), [answer]);
    
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
    
    const restartGame = () => {
        setAnswer(sample(WORDS));
        setGuesses([]);
        setGameState('play');
    }
  
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
          
        <div className="restart-div">
            <button type="button" onClick={restartGame} className="restart">Restart</button> 
        </div>
      </div>
  )
}

export default Game;
