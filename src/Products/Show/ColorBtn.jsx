import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ColorBtnStyled = styled.button`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 0;
  margin-right: 1rem;
  padding: 0;
  border: 0;
  border-radius: 50%;
  font-size: 0;
  cursor: pointer;

  border: ${props => (props.isActive ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.color};
`;

export default function ColorBtn(props) {
  return (
    <ColorBtnStyled
      value={props.value}
      color={props.color}
      isActive={props.isActive}
      onClick={props.onClick}
      type="button"
      name="color"
    >
      Choose {props.color} color
    </ColorBtnStyled>
  );
}

ColorBtn.propTypes = {
  value: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
