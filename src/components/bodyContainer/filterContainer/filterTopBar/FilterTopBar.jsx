import React from 'react';
import './FilterTopBar.css';
import TrashIcon from '../../../../images/trash_icon.svg';

const FilterTopBar = () => {
  return (
    <div className="filter-title-container">
      <h1 className="filter-section-title">Filtros de búsqueda</h1>
      <img alt="" className="trash-icon" src={TrashIcon} />
    </div>
  );
};

export default FilterTopBar;
