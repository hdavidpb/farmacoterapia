import React from "react";
import { ProfileContainer } from "../styles";
import HeaderDetrail from "./HeaderDetrail";
import MenuOptions from "./MenuOptions";

import GraphBar from "./GraphBar";
import AlertsTable from "../alerts/AlertsTable";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
const ProfileDetail = () => {
  const { showAlerts } = useSelector((store: RootState) => store.alerts);

  return (
    <ProfileContainer>
      <HeaderDetrail />
      <MenuOptions />

      {showAlerts ? <AlertsTable /> : <GraphBar />}
    </ProfileContainer>
  );
};

export default ProfileDetail;
