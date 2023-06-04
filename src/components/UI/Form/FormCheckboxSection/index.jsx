import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const FormCheckboxSectionComponent = styled.div`
  padding: 24px 24px 0;
  display: flex;
  flex-flow: column;
  gap: ${gap("24px")}
  border-top: 1px solid var(--color-light-gray);
`;
const Title = styled.h5`
  font-weight: 400;
  font-size: 17px;
  color: var(--color-cold-gray);
`;

function FormCheckboxSection ({title, children}) {
  return(
    <FormCheckboxSectionComponent>
      <Title>{title}</Title>
      {
        children
      }
    </FormCheckboxSectionComponent>
  );
}

export default FormCheckboxSection;