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

  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.colorValue};
`;

export default function ColorBtn(props) {
  return (
    <ColorBtnStyled colorValue={props.colorValue} active={props.active} type="button">
      Choose {props.colorName} color
    </ColorBtnStyled>
  );
}

ColorBtn.propTypes = {
  colorValue: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  colorName: PropTypes.string.isRequired,
};

ColorBtn.defaultProps = {
  active: false,
};
