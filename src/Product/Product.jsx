import React from 'react';
import styled from 'styled-components';

import { MinDeviceWidthLarge, MaxDeviceWidthLarge } from './BreakPoints';
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

  @media (min-width: 62rem) {
    margin-bottom: 4rem;
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

  @media screen and (min-width: 62rem) {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
`;

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

const Image = styled.img`
  display: block;
  margin: 0;
  height: 651px;
`;

const Delivery = styled.div`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
    margin-top: 1.5rem;
  }
`;

const Subtitle = styled.h3`
  margin: 0 0 .25rem 0;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: .875rem;
`;

const Content = styled.p`
  margin: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
`;

export default props => {
  return (
    <Product>
      <MaxDeviceWidthLarge>
        <Title>Long Cotton Gabardine Car Coat</Title>
      </MaxDeviceWidthLarge>
      <div className="row middle-lg">
        <div className="col-xs-12 col-md-7 col-lg-6">
          <MaxDeviceWidthLarge>
            <Gallery />
          </MaxDeviceWidthLarge>
          <MinDeviceWidthLarge>
            <Image src="img/img1.jpg" alt="Long Cotton Gabardine Car Coat" />
          </MinDeviceWidthLarge>
        </div>
        <div className="col-xs-12 col-md-5 col-lg-6">
          <MinDeviceWidthLarge>
            <Title>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Title>
          </MinDeviceWidthLarge>
          <MainInfo />
          <PropertiesButtons>
            <Button color="#171717" label="#ffffff">
              SELECT A SIZE
            </Button>
            <Button color="#ffffff" label="#171717">
              FIND IN STORE
            </Button>
            <HelpButton type="button">NEED SIZE HELP?</HelpButton>
          </PropertiesButtons>
          <Delivery>
            <Subtitle>Free Next Day Delivery</Subtitle>
            <Content>
              Order before 7pm Monday to Thursday for delivery the next day
            </Content>
          </Delivery>
        </div>
      </div>
    </Product>
  );
};
