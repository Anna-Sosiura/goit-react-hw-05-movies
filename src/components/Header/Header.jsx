import React from 'react';
import { HeaderList } from './Header.styled';
import { StyledNavLink } from 'components/Components.styled';
const Header = () => {
  return (
    <div>
      <HeaderList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
      </HeaderList>
    </div>
  );
};

export default Header;
