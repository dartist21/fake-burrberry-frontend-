import React from 'react';
import styled from 'styled-components';

import triangle from '../assets/img/triangle.svg';

const ReadMoreAccordion = styled.section`
  padding: 0 0.5rem;
  border-bottom: 1px solid #c6c6c6;

  p {
    margin: 0;

    color: #171717;

    font-family: Lora, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.715;
  }

  ul {
    margin: 1.5rem 0 2rem 0;
    padding: 0;
  }

  li {
    list-style-type: none;

    color: #171717;

    font-family: Lora, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.715;
  }

  @media (min-width: 48rem) {
    padding: 0 1rem 0 0;
    border-bottom: 0;

    ul {
      margin-bottom: 1.5rem;
    }

    ${props => (props.mobile ? 'display: none' : '')};
  }
`;

const Button = styled.button`
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
  border: 0;
  background-color: #fff;
`;

const Title = styled.h2`
  position: relative;
  margin: 2rem 0;
  text-transform: uppercase;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;

  ::after {
    position: absolute;
    top: 50%;
    right: 0;

    width: 10px;
    height: 10px;

    content: "";
    transform: translateY(-50%);
    background-image: url(${triangle});

    ${props => (props.active ? 'transform: translateY(-50%) rotate(180deg);' : '')};
  }

  @media (min-width: 48rem) {
    margin: 1.5rem 0 1rem 0;

    ::after {
      display: none;
    }
  }

  @media (min-width: 62rem) {
    margin: 0rem 0 1rem 0;
  }
`;

export default props => (
  <ReadMoreAccordion mobile={props.mobile}>
    <Button type="button">
      <Title active={props.active}>
        {props.title}
      </Title>
    </Button>
    {props.children}
  </ReadMoreAccordion>
);
