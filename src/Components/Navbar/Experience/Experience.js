import React from 'react';
import { FaLaptop, FaCrown } from 'react-icons/fa';
function Experience() {
  return (
    <div>
      <div className='experience'>
        <h1>More Than 13 Years of Experience</h1>
        <div className='experience-list'>
          <ul>
            <li>
              <FaLaptop />
              <h3>200 Training completed</h3>
            </li>
            <li>
              <FaCrown />
              <h3>200 satisfied participants</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
