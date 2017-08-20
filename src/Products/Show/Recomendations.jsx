import React from 'react';
import styled from 'styled-components';

import Card from '../Card';

const Recomendations = styled.section`
  padding: 1rem 0.5rem;

  @media (min-width: 48rem) {
    padding-bottom: 2rem;
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

export default () =>
  (<Recomendations>
    <Title>WE RECOMMEND</Title>
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <Card
          image="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          title="The Westminster – Long Heritage Trench Coat"
          label="Relaxed fit"
          colorsNumber={3}
          price={120000}
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          image="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          title="The Westminster – Long Heritage Trench Coat"
          label="Relaxed fit"
          colorsNumber={3}
          price={120000}
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          image="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          title="The Westminster – Long Heritage Trench Coat"
          label="Relaxed fit"
          colorsNumber={3}
          price={120000}
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          image="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          title="The Westminster – Long Heritage Trench Coat"
          label="Relaxed fit"
          colorsNumber={3}
          price={120000}
        />
      </div>
    </div>
  </Recomendations>);
