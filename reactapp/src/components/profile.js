import React from 'react';
import './profile.css'; // Import CSS file

const Profile = () => {
  return (
    <div className="inner">
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
      </div>
      <div className="profile-content">
        <img className="profile-picture" src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689182634/ppfdsnd-removebg-preview_jl2iqb.png" alt="Profile" />
        <div className="profile-details">
          <h2>User Information</h2><br></br>
          <p>Name: Bhuvaneshwari </p><br></br>
          <p>Email: bhu@example.com</p><br></br>
          <p>Role: Student</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
