import React from "react";
import { ProfileContainer } from "../styles";
import { FaAngleLeft } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import * as sc from "./styles";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
const ProfileDetail = () => {
  return (
    <ProfileContainer>
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
      <sc.MenuOptionsCntainer>
        <sc.MonthsOptions>
          <sc.ArrowBtn>
            <RiArrowDropLeftLine color="#FFFFFF" size={25} />
          </sc.ArrowBtn>
          <span>Enero</span>
          <sc.ArrowBtn>
            <RiArrowDropRightLine color="#FFFFFF" size={25} />
          </sc.ArrowBtn>
        </sc.MonthsOptions>
        <sc.ChecksContainer>
          <sc.Check ckecked={false}>
            <span></span>
          </sc.Check>
          <h6>Dispositivos</h6>
        </sc.ChecksContainer>
        <sc.ChecksContainer>
          <sc.Check ckecked={true}>
            <span></span>
          </sc.Check>
          <h6>Medicamentos</h6>
        </sc.ChecksContainer>
      </sc.MenuOptionsCntainer>
    </ProfileContainer>
  );
};

export default ProfileDetail;
