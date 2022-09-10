import React from 'react';

function Client() {
  const clientImage = [
    'assets/images/client.jpeg',
    'assets/images/2client.png',
    'assets/images/3client.jpeg',
    'assets/images/4client.jpeg',
    'assets/images/5client.png',
    'assets/images/6client.png',
  ];

  return (
    <div className='clients'>
      <h1>Our Clients</h1>
      <ul>
        <li>
          <img className='client-image-style' src={clientImage[0]} />
        </li>
        <li>
          <img className='client-image-style' src={clientImage[1]} />
        </li>
        <li>
          <img className='client-image-style' src={clientImage[2]} />
        </li>
        <li>
          <img className='client-image-style' src={clientImage[3]} />
        </li>
        <li>
          <img className='client-image-style' src={clientImage[4]} />
        </li>
        <li>
          <img className='client-image-style' src={clientImage[5]} />
        </li>
      </ul>
    </div>
  );
}

export default Client;
