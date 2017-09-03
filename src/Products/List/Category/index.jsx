import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Filter from './Filter';

const CategoryStyled = styled.div`background-color: #f3f3f3;`;

const Title = styled.h1`
  margin: 0;
  padding-top: 2rem;
  font-family: Lora;
  font-size: 1.625rem;
  line-height: 2rem;
  color: #171717;
  font-weight: 400;

  @media only screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Description = styled.p`
  margin: 0;
  padding-top: 1rem;
  font-size: 0.75rem;
  font-family: Raleway;
  line-height: 1.67;
  font-weight: 400;
  color: #171717;
`;

export default function Category(props) {
  return (
    <CategoryStyled>
      <div className="container">
        <Title>Men’s Clothing</Title>
        <div className="row">
          <div className="col-xs-12 col-md-9 col-lg-7">
            <Description>
              Explore our menswear collection for the season. Sculptural knitwear, sweatshirts,
              artist overalls and oversized cabans feature alongside our signature trench coat in
              both heritage.
            </Description>
          </div>
        </div>
      </div>
      <Filter toggleOverlay={props.toggleOverlay} />
    </CategoryStyled>
  );
}

Category.propTypes = {
  toggleOverlay: PropTypes.func.isRequired,
};
