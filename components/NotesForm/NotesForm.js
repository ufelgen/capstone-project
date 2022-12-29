import styled from "styled-components";
import { StyledForm } from "../StyledForm";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";

export default function NotesForm({
  currentWord,
  onSaveNotes,
  inputLabel,
  buttonLabel,
  editing,
  onReturnFromEditMode,
}) {
  const pathname = useRouter();
  function handleAddNotes(event) {
    event.preventDefault();
    const wordNotes = event.target.elements.notes.value;
    onSaveNotes(currentWord.id, wordNotes);
  }

  return (
    <>
      <StyledForm onSubmit={handleAddNotes}>
        <label htmlFor="notes">{inputLabel}</label>
        <textarea id="notes" name="notes" rows="7"></textarea>
        {editing && <button onClick={onReturnFromEditMode}>back</button>}
        <button type="submit">{buttonLabel}</button>
      </StyledForm>
      <Footer path={currentWord.category} />
    </>
  );
}
