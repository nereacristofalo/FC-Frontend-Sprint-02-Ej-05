import React from 'react';
import './RadioInput.css';

const RadioInput = ({ options }) => {
  return (
    <>
      {options.map((opt) => (
        <label key={opt.value} className="filter-option">
          <input type="radio" name={opt.name} value={opt.value} />
          {opt.text}
        </label>
      ))}
    </>
  );
};

export default RadioInput;
