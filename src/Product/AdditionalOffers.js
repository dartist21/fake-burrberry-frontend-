import React from "react";
import styled from "styled-components";

const AdditionalOffers = styled.section`
  padding: 0 0.5rem 3rem 0.5rem;

  @media (min-width: 48rem) {
    display: none;
  }
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  color: #171717;
  border-bottom: 1px solid #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #171717;
  font-family: Lora, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.215;
`;

export default () => {
  return (
    <AdditionalOffers>
      <Title>MORE FOR YOU</Title>
      <Link>Men’s Black Trench Coats</Link>
      <Link>Men’s Short Trench Coats</Link>
      <Link>Men’s Long Trench Coats</Link>
    </AdditionalOffers>
  );
};
