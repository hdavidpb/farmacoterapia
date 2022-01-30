import styled from "styled-components";

interface IProps {
  gridColum?: boolean;
}

export const AlertsTableContainer = styled.div`
  position: relative;
  width: 65vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-top: 1.5rem;
`;

export const HeaderTitle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 1rem;
`;

export const TitleDesc = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cdcffe 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  padding: 6px;
  grid-column: ${({ gridColum }: IProps) => (gridColum ? "3/6" : "0")};
`;

export const TableListContaienr = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  padding: 6px;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cdcffe;
    border-radius: 10px;
  }
`;

export const ListGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 1rem;
  border-bottom: solid 1px #80808066;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background: #dcfff2;
  }
`;
export const GridDesc = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  word-wrap: break-word;
  grid-column: ${({ gridColum }: IProps) => (gridColum ? "3/6" : "0")};
`;
