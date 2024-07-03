

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import imag from './fINAL-LOGO.webp'

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        <img src={imag} alt='Logo' style={imgStyle} />
        <a href='/Contactus' className='btn btn-outline-light'>
          <i className='fa fa-user-plus me-1'></i>
          Contactus
        </a>
      </div>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between', // Adjust to space-between for logo on left and button on right
  alignItems: 'center',
  padding: '8px 80px 0px',
  position: 'absolute',
  width: '100%', // Make the navbar span the full width of the viewport
  height: '108px',
  top: '0px',
  background: 'rgba(255, 255, 255, 0.64)',
  backdropFilter: 'blur(16px)',
};

const imgStyle = {
  height: '100%', // Adjust the height of the image as needed
  width: '172px'
};

export default NavBar;
