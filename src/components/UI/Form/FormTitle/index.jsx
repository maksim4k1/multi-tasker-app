import React from "react";
import styled from "styled-components";

const FormTitleComponent = styled.h2`
  margin: 0 0 8px;
  font-weight: 500;
  font-size: 24px;
  color: var(--color-logo);
`;

function FormTitle (props) {
  return(
    <FormTitleComponent>
      {props.children}
    </FormTitleComponent>
  );
}

export default FormTitle;