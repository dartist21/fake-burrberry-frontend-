import React from "react";
import styled from "styled-components";

const PropertiesButtons = styled.div`
  margin: 0 0.5rem;

  @media (min-width: 48rem) {
    margin: 0;
  }
`;

const Button = styled.button`
  width: 100%;
  margin: 0;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border: 0;
  border: solid 1px #171717;
  border-radius: 2px;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.17;

  background-color: ${props => props.color};
  color: ${props => props.label};
`;

export default props => {
  return (
    <Button color={props.color} label={props.label} type="button">
      {props.children}
    </Button>
  );
};
