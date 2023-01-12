import Link from "next/link";
import { useRouter } from "next/router";
import NotesForm from "../../components/NotesForm/NotesForm";
import NotesPage from "../../components/NotesPage/NotesPage";
import Footer from "../../components/Footer/Footer";
import SingleWordHeading from "../../components/SingleWordHeading/SingleWordHeading";
import useLocalStorageState from "use-local-storage-state";

export default function Notes({
  onEdit,
  editId,
  editing,
  onReturnFromEditMode,
}) {
  const router = useRouter();
  const { id } = router.query;

  //get words from local storage - will be replaced by handing down from _app.js from database
  const [allWords, setAllWords] = useLocalStorageState("allWords");

  if (!allWords) {
    return null;
  }

  const currentWord = allWords.find((word) => word.id === id);

  if (!currentWord) {
    return (
      <>
        <h2>the word you are looking for could not be found</h2>
        <Link href={"/"}>back to main page</Link>
      </>
    );
  }

  // save notes - will be PUT
  function handleSaveNotes(notesId, wordNotes) {
    setAllWords(
      allWords.map((word) =>
        word.id === notesId ? { ...word, notes: wordNotes } : word
      )
    );
  }

  return (
    <>
      <SingleWordHeading base={currentWord.base} query1={currentWord.query1} />
      {currentWord.notes ? (
        <NotesPage
          currentWord={currentWord}
          onEdit={onEdit}
          editing={editing}
          editId={editId}
          onReturnFromEditMode={onReturnFromEditMode}
          onSaveNotes={handleSaveNotes}
        />
      ) : (
        <NotesForm
          currentWord={currentWord}
          onSaveNotes={handleSaveNotes}
          inputLabel={"add your notes to this word"}
          buttonLabel={"add notes"}
          editing={editing}
          editId={editId}
          onReturnFromEditMode={onReturnFromEditMode}
        />
      )}
      <Footer
        path={currentWord.category}
        onReturnFromEditMode={onReturnFromEditMode}
      />
    </>
  );
}
