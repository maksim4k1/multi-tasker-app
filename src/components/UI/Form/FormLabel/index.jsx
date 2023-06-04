import React from "react";
import styled from "styled-components";
import Label from "../../Label";

const FormLabelComponent = styled(Label)`
  margin: 0 0 -12px;
`;

function FormLabel (props) {
  return(
    <FormLabelComponent {...props}>
      {props.children}
    </FormLabelComponent>
  );
}

export default FormLabel;