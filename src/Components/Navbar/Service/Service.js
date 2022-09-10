import React from 'react';
import data from './data';

function Service() {
  console.log(data);
  const ourServices = data.map((serv) => {
    console.log(serv);
    return (
      <div className='one'>
        <img src={serv.image} alt='image' />
        <h4>{serv.heading}</h4>
        <p>{serv.description}</p>
      </div>
    );
  });
  return (
    <div>
      <div className='ourService'>
        <h1>About Us</h1>
        <div className='service'>
          {ourServices}
          <div className='we-do'>
            <h3>What we do for you</h3>
            <p>
              We deliver quality services to every of our esteemed participants,
              thus contributing to the achievement of their personal and
              corporate goals.
            </p>
            <button>View page</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
