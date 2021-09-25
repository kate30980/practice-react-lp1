import React, { useState } from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <i className="fab fa-typo3"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
