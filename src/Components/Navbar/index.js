import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaClock,
} from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { FiPhoneCall } from 'react-icons/fi';

function Navbar() {
  return (
    <nav>
      <div className='info'>
        <ul>
          <li>
            <ImLocation2 />
            <h6>
              IVY, BUSINESS CENTRE,CROWN STREET, FAILSWORTH, MANCHESTER M35 9BG
            </h6>
          </li>
          <li>
            <FaClock size={20} />
            <h6>Mon - Sat 8.00 - 18.00 Sunday CLOSED</h6>
          </li>
          <li>
            <FiPhoneCall />
            <h6>+447915531226 / +441616374130</h6>
          </li>
        </ul>
      </div>
      <div className='nav-header'>
        <div className='logo'>
          <img src={'/assets/images/cranbrook.svg'} alt='cranbrook' srcset='' />
        </div>
        <ul className='list'>
          <li>
            <a href='/#'>Home</a>
          </li>
          <li>
            <a href='/#'>About Us</a>
          </li>
          <li>
            <a href='/#'>Experience</a>
          </li>
          <li>
            <a href='/#'>Courses</a>
          </li>
          <li>
            <a href='/#'>Service</a>
          </li>
          <li>
            <a href='/#'>Gallery</a>
          </li>
          <li>
            <a href='/#'>Blog</a>
          </li>
          <li>
            <a href='/#'>Contact</a>
          </li>
        </ul>

        <ul className='social-icons'>
          <li>
            <a>
              <FaFacebookSquare style={{ fontSize: '40px' }} size={5} />
            </a>
          </li>

          <li>
            <a>
              <FaTwitterSquare className='increase' />
            </a>
          </li>
          <li>
            <a>
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
