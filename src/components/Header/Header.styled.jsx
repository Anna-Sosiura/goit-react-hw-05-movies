import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const NavLinkStyle = styled(NavLink)`
  display: flex;
  color: #fafafa;
  font-weight: 600;
  gap: 20px;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;

  &.active {
    color: #111;
    text-decoration: underline;
  }
`;
