import React from "react";
import styled from "styled-components";

const ColorBtn = styled.button`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 0;
  margin-right: 1rem;
  padding: 0;
  border: 0;
  border-radius: 50%;
  font-size: 0;

  border: ${props => (props.active ? "solid 1px #232122" : "none")};
  background-color: ${props => props.colorValue};
`;

export default props => {
  return (
    <ColorBtn colorValue={props.colorValue} active={props.active} type="button">
      Choose {props.colorName} color
    </ColorBtn>
  );
};
