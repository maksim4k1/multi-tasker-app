import React from "react";
import styled from "styled-components";
import ImportantButton from "../../Buttons/InportantButton";

const RadioInputComponent = styled.label`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
`;
const RadioOption = styled.option`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 10px;
  background: var(--color-acent);
  opacity: 0;
`;
const Input = styled.input`
  display: none;
  &:checked ~ option{
    opacity: 0.1;
  }
`;

function RadioInput (props) {
  return(
    <RadioInputComponent>
      <Input
        defaultChecked={(props.importance && props.importance === props.value) ? true : false}
        name="importance"
        type="radio"
        {...props}
      />
      <RadioOption></RadioOption>
      <ImportantButton type="button" importance={props.value}>{props.title}</ImportantButton>
    </RadioInputComponent>
  );
}

export default RadioInput;