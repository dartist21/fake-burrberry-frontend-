import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SizeStyled = styled.div`
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
  padding: 0;
  font-size: .75rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1rem;
  color: #171717;
`;

const Selection = styled.strong`font-weight: bold;`;

const Options = styled.div`margin-top: 1rem;`;

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

export default function Size(props) {
  return (
    <SizeStyled>
      <Header>
        {props.sizes.length && (
          <SelectedSize>
            Size: <Selection>{props.sizes[props.selectedSize].title}</Selection>
          </SelectedSize>
        )}
        <Help>Need size help?</Help>
      </Header>
      <Options>
        {props.children}
      </Options>
    </SizeStyled>
  );
}

Size.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedSize: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
