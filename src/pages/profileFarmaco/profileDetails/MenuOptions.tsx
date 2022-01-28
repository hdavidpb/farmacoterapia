import React from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import * as sc from "./styles";

const MenuOptions = () => {
  return (
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
  );
};

export default MenuOptions;
