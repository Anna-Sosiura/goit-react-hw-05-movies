import React from 'react';
import { NavLinkStyle } from './Header.styled';
const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLinkStyle to="/">Home</NavLinkStyle>
        </li>
        <li>
          <NavLinkStyle to="/movies">Movies</NavLinkStyle>
        </li>
      </ul>
    </div>
  );
};

export default Header;
