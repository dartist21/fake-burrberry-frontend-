import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../Card';

const StyledRecomendations = styled.section`
  padding: 0 0.5rem 1rem 0;

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
    margin-bottom: 0;
    padding-bottom: 1rem;
    margin-top: 3rem;
  }

  @media (min-width: 62rem) {
    padding-bottom: 2rem;
    text-align: center;
    margin-top: 4rem;
  }
`;

export default function Recomendations(props) {
  return (
    <StyledRecomendations>
      <Title>WE RECOMMEND</Title>
      <div className="row">
        {props.linkedProducts.length > 0 &&
          props.linkedProducts.map(linkedProduct =>
            (<div className="col-xs-6 col-md-3" key={linkedProduct.id}>
              <Card
                image={`${linkedProduct.images[0].replace(
                  'https:',
                  '',
                )}?$BBY_V2_ML_3X4$&hei=720&wid=540`}
                title={linkedProduct.title}
                // label="Relaxed fit"
                colorsNumber={linkedProduct.colours.length}
                price={Number(linkedProduct.multiCurrencyPrices.RUB) / 100}
                to={`/${props.match.params.category}/${props.match.params
                  .section}/${linkedProduct.slug}`}
              />
            </div>),
          )}
      </div>
    </StyledRecomendations>
  );
}

Recomendations.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
      section: PropTypes.string,
    }),
  }).isRequired,
  linkedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
