import React from 'react';
import './Button.css';

export default function Button({ number, text, active, activeColour, onClick }) {
  return (
    <button
      className='btn'
      style={active ? { backgroundColor: `var(--${activeColour})`, border: `1px solid var(--${activeColour})` } : {}}
      onClick={onClick}
    >
      <span className='btn-number'>{number}</span>
      <span className='btn-text'>{text}</span>
    </button>
  );
}
