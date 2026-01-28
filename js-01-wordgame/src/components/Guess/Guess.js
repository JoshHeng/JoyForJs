import React from 'react';
import {range} from "../../utils";

function Guess({ guess }) {
  return (
      <p className="guess">
        {guess ?
            range(0, 5).map(index => <span className={`cell ${guess?.[index]?.status}`} key={index}>{guess?.[index]?.letter}</span>) :
            range(0, 5).map(index => <span className="cell" key={index}></span>)
        }
      </p>
  );
}

export default Guess;
