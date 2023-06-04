import React from "react";
import styled from "styled-components";

const InfoTextComponent = styled.p`
  font-size: 14px;
  color: #9E9E9E;
  text-align: center;
`;

function InfoText (props) {
  return(
    <InfoTextComponent {...props}>
      {props.children}
    </InfoTextComponent>
  );
}

export default InfoText;