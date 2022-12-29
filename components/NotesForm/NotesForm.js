import styled from "styled-components";
import { StyledForm } from "../StyledForm";

export default function NotesForm({
  currentWord,
  onSaveNotes,
  inputLabel,
  buttonLabel,
  editing,
  editId,
  onReturnFromEditMode,
  defaultValue,
}) {
  function handleAddNotes(event) {
    event.preventDefault();
    const wordNotes = event.target.elements.notes.value;
    onSaveNotes(currentWord.id, wordNotes);
    editing && onReturnFromEditMode();
  }

  console.log("editing in notes form: ", editing);
  return (
    <>
      <StyledForm onSubmit={handleAddNotes}>
        <label htmlFor="notes">{inputLabel}</label>
        <StyledTextarea
          id="notes"
          name="notes"
          rows="15"
          defaultValue={defaultValue}
        ></StyledTextarea>
        {editing && <button onClick={onReturnFromEditMode}>back</button>}
        <button type="submit">{buttonLabel}</button>
      </StyledForm>
    </>
  );
}

const StyledTextarea = styled.textarea`
  width: 100%;
`;
