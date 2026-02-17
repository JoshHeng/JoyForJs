import React from 'react';

function KeyboardKey({ character, onClick, disabled, status }) {
    return <button type="button" className={`key ${status || ''}`} onClick={onClick} disabled={disabled}>{character}</button>;
}

export default KeyboardKey;
