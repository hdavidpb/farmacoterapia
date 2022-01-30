import React from "react";
import { useNavigate } from "react-router-dom";

import * as sc from "./styles";

const AlertsTable = () => {
  const navigate = useNavigate();

  const handleGoToForm = (id: string = "120") => {
    navigate(`/alertas-sanitarias/${id}`);
  };

  return (
    <sc.AlertsTableContainer>
      <sc.HeaderTitle>
        <sc.TitleDesc>Fecha</sc.TitleDesc>
        <sc.TitleDesc>Tipo</sc.TitleDesc>
        <sc.TitleDesc gridColum={true}>Descripción</sc.TitleDesc>
        <sc.TitleDesc>Intervenido</sc.TitleDesc>
      </sc.HeaderTitle>
      <sc.TableListContaienr>
        <sc.ListGrid onClick={() => handleGoToForm()}>
          <sc.GridDesc>15 / 07 / 2021</sc.GridDesc>
          <sc.GridDesc>Interacción</sc.GridDesc>
          <sc.GridDesc gridColum={true}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </sc.GridDesc>
          <sc.GridDesc>NO</sc.GridDesc>
        </sc.ListGrid>
        <sc.ListGrid>
          <sc.GridDesc>15 / 07 / 2021</sc.GridDesc>
          <sc.GridDesc>Interacción</sc.GridDesc>
          <sc.GridDesc gridColum={true}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </sc.GridDesc>
          <sc.GridDesc>NO</sc.GridDesc>
        </sc.ListGrid>
        <sc.ListGrid>
          <sc.GridDesc>15 / 07 / 2021</sc.GridDesc>
          <sc.GridDesc>Interacción</sc.GridDesc>
          <sc.GridDesc gridColum={true}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </sc.GridDesc>
          <sc.GridDesc>NO</sc.GridDesc>
        </sc.ListGrid>
        <sc.ListGrid>
          <sc.GridDesc>15 / 07 / 2021</sc.GridDesc>
          <sc.GridDesc>Interacción</sc.GridDesc>
          <sc.GridDesc gridColum={true}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </sc.GridDesc>
          <sc.GridDesc>NO</sc.GridDesc>
        </sc.ListGrid>
        <sc.ListGrid>
          <sc.GridDesc>15 / 07 / 2021</sc.GridDesc>
          <sc.GridDesc>Interacción</sc.GridDesc>
          <sc.GridDesc gridColum={true}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </sc.GridDesc>
          <sc.GridDesc>NO</sc.GridDesc>
        </sc.ListGrid>
        <sc.ListGrid>
          <sc.GridDesc>15 / 07 / 2021</sc.GridDesc>
          <sc.GridDesc>Interacción</sc.GridDesc>
          <sc.GridDesc gridColum={true}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </sc.GridDesc>
          <sc.GridDesc>NO</sc.GridDesc>
        </sc.ListGrid>
        <sc.ListGrid>
          <sc.GridDesc>15 / 07 / 2021</sc.GridDesc>
          <sc.GridDesc>Interacción</sc.GridDesc>
          <sc.GridDesc gridColum={true}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </sc.GridDesc>
          <sc.GridDesc>NO</sc.GridDesc>
        </sc.ListGrid>
        <sc.ListGrid>
          <sc.GridDesc>15 / 07 / 2021</sc.GridDesc>
          <sc.GridDesc>Interacción</sc.GridDesc>
          <sc.GridDesc gridColum={true}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </sc.GridDesc>
          <sc.GridDesc>NO</sc.GridDesc>
        </sc.ListGrid>
        <sc.ListGrid>
          <sc.GridDesc>15 / 07 / 2021</sc.GridDesc>
          <sc.GridDesc>Interacción</sc.GridDesc>
          <sc.GridDesc gridColum={true}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </sc.GridDesc>
          <sc.GridDesc>NO</sc.GridDesc>
        </sc.ListGrid>
      </sc.TableListContaienr>
    </sc.AlertsTableContainer>
  );
};

export default AlertsTable;
