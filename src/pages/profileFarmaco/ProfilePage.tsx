import React from "react";
import { Outlet } from "react-router-dom";

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
      <sc.FooterDescContainer>
        <sc.DescContainer>
          <h6>Contraindicadas</h6>
          <span></span>
        </sc.DescContainer>
        <sc.DescContainer>
          <h6>Moderadas</h6>
          <span></span>
        </sc.DescContainer>
        <sc.DescContainer>
          <h6>Leves</h6>
          <span></span>
        </sc.DescContainer>
        <sc.DescContainer>
          <h6>Disponible</h6>
          <span></span>
        </sc.DescContainer>
        <sc.DescContainer>
          <h6>Vacío</h6>
          <span></span>
        </sc.DescContainer>
      </sc.FooterDescContainer>
    </sc.ProfileContainer>
  );
};

export default ProfilePage;
