import React, { useState } from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
