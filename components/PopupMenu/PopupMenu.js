import styled from "styled-components";

export default function PopupMenu({ onDelete, id, setPopup }) {
  return (
    <StyledPopupMenu>
      <StyledMenuButton onClick={() => onDelete(id)}>delete</StyledMenuButton>
      <StyledDivider></StyledDivider>
      <StyledMenuButton onClick={() => setPopup(false)}>close</StyledMenuButton>
    </StyledPopupMenu>
  );
}

const StyledPopupMenu = styled.div`
  background-color: lightgray;
  border: 1px solid black;
  width: 60%;
  height: auto;
  position: absolute;
  top: 77%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
`;

const StyledMenuButton = styled.button`
  padding: 2px;
  margin: 2px;
  border: none;
  background-color: transparent;
`;

const StyledDivider = styled.hr`
  border: none;
  width: 100%;
  margin: 0;
  height: 1px;
  background: darkgray;
`;
