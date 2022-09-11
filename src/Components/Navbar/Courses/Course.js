import React from 'react';
import data from './data';

function Course() {
  const ourCourse = data.map((course) => {
    return (
      <div className='ourCourse'>
        <img src={course.img} alt='course' />
        <h4>{course.title}</h4>
        <p>{course.description}</p>
      </div>
    );
  });
  return (
    <div className='course-segment'>
      <h1>Our Courses</h1>
      <div className='courses'>{ourCourse}</div>
      <div className='align-button'>
        <button>view all our courses</button>
      </div>
    </div>
  );
}

export default Course;
