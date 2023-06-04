import React from "react";
import styled from "styled-components";

const FilterFormNavBarComponent = styled.div`
  padding: 24px 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const LeftButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100px;
`;
const RightButtonContainer = styled(LeftButtonContainer)`
  justify-content: flex-end;
`;
const Button = styled.button`
  font-weight: 400;
  font-size: 16px;
  color: var(--color-cold-gray);
`;
const Title = styled.h4`
  font-weight: 500;
  font-size: 20px;
`;

function FilterFormNavBar ({rOnClick, lOnClick}) {
  return(
    <FilterFormNavBarComponent>
      <LeftButtonContainer>
        <Button type="button" onClick={lOnClick ? lOnClick : null}>Закрыть</Button>
      </LeftButtonContainer>
      <Title>Фильтры</Title>
      <RightButtonContainer>
        <Button type="button" onClick={rOnClick ? rOnClick : null}>Сбросить все</Button>
      </RightButtonContainer>
    </FilterFormNavBarComponent>
  );
}

export default FilterFormNavBar;