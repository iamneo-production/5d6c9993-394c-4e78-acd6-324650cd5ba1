import React, { useState } from 'react';
import CourseCard from './CourseCard';
import './ManageCourse.css';
import {BiSearch} from 'react-icons/bi';

const ManageCourse = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Python',
      description: 'Easy to learn',
      duration: '8 weeks',
      price: 13000,
    },
    {
      id: 2,
      title: 'Java',
      description: 'Object Oriented Programming Language',
      duration: '6 weeks',
      price:13000,
    },
    {
      id: 3,
      title: 'React',
      description: 'Front-end texhnology',
      duration: '13 weeks',
      price: 15000,
    },
  ]);

  const handleDeleteCourse = (course) => {
    setCourses(courses.filter((c) => c.id !== course.id));
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission and add the course
    const newCourse = {
      id: courses.length + 1,
      title: e.target.title.value,
      description: e.target.description.value,
      duration: e.target.duration.value,
      price: parseFloat(e.target.price.value),
    };
    setCourses([...courses, newCourse]);

    // Reset the form after submission
    e.target.reset();
  };
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submit logic here
    console.log('Search term:', searchTerm);
  };

  // Filter the courses based on the search term
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const textStyle = {
    marginTop:'1px',
     marginLeft:'5px',
    };
  

  return (
    <div>
    <div>
 
    <nav className="navbar">
        <div className="it">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270779/beirio-removebg-preview_um4vby.png" width="40px" height="40px"/>
        </div>
        <div className="navbar-brand">Explore</div>
      
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit"><BiSearch/></button>
          <div className="cse">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270147/profile-removebg-preview_zt8pt4.png" width="40px" height="40px"/>
          </div>
        </form>
        </nav>
    </div>
    <div style={textStyle}>
      
      <img src="https://img.freepik.com/free-photo/blank-notebook-surrounded-by-stationery-school-supplies_23-2148224242.jpg?w=1060&t=st=1690174750~exp=1690175350~hmac=a34cc936042990dbd3c9916cac43dcd6ec34558863ac56583b1f0bfb03204e12" alt="img" width="1500px" height="700px"/>
       </div> 
    <div className="course-form5">
      <h2>Courses</h2>
      <form onSubmit={handleAddCourse}>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <label>
          Description:
          <input type="text" name="description" required />
        </label>
        <label>
          Duration:
          <input type="text" name="duration" required />
        </label>
        <label>
          Price:
          <input type="number" name="price" required />
        </label>
        <button type="submit">Add Course</button>
      </form>
      </div>
    
     
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} course={course} onDelete={handleDeleteCourse} />
      ))}
   </div>
    
  );
};

export default ManageCourse;
