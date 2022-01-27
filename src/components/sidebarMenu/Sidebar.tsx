import React from "react";
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { BiExit } from "react-icons/bi";
import * as sc from "./styles";
import "../../styles.css";
const Sidebar = () => {
  return (
    <sc.SideBarContainer>
      <sc.ListModules>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active_link modules__titem" : "modules__titem"
          }
          to="/profile"
          end
        >
          <sc.TitleModule>Perfil Farmacoterapéutico</sc.TitleModule>
          <sc.SmallIconCaontainer>
            <RiArrowRightSLine size={40} />
          </sc.SmallIconCaontainer>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active_link modules__titem" : "modules__titem"
          }
          to="/intervenciones"
          end
        >
          <sc.TitleModule>Intervenciones</sc.TitleModule>
          <sc.SmallIconCaontainer>
            <RiArrowRightSLine size={40} />
          </sc.SmallIconCaontainer>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active_link modules__titem" : "modules__titem"
          }
          to="/conciliaciones"
          end
        >
          <sc.TitleModule>Conciliaciones</sc.TitleModule>
          <sc.SmallIconCaontainer>
            <RiArrowRightSLine size={40} />
          </sc.SmallIconCaontainer>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active_link modules__titem" : "modules__titem"
          }
          to="/alertas-sanitarias"
          end
        >
          <sc.TitleModule>Alertas Sanitarias</sc.TitleModule>
          <sc.SmallIconCaontainer>
            <RiArrowRightSLine size={40} />
          </sc.SmallIconCaontainer>
        </NavLink>
      </sc.ListModules>
      <sc.Footer>
        <sc.ExitHeader to="/hygea">
          <p>Salir</p>
          <sc.CloseIconContainer>
            <BiExit />
          </sc.CloseIconContainer>
        </sc.ExitHeader>
        <sc.WaterMarc>Developed by LYA ELECTRONIC v:0.0.1</sc.WaterMarc>
      </sc.Footer>
    </sc.SideBarContainer>
  );
};

export default Sidebar;
