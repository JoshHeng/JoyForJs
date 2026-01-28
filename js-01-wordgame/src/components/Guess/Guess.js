import React from 'react';
import {range} from "../../utils";

function Guess({ guess }) {
  return (
      <p className="guess">
        {range(0, 5).map(index => <span className="cell" key={index}>{guess?.[index]}</span>)}
      </p>
  );
}

export default Guess;
