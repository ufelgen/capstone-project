import styled from "styled-components";
import NotesForm from "../NotesForm/NotesForm";
import { ActionButton } from "../StyledForm";

export default function NotesPage({
  currentWord,
  onEdit,
  editId,
  editing,
  onSaveNotes,
  onReturnFromEditMode,
}) {
  return (
    <>
      {editing && editId === currentWord.id ? (
        <NotesForm
          currentWord={currentWord}
          onSaveNotes={onSaveNotes}
          inputLabel={"edit your notes to this word"}
          buttonLabel={"update"}
          defaultValue={currentWord.notes}
          editing={editing}
          onReturnFromEditMode={onReturnFromEditMode}
        />
      ) : (
        <StyledNotes>
          <p>{currentWord.notes}</p>
          <div>
            <ActionButton
              type="button"
              aria-label="edit notes"
              onClick={(event) => onEdit(event, currentWord.id)}
            >
              edit
            </ActionButton>
          </div>
        </StyledNotes>
      )}
    </>
  );
}

const StyledNotes = styled.section`
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: var(--white);
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid var(--darkmagenta);
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  position: relative;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  p {
    margin-bottom: 1rem;
    text-align: justify;
  }
`;
