import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 2/6;
  padding-right: 2rem;
  padding-top: 1rem;
`;

export const TowersContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const TowerGridContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 6px;
`;

export const TowerContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const TowerTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  background: #3f4a59 0% 0% no-repeat padding-box;
  border-radius: 6px;
  color: #ffffff;
`;

export const PavillionsListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3px;
  gap: 4px;
  overflow-y: scroll;
  box-shadow: 2px 2px 2px #00000026;
  border-radius: 6px;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3f4a59;
    border-radius: 10px;
  }
`;

export const PavilionContainer = styled.div`
  width: 100%;
  height: 77px;
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
`;

export const PavillionNameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  background: #3f4a59;
  color: #ffffff;
  border-radius: 6px 0 0 6px;
  font-size: 15px;
`;

export const PavillionsRoomsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: flex-start;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
  background: #e0e3f9;
  padding: 6px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3f4a59;
    border-radius: 10px;
  }
`;

export const RoomContainer = styled.div`
  width: 25px;
  height: 17px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 7px;
  background: #ff871e;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FooterDescContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px -5px 10px #00000024;
  padding: 10px;
  gap: 1rem;
`;

export const DescContainer = styled.div`
  width: 121px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & h6 {
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 400;
    color: #003d81;
  }

  & span {
    width: 60%;
    height: 20px;
    background: #ff0000 0% 0% no-repeat padding-box;
    border-radius: 12px;
  }
`;
