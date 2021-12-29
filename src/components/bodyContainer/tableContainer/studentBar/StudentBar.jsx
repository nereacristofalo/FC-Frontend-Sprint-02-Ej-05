import React from 'react';
import Button from './button/Button';
import SearchContainer from './searchContainer/SearchContainer';
import './StudentBar.css';

const StudentBar = ({ onInputChanged }) => {
  return (
    <div className="student-bar">
      <SearchContainer onInputChanged={onInputChanged} />
      <Button />
    </div>
  );
};

export default StudentBar;
