import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Category from './Category';
import Card from '../Card';
import Hr from '../../Common/Hr';

const SectionTitle = styled.h2`
  margin: 0;
  font-family: Lora, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.18;
  color: #171717;
  font-weight: 500;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const Showing = styled.p`
  margin: 3rem 0 1rem 0;
  font-family: Lora, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  line-height: 1;
`;

const ShowMore = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 5rem;
  padding: 1rem 2rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.34;
  color: #171717;
  background-color: #fff;
  border: 1px solid #171717;
  border-radius: 2px;
`;

export default () =>
  (<main>
    <Helmet>
      <title>Men’s Clothing | Burberry</title>
      <meta
        name="description"
        content="Shop from the current men’s clothing collection. Sartorial suits,
        shirts and trousers feature as well as casual T-shirts, polos and jeans."
      />
    </Helmet>
    <Category />
    <div className="container">
      <SectionTitle>Heritage Trench Coats</SectionTitle>
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
      <Hr />
      <SectionTitle>Heritage Trench Coats</SectionTitle>
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
            title="The Westminster – Long Heritage Trench"
            label="Relaxed fit"
            colorsNumber={3}
            price={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            image="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            title="The Westminster – Long Heritage Trench"
            label="Relaxed fit"
            colorsNumber={3}
            price={120000}
          />
        </div>
      </div>
      <Showing>Showing 8 of 17</Showing>
      <ShowMore type="button">View 9 more</ShowMore>
    </div>
  </main>);
