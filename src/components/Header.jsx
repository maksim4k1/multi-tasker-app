import React from "react";
import styled from "styled-components";
import LogoIcon from "../assets/svg/LogoIcon";
import CloseIcon from "../assets/svg/CloseIcon";
import { gap, max_lines } from "../styles/mixins";
import AppLink from "./UI/Links/AppLink";

const HeaderComponent = styled.header`
  padding: 24px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: ${gap("16px")}
`;
const LeftIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightIcon = styled(LeftIcon)`
  margin: 0 0 0 auto;
`;
const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: var(--color-logo);
  max-lines: ${max_lines(1)};
`;

function Header ({title="MULTI-TASKER", lIcon=<LogoIcon/>, rIcon=<CloseIcon/>, lLink=null, rLink=null, rOnClick=null, lOnClick=null}) {
  function component(icon, onClick, link){
    if(icon){
      if(!onClick && link){
        return <AppLink to={link}><RightIcon>{icon}</RightIcon></AppLink>
      } else if(onClick && !link){
        return <button onClick={onClick}><RightIcon>{icon}</RightIcon></button>
      } else{
        return <AppLink onClick={onClick} to={link}><RightIcon>{icon}</RightIcon></AppLink>
      }
    }
    return null;
  }

  return(
    <HeaderComponent>
      <Info>
        {
          component(lIcon, lOnClick, lLink)
        }
        <Title>{title}</Title>
      </Info>
      {
        component(rIcon, rOnClick, rLink)
      }
    </HeaderComponent>
  );
}

export default Header;