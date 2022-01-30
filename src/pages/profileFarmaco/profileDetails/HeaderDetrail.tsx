import ArrowButtonBack from "@components/ArrowButtonBack";
import { setShowAlerts } from "@redux/features/alerts/alertsSlice";
import { RootState } from "@redux/store";
import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as sc from "./styles";
const HeaderDetrail = () => {
  const dispatch = useDispatch();
  const { showAlerts } = useSelector((store: RootState) => store.alerts);
  return (
    <sc.HeaderDetail>
      <ArrowButtonBack route="/profile" />
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
      <sc.AlertsButton
        showAlerts={showAlerts}
        onClick={() => dispatch(setShowAlerts())}
      >
        <BsFillBellFill size={20} />
        <h6>Alertas</h6>
      </sc.AlertsButton>
    </sc.HeaderDetail>
  );
};

export default HeaderDetrail;
