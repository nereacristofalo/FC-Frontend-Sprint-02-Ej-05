import React from 'react';
import './SelectedSkill.css';
import CrossIcon from '../../../../../images/cross_icon.svg';

const SelectedSkill = ({ skill }) => {
  return (
    <div className="selected-skill">
      {skill}
      <img alt="" className="cross-icon" src={CrossIcon} />
    </div>
  );
};

export default SelectedSkill;
