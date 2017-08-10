import React from "react";
import styled from "styled-components";

const RecommendationCard = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  text-decoration: none;
  flex-basis: 130px;

  @media (min-width: 48rem) {
    margin-bottom: 4rem;
  }
`;

const Image = styled.img`width: 100%;`;

const Title = styled.h3`
  margin: 0.5rem 0;
  color: #111111;
  font-family: Lora, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19;

  @media (min-width: 48rem) {
    margin: 1.5rem 0 1rem 0;
  }
`;

const Price = styled.h5`
  margin: 0;
  padding-left: 1px;

  color: #999999;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.17;

  @media (min-width: 48rem) {
    padding-left: 0;
  }
`;

export default props => {
  return (
    <RecommendationCard>
      <Image alt={props.alt} src={props.image} />
      <Title>
        {props.title}
      </Title>
      <Price>
        {props.price}
      </Price>
    </RecommendationCard>
  );
};
