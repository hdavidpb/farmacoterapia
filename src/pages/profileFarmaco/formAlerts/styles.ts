import styled from "styled-components";

interface IProps {
  height?: "100%";
}

export const FormContainer = styled.form`
  position: relative;
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
export const TableChecksContainer = styled.div`
  width: 100%;
  height: ${({ height }: IProps) => (height ? height : "auto")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;
export const TitlesChecks = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  background: var(--color-principal) 0% 0% no-repeat padding-box;
  background: #cdcffe 0% 0% no-repeat padding-box;
  border-radius: 6px;
  padding: 6px;
  margin-bottom: 0;
`;

export const ChecksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
`;
export const CkecksItems = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;

  & p {
    margin-bottom: 0;
    font-size: 1vw;
    color: #4e5c6e;
  }
  & input {
    border-radius: 50%;
    visibility: hidden;

    &:checked + label {
      background-color: #cdcffe;
      border: solid 2px #8080806b;
    }

    &:checked + label::after {
      opacity: 1;
    }
  }
`;

export const LabelInput = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 13px;
  left: 0;
  position: absolute;
  top: 15%;
  width: 13px;

  &:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 10px;
`;

export const BtnSave = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background: var(--unnamed-color-4e5c6e) 0% 0% no-repeat padding-box;
  background: #4e5c6e 0% 0% no-repeat padding-box;
  border-radius: 6px;
  padding: 6px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: all 0.4s;
  margin-top: 1rem;
  &:hover {
    transform: scale(1.1);
  }
  & p {
    margin-bottom: 0;
    font-size: 1vw;
  }
`;

export const BtnBackContainer = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 0;
  left: -10%;
`;
