import React from "react";
import styled from "styled-components";
import { gap } from "../../../../styles/mixins";

const FilterFormComponent = styled.form`
  display: flex;
  flex-flow: column;
  gap: ${gap("24px")}
`;

function FilterForm (props) {
  return(
    <FilterFormComponent {...props}>
      {props.children}
    </FilterFormComponent>
  );
}

export default FilterForm;