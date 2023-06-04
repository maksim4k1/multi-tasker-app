import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import ProfileButton from "../../components/UI/Buttons/ProfileButton";
import RedButton from "../../components/UI/Buttons/RedButton";
import AppLink from "../../components/UI/Links/AppLink";
import Main from "../../components/UI/Main";
import { gap } from "../../styles/mixins";
import { ActivePage } from "../../utils/constants";
import { connect } from "react-redux";
import logoutAction from "../../redux/actions/auth/logoutAction";
import { useNavigate } from "react-router-dom";
import UserPhoto from "../../components/UI/UserPhoto";
import EditPhotoIcon from "../../assets/svg/EditPhotoIcon";

const Image = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EditImageButton = styled(AppLink)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-cards-secondary-text);
  border-radius: 50%;
  transition: background 0.3s;
  &:hover{
    background: #555555;
  }
`;
const UserInfo = styled.div`
  margin: 0 0 24px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: ${gap("8px")}
`;
const Username = styled.h2`
  font-weight: 500;
  font-size: 24px;
`;
const Email = styled.h3`
  font-weight: 400;
  font-size: 16px;
  color: var(--color-cards-secondary-text);
`;
const Buttons = styled.div`
  display: flex;
  flex-flow: column;
`;

function ProfilePage ({profile, state, logout}) {
  const navigate = useNavigate();

  function onClickHandler(){
    logout(() => navigate("/"));
  }

  return(
    <Main>
      <Header title="Ваш профиль" lLink="/" rIcon={null} />
      <Image>
        <UserPhoto src={profile ? profile.photo : null} size="112px" />
        <EditImageButton to="/profile/edit/photo"><EditPhotoIcon/></EditImageButton>
      </Image>
      <UserInfo>
        <Username>{profile ? profile.username : null}</Username>
        <Email>{profile ? profile.email : null}</Email>
      </UserInfo>
      <Buttons>
        <AppLink to="/profile/edit/name"><ProfileButton>Редактировать имя</ProfileButton></AppLink>
        <AppLink to="/profile/edit/email"><ProfileButton>Редактировать Email</ProfileButton></AppLink>
        <AppLink to="/profile/edit/password"><ProfileButton style={{borderBottom: "1px solid #E8E8EE"}}>Сменить пароль</ProfileButton></AppLink>
      </Buttons>
      <RedButton disabled={state.loading} style={{marginTop: "auto"}} onClick={onClickHandler}>Выйти</RedButton>
      <NavBar active={ActivePage.user} />
    </Main>
  );
}

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  state: state.auth.logoutState
});
const mapDispatchToProps = {
  logout: logoutAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);