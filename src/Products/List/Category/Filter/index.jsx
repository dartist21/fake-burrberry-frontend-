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

export default () =>
  (<div className="container">
    <Filter>
      <Option value="Category" />
      <Option value="Colour" />
      <Option value="Size" />
      <Option right value="Sort by price" />
    </Filter>
  </div>);
