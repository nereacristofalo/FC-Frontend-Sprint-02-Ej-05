import React, { useState } from 'react';
import StudentBar from './studentBar/StudentBar';
import Table from './table/Table';
import './TableContainer.css';
import { INITIAL_DATA } from '../../../utils/sort';

const TableContainer = () => {
  const [tableData, setTableData] = useState(INITIAL_DATA);

  const onSearch = (searchString) => {
    setTableData(
      INITIAL_DATA.filter((item) => {
        return (
          item.fullname.toLowerCase().includes(searchString.toLowerCase()) ||
          item.city.toLowerCase().includes(searchString.toLowerCase()) ||
          item.country.toLowerCase().includes(searchString.toLowerCase()) ||
          item.email.toLowerCase().includes(searchString.toLowerCase()) ||
          item.skills.some((s) =>
            s.toUpperCase().includes(searchString.toUpperCase())
          )
        );
      })
    );
  };

  const onTableChanged = (dataTable) => {
    setTableData(dataTable);
  };

  return (
    <div className="table-container">
      <StudentBar onInputChanged={onSearch} />
      <Table tableData={tableData} setTableData={onTableChanged} />
    </div>
  );
};
export default TableContainer;
