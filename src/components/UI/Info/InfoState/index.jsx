import React from "react";
import styled from "styled-components";
import LoadingIcon from "../../../../assets/svg/LoadingIcon";

const InfoStateComponent = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: var(--color-dark-red);
`;
const LoadingBlock = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin { 
    from { 
        transform: rotate(0deg); 
    } to { 
        transform: rotate(360deg); 
    }
  }
`;

function InfoState ({state, children}) {
  return(
    <>
      {
        state.loading ?
        <LoadingBlock><LoadingIcon/></LoadingBlock>
        : state.failing ?
        <InfoStateComponent>{state.error}</InfoStateComponent>
        : children
      }
    </>
  );
}

export default InfoState;