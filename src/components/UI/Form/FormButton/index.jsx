import React from "react";
import styled from "styled-components";
import Button from "../../Buttons/Button";

const FormButtonComponent = styled(Button)`
  margin: 30px 0 0;
`;

function FormButton (props) {
  return(
    <FormButtonComponent {...props}>
      {props.children}
    </FormButtonComponent>
  );
}

export default FormButton;