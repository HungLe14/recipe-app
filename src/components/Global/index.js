import styled from "styled-components";

export const TextCenter = styled.div`
  text-align: center;
`;

export const MarginLeft60 = styled.div`
  margin-left: 60px;
`;

export const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const FlexColumnStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const DisplayFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const PreviewImg = styled.div`
  height: 100px;
`;

export const ItemRecipe = styled(DisplayFlex)`
  padding: 5px 10px;

  &:hover {
    background-color: #2832C2;
    color: #fff;
    cursor: pointer;
  }
`;
