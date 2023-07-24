import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course, onDelete }) => {
  return (
    <div className="course-card3">
    <div className="ourcourse">
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="details">
        <p>Duration: {course.duration}</p>
        <p>Price: ${course.price}</p>
      </div>
      <button className="delete-button1" onClick={() => onDelete(course)}>
        Delete
      </button>
    </div>
    </div>
    </div>
  );
};

export default CourseCard;
