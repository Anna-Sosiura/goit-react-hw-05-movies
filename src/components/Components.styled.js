import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: blue;
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;

export { StyledLink, StyledNavLink };
