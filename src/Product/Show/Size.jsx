import React from 'react';
import styled from 'styled-components';

const Size = styled.div`
  display: none;
  @media screen and (min-width: 62rem) {
    display: inline-block;
    margin-top: 3rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedSize = styled.p`
  display: inline-block;
  margin: 0;
  margin-right: 5.5rem;
  padding: 0;
  font-size: .75rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1rem;
  color: #171717;
`;

const Selection = styled.strong`font-weight: bold;`;

const Options = styled.div`margin-top: 1rem;`;

const Button = styled.button`
  display: inline-block;
  margin: 0;
  margin-right: .5rem;
  padding: .5rem 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: ${props => (props.isSelected ? 'bold' : 'normal')};
  line-height: 1rem;
  text-align: center;
  color: #171717;
  background: transparent;
  border-radius: .125rem;
  border: none;
  box-shadow: inset 0px 0px 0px 1px #171717;
`;

const Help = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 1rem;
  color: #171717;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export default () =>
  (<Size>
    <Header>
      <SelectedSize>
        Size: <Selection>XL</Selection>
      </SelectedSize>
      <Help>Need size help?</Help>
    </Header>
    <Options>
      <Button>S</Button>
      <Button>M</Button>
      <Button>L</Button>
      <Button isSelected>XL</Button>
    </Options>
  </Size>);
