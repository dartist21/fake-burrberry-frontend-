import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SizeBtnStyled = styled.button`
  display: inline-block;
  margin: 0;
  margin-right: .5rem;
  padding: .5rem 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  line-height: 1rem;
  text-align: center;
  color: #171717;
  background: transparent;
  border-radius: .125rem;
  border: none;
  cursor: pointer;
  box-shadow: inset 0px 0px 0px 1px #171717;
`;

export default function SizeBtn(props) {
  return (
    <SizeBtnStyled
      value={props.value}
      isActive={props.isActive}
      onClick={props.onClick}
      type="button"
      name="size"
    >
      {props.size}
    </SizeBtnStyled>
  );
}

SizeBtn.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
