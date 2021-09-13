import React from 'react';
import './Button.css';

export default function Button({ number, text, active, activeColour, onClick }) {
  return (
    <button
      className='btn'
      style={active ? { backgroundColor: `var(--${activeColour})`, border: `1px solid var(--${activeColour})` } : {}}
      onClick={onClick}
    >
      <p className='btn-number'>{number}</p>
      <p className='btn-text'>{text}</p>
    </button>
  );
}
