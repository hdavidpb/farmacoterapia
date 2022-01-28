import React from "react";

import * as sc from "./styles";
import Tower from "./Tower";

const ProfilePage = () => {
  return (
    <sc.ProfileContainer>
      <sc.TowersContainer>
        <sc.TowerGridContainer>
          <Tower />
          <Tower />
          <Tower />
        </sc.TowerGridContainer>
      </sc.TowersContainer>
    </sc.ProfileContainer>
  );
};

export default ProfilePage;
