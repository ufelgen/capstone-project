import styled from "styled-components";
import { StyledForm } from "../StyledForm";

export default function NotesForm({
  currentWord,
  onSaveNotes,
  inputLabel,
  buttonLabel,
  editing,
  onReturnFromEditMode,
  defaultValue,
}) {
  function handleAddNotes(event) {
    event.preventDefault();
    const wordNotes = event.target.elements.notes.value;
    onSaveNotes(currentWord.id, wordNotes);
    editing && onReturnFromEditMode();
  }

  return (
    <>
      <StyledNotesForm onSubmit={handleAddNotes}>
        <label htmlFor="notes">{inputLabel}</label>
        <StyledTextarea
          id="notes"
          name="notes"
          rows="15"
          defaultValue={defaultValue}
        ></StyledTextarea>
        <div>
          {editing && <button onClick={onReturnFromEditMode}>back</button>}
          <button type="submit">{buttonLabel}</button>
        </div>
      </StyledNotesForm>
    </>
  );
}

const StyledTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 1rem;
`;

const StyledNotesForm = styled(StyledForm)`
  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
