import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="select-container">
      <select className="user-select" defaultValue="0">
        <option value="0">UserName</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div className="user-profile">NA</div>
      <div className="chevron"></div>
    </div>
  );
};

export default Profile;
