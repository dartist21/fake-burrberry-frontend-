import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  padding: 1rem;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  color: #999999;
  &.active {
    color: #171717;
    border-bottom: 1px solid #171717;
  }

`;

export default function () {
  return (
    <nav>
      <Link to="/womens-clothing">Women</Link>
      <Link to="/mens-clothing">Men</Link>
      <Link to="/children-clothing">Children</Link>
      <Link to="/beaty">Beauty</Link>
      <Link to="/expierence">Experience</Link>
    </nav>
  );
}
