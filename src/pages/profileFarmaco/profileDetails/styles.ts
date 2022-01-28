import styled from "styled-components";

interface IProps {
  ckecked?: boolean;
}

export const HeaderDetail = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 49px auto 120px;

  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
`;

export const ButtonBackContainer = styled.button`
  width: auto;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #cdcffe 0% 0% no-repeat padding-box;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export const AlertsButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  color: #4e5c6e;
  cursor: pointer;
  border: none;
  & h6 {
    margin-bottom: 0;
    font-size: 15px;
    font-weight: bold;
    color: #4e5c6e;
  }
`;

export const PatientDataContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: #ebecff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  padding: 6px;
`;

export const DescContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & h6 {
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 600;
  }
  & p {
    margin-bottom: 0;
    font-size: 15px;
  }
`;

export const MenuOptionsCntainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const MonthsOptions = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    background: #4e5c6e 0% 0% no-repeat padding-box;
    border-radius: 6px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const ArrowBtn = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4e5c6e 0% 0% no-repeat padding-box;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ChecksContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & h6 {
    margin-bottom: 0;
    font-size: 15px;
    color: #4e5c6e;
    font-weight: bold;
  }
`;

export const Check = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4e5c6e 0% 0% no-repeat padding-box;
  border-radius: 6px;
  cursor: pointer;
  opacity: ${({ ckecked }: IProps) => (ckecked ? 0.4 : 1)};

  & span {
    width: 8px;
    height: 8px;
    background: #cdcffe 0% 0% no-repeat padding-box;
    border-radius: 50%;
  }
`;

export const GraphContainer = styled.div`
  position: relative;
  width: 65vw;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.5rem;

  & label {
    position: absolute;
    margin-bottom: 0;
    font-size: 17px;
    font-weight: bold;
    color: #4e5c6e;
    left: -10%;
    transform: rotate(-90deg);
  }

  @media (min-width: 1920px) {
    margin-top: 3rem;
    width: 70vw;
  }
`;
