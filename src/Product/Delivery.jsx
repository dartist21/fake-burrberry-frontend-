import React, { Component } from 'react';
import styled from 'styled-components';

const Delivery = styled.section`
  display: none;

  @media (min-width: 48rem) {
    display: block;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19;
`;

const SubTitle = styled.h5`
  margin: 0 0 0.25rem 0;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.2;
`;

const Paragraph = styled.p`
  margin: 0 0 1.5rem 0;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1.34;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default () => {
  return (
    <Delivery>
      <div className="row middle-lg">
        <div className="col-md-7">
          <Image src="img/img6.jpg" alt="delivery boxing photo" />
        </div>
        <div className="col-md-5 col-lg-4 col-lg-offset-1">
          <Title>DELIVERY</Title>
          <SubTitle>Free Next Day Delivery</SubTitle>
          <Paragraph>
            Order before 7pm Monday to Thursday for delivery the next day
          </Paragraph>

          <SubTitle>Collect-in-Store</SubTitle>
          <Paragraph>
            Order online today and pick up your items in store as early as
            tomorrow
          </Paragraph>

          <SubTitle>Free Returns</SubTitle>
          <Paragraph>Enjoy free returns on your order</Paragraph>

          <SubTitle>Free Gift Packaging</SubTitle>
          <Paragraph>
            Discover our gift packaging, a gold lined box tied with a coloured
            ribbon
          </Paragraph>
        </div>
      </div>
    </Delivery>
  );
};
