import React from 'react';
import styled from 'styled-components';

import hamburger from '../assets/img/hamburger.svg';

const Img = styled.img`display: block;`;

const Hamburger = styled.button`
  display: block;
  vertical-align: top;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
`;

export default function () {
  return (
    <Hamburger type="button">
      <Img src={hamburger} alt="Menu" />
    </Hamburger>
  );
}
