import styled from "styled-components";
import NotesForm from "../NotesForm/NotesForm";

export default function NotesPage({
  currentWord,
  onEdit,
  editId,
  editing,
  onSaveNotes,
  onReturnFromEditMode,
}) {
  // function handleEditNotes(event) {
  //   event.preventDefault();
  //   const wordNotes = event.target.elements.notes.value;
  //   onSaveNotes(editId, wordNotes);
  //   onReturnFromEditMode();
  // }
  console.log("editing on notes page: ", editing);
  return (
    <>
      {editing && editId === currentWord.id ? (
        <NotesForm
          currentWord={currentWord}
          onSaveNotes={onSaveNotes}
          inputLabel={"edit your notes to this word"}
          buttonLabel={"edit notes"}
          defaultValue={currentWord.notes}
          editing={editing}
          onReturnFromEditMode={onReturnFromEditMode}
        />
      ) : (
        <StyledNotes>
          <p>{currentWord.notes}</p>
          <button
            type="button"
            onClick={(event) => onEdit(event, currentWord.id)}
          >
            edit
          </button>
        </StyledNotes>
      )}
    </>
  );
}

const StyledNotes = styled.section`
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  position: relative;
  justify-content: center;
  align-items: center;
  button {
    padding: 0.25rem;
    border: 1px solid darkmagenta;
    margin: 0.25rem;
    border-radius: 5px;
    height: 4vh;
    background-color: darkmagenta;
    color: white;
  }
`;
