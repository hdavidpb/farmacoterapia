import { themes } from "@assets/themes/theme";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
interface IProps {
  heightWidth?: string;
}
export const SideBarContainer = styled.div`
  position: relative;
  width: 80%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  grid-column: 1/2;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.164);
  background: #cdcffe;
`;

export const ListModules = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

export const ModulesItem = styled(NavLink)`
  width: 100%;
  height: 60px;
  /* border: solid 1px white; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s;
  &:hover {
    background: white;
  }
`;

export const TitleModule = styled.p`
  width: 70%;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 0;
  color: ${themes.titleColor};

  @media (max-width: 1365px) {
    font-size: 12px;
  }
`;

export const Footer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  bottom: 4vh;
`;
export const ExitHeader = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  & p {
    margin-bottom: 0;
    width: 50%;
    text-align: center;
    font-size: 17px;
    color: #4e5c6e;
    font-weight: 600;
  }
`;
export const CloseIconContainer = styled.div`
  width: 20%;
  font-size: 17px;
  color: #4e5c6e;
`;

export const WaterMarc = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  font-size: 13px;
  color: #4e5c6e;
  font-weight: 600;
`;

export const SmallIconCaontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: IProps) => (props.heightWidth ? props.heightWidth : "20px")};
  height: ${(props: IProps) =>
    props.heightWidth ? props.heightWidth : "20px"};
  font-weight: 200;
  color: #4e5c6e;
`;
