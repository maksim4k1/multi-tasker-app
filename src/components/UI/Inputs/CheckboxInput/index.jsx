import React from "react";
import styled from "styled-components";
import CheckboxIcon from "../../../../assets/svg/CheckboxIcon";

const CheckboxInputComponent = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const CheckboxTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: var(--color-text);
`;
const CheckboxOption = styled.option`
  width: 24px;
  height: 24px;
  border: 3px solid var(--color-cold-gray);
  border-radius: 2px;
`;
const Input = styled.input`
  display: none;
  &:checked ~ option{
    border-color: var(--color-acent);
  }
  &:checked ~ div{
    opacity: 1;
  }
`;
const CheckBoxIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;

function CheckboxInput (props) {
  return(
    <CheckboxInputComponent>
      <CheckboxTitle>{props.title}</CheckboxTitle>
      <Input
        type="checkbox"
        {...props}
      />
      <CheckboxOption></CheckboxOption>
      <CheckBoxIconContainer>
        <CheckboxIcon/>
      </CheckBoxIconContainer>
    </CheckboxInputComponent>
  );
}

export default CheckboxInput;