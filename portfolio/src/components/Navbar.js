import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light sticky-top">
      <Link to="/" className="navbar-brand">
        <img id="image" src="img/LOGO21.pNg" alt="" width="90px" height="90px" className="logo" />
        <span className="text-container">
          TRIPOO
          <span className="over-text">We Plann'd Everythin'</span>
        </span>
      </Link>

      <button type="button" className=" border-0" data-toggle="collapse" data-target="#navbarCollapse">
        <i id="my-icon" className="fa fa-tags fa-lg rotate-270"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className=" ml-auto">
          <Link to="/" exact className=" " >HOME</Link>
          <Link to="/aboutus" className=" " >ABOUT US</Link>
          <Link to="/destination" className=" " >DESTINATION</Link>
          <Link to="/packages" className=" " >PACKAGE</Link>
          <Link to="/contact" className=" " >CONTACT US</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
