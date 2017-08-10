import React from 'react';
import styled from 'styled-components';

import MainInfo from './MainInfo';
import Button from './Button';
import Gallery from './Gallery';

const Product = styled.section`
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #c6c6c6;

  @media (min-width: 48rem) {
    padding-bottom: 0;
    border-bottom: 1px solid #fff;
  }
`;

const Title = styled.h1`
  margin: 1rem 0.5rem;
  color: #111111;
  font-family: Lora, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.2;

  @media (min-width: 48rem) {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.17;
  }
`

const PropertiesButtons = styled.div`
  margin: 0 0.5rem;

  @media (min-width: 48rem) {
    margin: 0;
  }
`;

const HelpButton = styled.button`
  margin: 0.5rem 0;
  padding: 0;

  color: #171717;
  border: 0;
  background-color: #ffffff;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
`;

export default (props) => {
  return(
    <Product>
      <Title>Long Cotton Gabardine Car Coat</Title>
      <div className="row">
        <div className="col-xs-12 col-md-7">
          <Gallery />
        </div>
        <div className="col-xs-12 col-md-5">
          <MainInfo />
          <PropertiesButtons>
            <Button backgroundColor="#171717" textColor="#ffffff" text="SELECT A SIZE"></Button>
            <Button backgroundColor="#ffffff" textColor="#171717" text="FIND IN STORE"></Button>
            <HelpButton type="button">
              NEED SIZE HELP?
            </HelpButton>
          </PropertiesButtons>
        </div>
      </div>
    </Product>
  );
};
