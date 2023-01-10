import styled from "styled-components";
import { HiDotsVertical } from "react-icons/hi";

export default function PopupMenuButton({ id, onPopupClick }) {
  return (
    <StyledPopupMenuButton
      type="button"
      aria-label="open popup menu"
      data-testid="openPopup"
      onClick={(event) => onPopupClick(event, id)}
    >
      <HiDotsVertical size={15} />
    </StyledPopupMenuButton>
  );
}

const StyledPopupMenuButton = styled.button`
  position: absolute;
  right: 5%;
  bottom: 5%;
  border: none;
  background-color: transparent;
`;
