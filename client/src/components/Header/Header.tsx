import React from 'react';
import logo from '../assets/logo.png';

const Header:React.FC = () => {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className="container">
        <a
          href="/"
          className='navbar-brand'
        >
          <div className="d-flex">
            <img
              src={logo}
              alt="logo"
              className='mr-2'
            />

            <div>ProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
