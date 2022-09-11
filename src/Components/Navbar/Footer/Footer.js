import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <p>
        Copyright © 2019 Cranbrook Development|All rights reserved. Designed By
        Estrade Technologies
      </p>
      <ul className='footer-socials'>
        <li>
          <a>
            <FaFacebookSquare />
          </a>
        </li>

        <li>
          <a>
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a>
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
