import React from 'react';
import KeyboardKey from "../KeyboardKey";

const characterKeys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function Keyboard({ onCharacter, disabled, keyStatuses }) {
    return (
        <div className="keyboard">
            {characterKeys.map((keyRow, i) => (
                <div key={i} className="row">
                    {keyRow.map(key =>
                        <KeyboardKey key={key} character={key} onClick={() => onCharacter(key)} disabled={disabled} status={keyStatuses[key]} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;
