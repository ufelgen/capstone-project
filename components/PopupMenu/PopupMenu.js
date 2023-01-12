import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PopupMenu({
  onDelete,
  onEdit,
  onAddTranslation,
  id,
  onClosePopup,
  prop,
}) {
  const { pathname } = useRouter();
  return (
    <StyledPopupMenu data-testid="popup">
      <StyledMenuButton
        type="button"
        aria-label="delete this flashcard"
        onClick={(event) => onDelete(event, id)}
      >
        delete
      </StyledMenuButton>
      <StyledMenuButton
        type="button"
        aria-label="edit this flashcard"
        onClick={(event) => onEdit(event, id)}
      >
        edit
      </StyledMenuButton>
      {pathname === "/[category]" && (
        <>
          <Link href={`/declension/${id}`}>
            <StyledMenuButton
              type="button"
              aria-label={
                prop.query1?.declension.singular.nominative
                  ? "see declension"
                  : "add declension"
              }
            >
              {prop.query1?.declension.singular.nominative
                ? "declension"
                : "+ declension"}
            </StyledMenuButton>
          </Link>
          <Link href={`/conjugation/${id}`}>
            <StyledMenuButton
              type="button"
              aria-label={
                prop.query1?.conjugation.present[0].person
                  ? "see conjugation"
                  : "add conjugation"
              }
            >
              {prop.query1?.conjugation.present[0].person
                ? "conjugation"
                : "+ conjugation"}
            </StyledMenuButton>
          </Link>
          <Link href={`/notes/${id}`}>
            <StyledMenuButton
              type="button"
              aria-label={prop.notes ? "see notes" : "add notes"}
            >
              {prop.notes ? "notes" : "+ notes"}
            </StyledMenuButton>
          </Link>
          {!prop.query2.translation && (
            <StyledMenuButton
              type="button"
              aria-label="add translation"
              onClick={(event) => onAddTranslation(event, id)}
            >
              + translation
            </StyledMenuButton>
          )}
        </>
      )}

      <StyledDivider></StyledDivider>
      <StyledMenuButton
        type="button"
        aria-label="close popup menu"
        onClick={(event) => onClosePopup(event)}
      >
        close
      </StyledMenuButton>
    </StyledPopupMenu>
  );
}

const StyledPopupMenu = styled.div`
  background-color: var(--darkgrey);
  color: var(--white);
  border: 1px solid black;
  border-radius: 5px;
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
  color: var(--lightgrey);
  width: 100%;
`;

const StyledDivider = styled.hr`
  border: none;
  width: 100%;
  margin: 0;
  height: 1px;
  background: var(--lightgrey);
`;
