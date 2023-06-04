import React from "react";
import styled from "styled-components";

const InfoBlockComponent = styled.div`
  width: 100%;
  margin: auto 0 0;
  padding: 32px 0 0;
  display: flex;
  justify-content: center;
  border-top: 0.5px solid var(--color-black);
`;

function InfoBlock (props) {
  return(
    <InfoBlockComponent {...props}>
      {props.children}
    </InfoBlockComponent>
  );
}

export default InfoBlock;