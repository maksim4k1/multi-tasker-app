import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon";
import Header from "../../components/Header";
import Button from "../../components/UI/Buttons/Button";
import DeleteButton from "../../components/UI/Buttons/DeleteButton";
import Form from "../../components/UI/Form/Form";
import Input from "../../components/UI/Inputs/Input";
import Main from "../../components/UI/Main";
import { connect } from "react-redux";
import editPhotoAction from "../../redux/actions/profile/editPhotoAction";
import InfoState from "../../components/UI/Info/InfoState";
import UserPhoto from "../../components/UI/UserPhoto";
import convertImageToBase64 from "../../utils/convertImageToBase64";
import CreateButton from "../../components/UI/Buttons/CreateButton";
import { gap } from "../../styles/mixins";

const Image = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputBlock = styled(CreateButton)`
  position: relative;
  overflow: hidden;
`;
const FileInput = styled(Input)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;
const Buttons = styled.div`
  margin: 76px 0 0;
  display: flex;
  flex-flow: column;
  gap: ${gap("16px")}
`;

function EditPhotoPage ({state, photo, editPhoto}) {
  const [newPhoto, setNewPhoto] = useState(photo);
  const navigate = useNavigate();

  async function onChangeHandler(event){
    setNewPhoto(await convertImageToBase64(event.target.files[0]));
    state.error = "";
  }

  function onSubmitHandler(event){
    event.preventDefault();

    editPhoto(newPhoto, () => navigate("/profile"));
  }

  function deletePhoto(){
    editPhoto("", () => navigate("/profile"));
  }

  return(
    <Main>
      <Header title="Изменить пароль" lIcon={<LeftArrowIcon/>} lLink="/profile" rIcon={null} />
      <Form onSubmit={onSubmitHandler}>
        <Image><UserPhoto src={newPhoto || null} size="112px" /></Image>
        <InputBlock>
          Загрузить фото
          <FileInput
            name="photo"
            onChange={onChangeHandler}
            type="file"
            accept="image/*"
          />
        </InputBlock>
        <InfoState state={state} />
        <Buttons>
          <Button disabled={state.loading} type="submit">Сохранить</Button>
          <DeleteButton onClick={deletePhoto} disabled={state.loading} type="button">Удалить фото</DeleteButton>
        </Buttons>
      </Form>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  state: state.auth.editPhotoState,
  photo: state.auth.profile ? state.auth.profile.photo : null
});
const mapDispatchToProps = {
  editPhoto: editPhotoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPhotoPage);