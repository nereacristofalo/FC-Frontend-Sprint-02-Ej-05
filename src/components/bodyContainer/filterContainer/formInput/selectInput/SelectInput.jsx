import React from 'react';
import './SelectInput.css';

const SelectInput = ({ options }) => {
  return (
    <div className="filter-select-container">
      <select className="location-select">
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
