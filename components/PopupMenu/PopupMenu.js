import styled from "styled-components";
import Link from "next/link";

export default function PopupMenu({ onDelete, onEdit, id, onClosePopup }) {
  return (
    <StyledPopupMenu>
      <StyledMenuButton onClick={() => onDelete(id)}>delete</StyledMenuButton>
      <StyledMenuButton onClick={() => onEdit(id)}>edit</StyledMenuButton>
      <Link href={`/declension/${id}`}>
        <StyledMenuButton>+ declension</StyledMenuButton>
      </Link>
      <StyledDivider></StyledDivider>
      <StyledMenuButton onClick={onClosePopup}>close</StyledMenuButton>
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
