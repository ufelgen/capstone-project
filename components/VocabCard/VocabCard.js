import styled from "styled-components";
import PopupMenu from "../PopupMenu/PopupMenu";
import PopupMenuButton from "../PopupMenuButton/PopupMenuButton";
import AddTranslationForm from "../AddTranslationForm/AddTranslationForm";
import { DeclensionIcon, ConjugationIcon, NotesIcon } from "../StyledIcons";
import Image from "next/image";

export default function VocabCard({
  word,
  popup,
  onClosePopup,
  onDelete,
  onEdit,
  onReturnFromEditMode,
  onAddTranslation,
  addTranslation,
  onSaveTranslation,
  onPopupClick,
}) {
  return (
    <StyledCard>
      <p>
        <Flag>
          <Image
            src={`/flags/${word.base.flag}.svg`}
            width={16}
            height={12}
            alt={`${word.base.language} flag`}
          />
        </Flag>
        {word.base.translation}
      </p>
      <p>
        <Flag>
          <Image
            src={`/flags/${word.query1.flag}.svg`}
            width={16}
            height={12}
            alt={`${word.query1.language} flag`}
          />
        </Flag>
        {word.query1.translation}
        <Gender>{word.query1.gender}</Gender>
      </p>
      {word.query2.translation && (
        <p>
          <Flag>
            {" "}
            <Image
              src={`/flags/${word.query2.flag}.svg`}
              width={16}
              height={12}
              alt={`${word.query2.language} flag`}
            />
          </Flag>
          {word.query2.translation}
          <Gender>{word.query2.gender}</Gender>
        </p>
      )}

      {word.id === addTranslation && (
        <AddTranslationForm
          onReturnFromEditMode={onReturnFromEditMode}
          onSaveTranslation={onSaveTranslation}
          id={word.id}
        />
      )}
      {word.query1.declension.singular.nominative && <DeclensionIcon />}
      {word.query1.conjugation.present[0].person && <ConjugationIcon />}
      {word.notes && <NotesIcon />}
      {word.id === popup && (
        <PopupMenu
          onClosePopup={onClosePopup}
          id={word.id}
          onDelete={onDelete}
          onEdit={onEdit}
          onAddTranslation={(event) => onAddTranslation(event, word.id)}
          prop={word}
        />
      )}
      {word.id !== addTranslation && word.id !== popup && (
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
