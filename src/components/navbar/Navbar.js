import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
 
const Navbar = () => {
  return (
    <nav className="App navbar">
      <ul>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/description">Descrição</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
