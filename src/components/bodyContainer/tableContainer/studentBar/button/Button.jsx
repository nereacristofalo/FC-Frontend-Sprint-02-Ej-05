import React from 'react';
import './Button.css';
import PlusIcon from '../../../../../images/plus_icon.svg';

const Button = () => {
  return (
    <button className="btn-addstudent">
      <img alt="" className="plus-icon" src={PlusIcon} />
      Añadir alumnos
    </button>
  );
};

export default Button;
