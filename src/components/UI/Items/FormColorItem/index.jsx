import React from "react";
import styled from "styled-components";

const ColorItem = styled.option`
  width: 48px;
  height: 48px;
  border: 4px solid var(--color-white);
  border-radius: 8px;
`;

function FormColorItem ({color}) {
  return(
    <ColorItem type="button" style={{background: color}}/>
  );
}

export default FormColorItem;