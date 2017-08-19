import React from 'react';
import styled from 'styled-components';
import Option from './Option';

const Filter = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow: scroll;
`;

const Refine = styled.p`
  margin: 2rem 2rem 0 0.5rem;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.42;
  color: #171717;
  font-weight: 400;
  flex-shrink: 0;
`;
export default () =>
  (<Filter>
    <Refine>Refine by</Refine>
    <Option value="Category" />
    <Option value="Colour" />
    <Option value="Size" />
    <Option value="Sort by price" />
  </Filter>);
