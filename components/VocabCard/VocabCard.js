import styled from "styled-components";
import PopupMenu from "../PopupMenu/PopupMenu";
import PopupMenuButton from "../PopupMenuButton/PopupMenuButton";
import { DeclensionIcon, ConjugationIcon, NotesIcon } from "../StyledIcons";

export default function VocabCard({
  word,
  popup,
  onClosePopup,
  onDelete,
  onEdit,
  onPopupClick,
}) {
  return (
    <StyledCard>
      <p>
        <Flag>{word.base.flag}</Flag>
        {word.base.translation}
      </p>
      <p>
        <Flag>{word.query1.flag}</Flag>
        {word.query1.translation}
        <Gender>{word.query1.gender}</Gender>
      </p>
      {word.query1.declension && <DeclensionIcon />}
      {word.query1.conjugation && <ConjugationIcon />}
      {word.notes && <NotesIcon />}
      {word.id === popup ? (
        <PopupMenu
          onClosePopup={onClosePopup}
          id={word.id}
          onDelete={onDelete}
          onEdit={onEdit}
          prop={word}
        />
      ) : (
        <PopupMenuButton id={word.id} onPopupClick={onPopupClick} />
      )}
    </StyledCard>
  );
}

const Gender = styled.span`
  padding-left: 0.625rem;
  font-style: italic;
`;

const Flag = styled.span`
  padding-right: 0.625rem;
`;

const StyledCard = styled.div`
  position: relative;
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: var(--white);
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  text-decoration: none;
  list-style: none;
  height: auto;
  border: 1px solid var(--darkmagenta);
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  cursor: default;
  p {
    padding: 0.43rem 0;
  }
`;
