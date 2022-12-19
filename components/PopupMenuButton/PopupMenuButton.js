import styled from "styled-components";
import { HiDotsVertical } from "react-icons/hi";

export default function PopupMenuButton({ id, onPopupClick }) {
  return (
    <>
      <StyledPopupMenuButton onClick={() => onPopupClick(id)}>
        <HiDotsVertical size={15} />
      </StyledPopupMenuButton>
    </>
  );
}

const StyledPopupMenuButton = styled.button`
  position: absolute;
  right: 10%;
  bottom: 10%;
  border: none;
`;
