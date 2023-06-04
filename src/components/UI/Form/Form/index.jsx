import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const FormComponent = styled.form`
  display: flex;
  flex-flow: column;
  gap: ${gap("16px")}
`;

function Form (props) {
  return(
    <FormComponent {...props}>
      {props.children}
    </FormComponent>
  );
}

export default Form;