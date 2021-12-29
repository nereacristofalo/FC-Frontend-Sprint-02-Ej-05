import React from 'react';
import './FilterContainer.css';
import FilterTopBar from './filterTopBar/FilterTopBar';
import SkillsInput from './skillsInput/SkillsInput';
import FormInput from './formInput/FormInput';
import {
  cityOptions,
  countryOptions,
  precenseOptions,
  transferOptions,
} from '../../../utils/seed';

const FilterContainer = () => {
  return (
    <div className="filter-container">
      <FilterTopBar />
      <SkillsInput />
      <FormInput title="País" type="select" options={countryOptions} />
      <FormInput title="Ciudad" type="select" options={cityOptions} />
      <FormInput
        title="Presencial / a distancia"
        type="radio"
        options={precenseOptions}
      />
      <FormInput
        title="Posibilidad traslado"
        type="radio"
        options={transferOptions}
      />
    </div>
  );
};

export default FilterContainer;
