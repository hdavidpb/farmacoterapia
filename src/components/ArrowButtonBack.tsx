import { ButtonBackContainer } from "@pages/profileFarmaco/profileDetails/styles";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface IProps {
  route: string | number;
}

const ArrowButtonBack = ({ route }: IProps) => {
  const navigate = useNavigate();
  return (
    //@ts-ignore
    <ButtonBackContainer type="button" onClick={() => navigate(route)}>
      <FaAngleLeft size={30} color="#4E5C6E" />
    </ButtonBackContainer>
  );
};

export default ArrowButtonBack;
