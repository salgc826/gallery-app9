import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/pandas'>Pandas</NavLink></li>
      <li><NavLink to='/Dogs'>Dogs</NavLink></li>
      <li><NavLink to='/lamborghini'>Lamborghini</NavLink></li>
      <li><NavLink to='/search'>Search</NavLink></li>
    </ul>
  </nav>
)

  export default Header;
