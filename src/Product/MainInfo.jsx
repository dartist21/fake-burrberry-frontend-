import React from 'react';
import styled from 'styled-components';

import ColorBtn from './ColorBtn'

const MainInfo = styled.div`
  margin: 1rem 0.5rem 2rem 0.5rem;
  border-bottom: 1px solid #c6c6c6;

  @media (min-width: 48rem) {
    margin: 0 0 2rem 0;
  }
`;

const PriceAndNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.h2`
  margin: 0;

  color: #171717;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19;
`;

const Id = styled.p`
  margin: 0;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.17;
`;

const Color = styled.p`
  margin: 1rem 0;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
`;

const ColorBtnWrapper = styled.div`
  display: flex;
  padding-bottom: 2rem;
`;

export default () => {
  return(
    <MainInfo>
      <PriceAndNumberWrapper>
        <Price>110 000 руб</Price>
        <Id>Item 39428531</Id>
      </PriceAndNumberWrapper>
      <Color>Colour: Honey</Color>
      <ColorBtnWrapper>
        <ColorBtn
          colorValue="#232122"
          colorName="black"/>
        <ColorBtn
          colorValue="#cfa880"
          colorName="fawn"
          active="active"/>
      </ColorBtnWrapper>
    </MainInfo>
  );
};
