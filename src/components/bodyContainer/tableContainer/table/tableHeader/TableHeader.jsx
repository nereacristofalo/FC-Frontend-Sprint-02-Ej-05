import React from 'react';
import './TableHeader.css';
import OrderIcon from '../../../../../images/order_icon.svg';

const TableHeader = ({ title, canOrder, onHeaderClick }) => {
  return (
    <th onClick={onHeaderClick}>
      <div className="th-content">
        {title}
        {canOrder ? (
          <img alt="" className="order-icon" src={OrderIcon} />
        ) : null}
      </div>
    </th>
  );
};

export default TableHeader;
