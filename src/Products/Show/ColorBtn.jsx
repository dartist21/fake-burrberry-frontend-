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
  background-color: ${props => props.value};
`;

export default function ColorBtn(props) {
  return (
    <ColorBtnStyled
      value={props.value}
      isActive={props.isActive}
      onClick={props.onClick}
      type="button"
    >
      Choose {props.name} color
    </ColorBtnStyled>
  );
}

ColorBtn.propTypes = {
  value: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
