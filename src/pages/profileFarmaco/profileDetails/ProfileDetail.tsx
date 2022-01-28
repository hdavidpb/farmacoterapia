import React from "react";
import { ProfileContainer } from "../styles";
import HeaderDetrail from "./HeaderDetrail";
import MenuOptions from "./MenuOptions";

import GraphBar from "./GraphBar";
const ProfileDetail = () => {
  return (
    <ProfileContainer>
      <HeaderDetrail />
      <MenuOptions />

      <GraphBar />
    </ProfileContainer>
  );
};

export default ProfileDetail;
