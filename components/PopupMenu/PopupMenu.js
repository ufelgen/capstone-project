import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PopupMenu({
  onDelete,
  onEdit,
  id,
  onClosePopup,
  prop,
}) {
  const { pathname } = useRouter();
  return (
    <StyledPopupMenu>
      <StyledMenuButton onClick={(event) => onDelete(event, id)}>
        delete
      </StyledMenuButton>
      <StyledMenuButton onClick={(event) => onEdit(event, id)}>
        edit
      </StyledMenuButton>
      {pathname === "/[category]" && (
        <Link href={`/declension/${id}`}>
          <StyledMenuButton>
            {prop.query1?.declension ? "declension" : "+ declension"}
          </StyledMenuButton>
        </Link>
      )}

      <StyledDivider></StyledDivider>
      <StyledMenuButton onClick={(event) => onClosePopup(event)}>
        close
      </StyledMenuButton>
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
  align-items: center;
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
