import React from 'react';
import './FormInput.css';
import RadioInput from './radioInput/RadioInput';
import SelectInput from './selectInput/SelectInput';

const FormInput = ({ title, type, options }) => {
  return (
    <div className="filter-section-container">
      <h1 className="filter-title">{title}</h1>
      {type === 'select' ? (
        <SelectInput options={options} />
      ) : type === 'radio' ? (
        <RadioInput options={options} />
      ) : null}
    </div>
  );
};

export default FormInput;
