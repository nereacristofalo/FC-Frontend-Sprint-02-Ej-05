import React from 'react';
import Profile from './profile/Profile';
import Title from './title/Title';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <Title />
      <Profile />
    </div>
  );
};

export default TopBar;
