import React from 'react';
import styled from 'styled-components';
import Option from './Option';

import { ToMedium } from '../../../../Common/BreakPoints';

const Filter = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow: scroll;
`;

const Refine = styled.p`
  margin: 2rem 2rem 0 0;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.42;
  color: #171717;
  font-weight: 400;
  flex-shrink: 0;
`;
export default () =>
  (<div className="container">
    <Filter>
      <ToMedium>
        <Refine>Refine by</Refine>
      </ToMedium>
      <Option value="Category" />
      <Option value="Colour" />
      <Option value="Size" />
      <Option right value="Sort by price" />
    </Filter>
  </div>);
