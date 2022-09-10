import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Main() {
  const slideImage = [
    '/assets/images/pix.jpeg',
    '/assets/images/pi2x.jpeg',
    '/assets/images/pexels.jpeg',
    '/assets/images/consultants.jpeg',
    '/assets/images/fauxels.jpeg',
  ];

  return (
    <div>
      <Slide>
        <div className='sliderImage'>
          <div style={{ backgroundImage: `url(${slideImage[0]})` }}>
            <span>
              <h2>Ultimate Development Solution for Africa</h2>
              <p>Infinite possibilities, Endless oportunities</p>
            </span>
            <div className='captionButtons'>
              <button>Our Services</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className='sliderImage'>
          <div
            style={{
              backgroundImage: `url(${slideImage[1]})`,
            }}
          >
            <span>
              <h2>Ultimate Development Solution for Africa</h2>
              <p>Infinite possibilities, Endless oportunities</p>
            </span>
            <div className='captionButtons'>
              <button>Our Services</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className='sliderImage'>
          <div style={{ backgroundImage: `url(${slideImage[2]})` }}>
            <span>
              <h2>Ultimate Development Solution for Africa</h2>
              <p>Infinite possibilities, Endless oportunities</p>
            </span>

            <div className='captionButtons'>
              <button>Our Services</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className='sliderImage'>
          <div style={{ backgroundImage: `url(${slideImage[3]})` }}>
            <span>
              <h2>Ultimate Development Solution for Africa</h2>
              <p>Infinite possibilities, Endless oportunities</p>
            </span>
            <div className='captionButtons'>
              <button>Our Services</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className='sliderImage'>
          <div style={{ backgroundImage: `url(${slideImage[4]})` }}>
            <span>
              <h2>Ultimate Development Solution for Africa</h2>
              <p>Infinite possibilities, Endless oportunities</p>
            </span>
            <div className='captionButtons'>
              <button>Our Services</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Main;
