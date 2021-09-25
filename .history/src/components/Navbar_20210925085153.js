import React, { useState } from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL i.fab.fa-typo3
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
