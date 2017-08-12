import React, { Component } from 'react';
import styled from 'styled-components';

import RecomendationCard from './RecomendationCard';

const Recomendations = styled.section`
  padding: 1rem 0.5rem;

  @media (min-width: 48rem) {
    padding: 0;
  }
`;

const Title = styled.h2`
  display: inline-block;
  width: 100%;
  margin: 2rem 0 1.5rem 0;
  padding-bottom: 0.5rem;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19;

  @media (min-width: 48rem) {
    margin-top: 3rem;
  }

  @media (min-width: 62rem) {
    text-align: center;
    margin-top: 4rem;
  }
`;

export default () => {
  return (
    <Recomendations>
      <Title>WE RECOMMEND</Title>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <RecomendationCard
            alt="Emroided Hooded"
            image="img/img3.jpg"
            title="Emroided Hooded Content For Three Lines"
            price="27 000 руб"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <RecomendationCard
            alt="Relaxed Fit Stretch Jeans"
            image="img/img2.jpg"
            title="Relaxed Fit Stretch Jeans Content For Three Lines"
            price="22 500 руб"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <RecomendationCard
            alt="Leather and House Check"
            image="img/img4.jpg"
            title="Leather and House Check Content For Three Lines"
            price="120 000 руб"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <RecomendationCard
            alt="Leather Wingtip Check"
            image="img/img5.jpg"
            title="Leather Wingtip Check Content For Three Lines"
            price="46 000 руб"
          />
        </div>
      </div>
    </Recomendations>
  );
};
