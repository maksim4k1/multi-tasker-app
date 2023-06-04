import React from "react";
import styled from "styled-components";
import userPhoto from "../../../assets/png/userPhoto.png";

const UserPhotoComponent = styled.img`
  object-fit: cover;
  border-radius: 50%;
  border: none;
  margin: auto;
`;

function UserPhoto (props) {
  return(
    <UserPhotoComponent {...props} src={props.src ? props.src : userPhoto} style={{width: props.size || "0px", height: props.size || "0px"}} />
  );
}

export default UserPhoto;