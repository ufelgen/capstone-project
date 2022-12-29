import styled from "styled-components";
import { StyledForm } from "../StyledForm";
import SingleWordHeading from "../SingleWordHeading/SingleWordHeading";
import Footer from "../Footer/Footer";

export default function NotesForm({ currentWord, onSaveNotes }) {
  function handleAddNotes(event) {
    event.preventDefault();
    const wordNotes = event.target.elements.notes.value;
    onSaveNotes(currentWord.id, wordNotes);
  }

  return (
    <>
      <SingleWordHeading base={currentWord.base} query1={currentWord.query1} />
      <StyledForm onSubmit={handleAddNotes}>
        <label htmlFor="notes">add your notes to this word</label>
        <textarea id="notes" name="notes" rows="7"></textarea>
        <button type="submit">add notes</button>
      </StyledForm>
      <Footer path={currentWord.category} />
    </>
  );
}
