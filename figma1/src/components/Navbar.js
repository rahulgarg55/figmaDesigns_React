import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">World Peas</div>
      <div className="nav-links">
        <a href="#">Shop</a>
        <a href="#">Newstand</a>
        <a href="#">Who we are</a>
        <a href="#">My profile</a>
      </div>
      <div className="basket">
        <button>Basket (3)</button>
      </div>
    </nav>
  );
};

export default Navbar;
