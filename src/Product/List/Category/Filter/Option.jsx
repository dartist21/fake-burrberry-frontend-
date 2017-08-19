import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from '../../../../assets/img/arrow.svg';

const OptionStyled = styled.button`
  flex-shrink: 0;
  margin: 2rem 1rem 0 0;
  padding: 0;
  border: none;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  background-color: #f3f3f3;
  font-weight: 400;
  cursor: pointer;
  &:after {
    content: "";
    display: inline-block;
    width: 13px;
    height: 6px;
    margin-left: 0.5rem;
    background-image: url(${arrow});
    background-size: cover;
    flex-shrink: 0;
`;

export default function Option(props) {
  return (
    <OptionStyled value={props.value}>
      {props.value}
    </OptionStyled>
  );
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
};
