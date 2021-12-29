import React from 'react';
import './SkillsInput.css';
import SelectedSkill from './selectedSkill/SelectedSkill';

const SkillsInput = () => {
  return (
    <div className="filter-section-container">
      <h1 className="filter-title">Etiquetas</h1>
      <div className="filter-select-container">
        <input
          type="text"
          list="skills"
          className="skills-select-input"
          placeholder="Escribe para buscar..."
        />
        <datalist id="skills">
          <option>HTML&CSS</option>
          <option>JavaScript</option>
        </datalist>
        <div className="skills-select-chevron"></div>
      </div>
      <div className="selected-skills-container">
        <SelectedSkill skill="HTML&CSS"></SelectedSkill>
        <SelectedSkill skill="REACT"></SelectedSkill>
        <SelectedSkill skill="ANGULAR"></SelectedSkill>
      </div>
    </div>
  );
};

export default SkillsInput;
