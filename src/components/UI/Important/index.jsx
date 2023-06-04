import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import { Importance } from "../../../utils/constants";

const ImportantComponent = styled.ul`
  width: 60px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${gap("4px")}
`;
const Item = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: var(--color-secondary);
`;

function Important ({importance}) {
  return(
    <ImportantComponent>
      {
        importance === Importance.very_important ?
        <><Item style={{background: "var(--color-period-red)"}}/><Item style={{background: "var(--color-period-red)"}}/><Item style={{background: "var(--color-period-red)"}}/><Item style={{background: "var(--color-period-red)"}}/></>
        : importance === Importance.important ?
        <><Item/><Item style={{background: "var(--color-period-orange)"}}/><Item style={{background: "var(--color-period-orange)"}}/><Item style={{background: "var(--color-period-orange)"}}/></>
        : importance === Importance.low_important ?
        <><Item/><Item/><Item style={{background: "var(--color-period-yellow)"}}/><Item style={{background: "var(--color-period-yellow)"}}/></>
        : importance === Importance.not_important ?
        <><Item/><Item/><Item/><Item style={{background: "var(--color-period-green)"}}/></>
        : <><Item/><Item/><Item/><Item/></>
      }
    </ImportantComponent>
  );
}

export default Important;