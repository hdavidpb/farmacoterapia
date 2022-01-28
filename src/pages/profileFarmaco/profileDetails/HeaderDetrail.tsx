import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";
import * as sc from "./styles";
const HeaderDetrail = () => {
  return (
    <sc.HeaderDetail>
      <sc.ButtonBackContainer>
        <FaAngleLeft size={30} color="#4E5C6E" />
      </sc.ButtonBackContainer>
      <sc.PatientDataContainer>
        <sc.DescContainer>
          <h6>Nombre</h6>
          <p>Belia Esther Camargo Marriaga</p>
        </sc.DescContainer>
        <sc.DescContainer>
          <h6>Edad</h6>
          <p>51 Años</p>
        </sc.DescContainer>
        <sc.DescContainer>
          <h6>Identificación</h6>
          <p>32783474</p>
        </sc.DescContainer>
        <sc.DescContainer>
          <h6>Género:</h6>
          <p>Femenino</p>
        </sc.DescContainer>
      </sc.PatientDataContainer>
      <sc.AlertsButton>
        <BsFillBellFill size={20} />
        <h6>Alertas</h6>
      </sc.AlertsButton>
    </sc.HeaderDetail>
  );
};

export default HeaderDetrail;
