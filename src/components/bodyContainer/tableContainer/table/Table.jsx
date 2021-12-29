import React, { useState } from 'react';
import './Table.css';
import TableHeader from './tableHeader/TableHeader';
import {
  INITIAL_DATA,
  INITIAL_SORT,
  orderAscending,
  orderDescending,
  orderSkills,
} from '../../../../utils/sort';

const Table = ({ tableData, setTableData }) => {
  const [sort, setSort] = useState(INITIAL_SORT);

  const getSkills = (skills) => {
    const skillsToDisplay = [];
    for (let i = 0; i < skills.length && i < 2; i++) {
      skillsToDisplay.push(
        <p key={i} className="skill-tag">
          {skills[i]}
        </p>
      );
    }
    if (skills.length > 2) {
      skillsToDisplay.push(
        <p key={skills.length} className="skill-tag">{`+${
          skills.length - 2
        }`}</p>
      );
    }
    return skillsToDisplay;
  };

  const onSortClicked = (propToSort) => {
    switch (sort[propToSort]) {
      case 'ASC':
        setTableData(orderAscending(propToSort));
        setSort({ ...INITIAL_SORT, [propToSort]: 'DESC' });
        break;
      case 'DESC':
        setTableData(orderDescending(propToSort));
        setSort({ ...INITIAL_SORT, [propToSort]: 'none' });
        break;
      default:
        setTableData(INITIAL_DATA);
        setSort(INITIAL_SORT);
        break;
    }
  };

  const onSkillsClicked = () => {
    const { sortedData, sortOrder } = orderSkills(sort);
    setTableData(sortedData);
    setSort(sortOrder);
  };

  return (
    <table id="table" className="students-table">
      <thead>
        <tr>
          <TableHeader
            onHeaderClick={() => onSortClicked('fullname')}
            title="NOMBRE"
            canOrder
          />
          <TableHeader
            onHeaderClick={() => onSortClicked('city')}
            title="CIUDAD"
            canOrder
          />
          <TableHeader
            onHeaderClick={() => onSortClicked('country')}
            title="PAÍS"
            canOrder
          />
          <TableHeader title="TELÉFONO" />
          <TableHeader
            onHeaderClick={() => onSortClicked('email')}
            title="CORREO ELECTRÓNICO"
            canOrder
          />
          <TableHeader
            onHeaderClick={onSkillsClicked}
            title="ETIQUETAS"
            canOrder
          />
        </tr>

        {tableData.map((e, index) => (
          <tr key={index}>
            <td>{e.fullname}</td>
            <td>{e.city}</td>
            <td>{e.country}</td>
            <td>{e.phone}</td>
            <td>{e.email}</td>
            <td>
              <div className="skill-container">{getSkills(e.skills)}</div>
            </td>
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default Table;
