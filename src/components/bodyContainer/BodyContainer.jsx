import React from 'react';
import './BodyContainer.css';
import FilterContainer from './filterContainer/FilterContainer';
import TableContainer from './tableContainer/TableContainer';

const BodyContainer = () => {
  return (
    <div className="content-container">
      <TableContainer />
      <FilterContainer />
    </div>
  );
};

export default BodyContainer;
