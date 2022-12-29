import Link from "next/link";
import { useRouter } from "next/router";
import NotesForm from "../../components/NotesForm/NotesForm";
import NotesPage from "../../components/NotesPage/NotesPage";
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
        />
      ) : (
        <NotesForm
          currentWord={currentWord}
          onSaveNotes={handleSaveNotes}
          inputLabel={"add your notes to this word"}
          buttonLabel={"add notes"}
          editing={editing}
          onReturnFromEditMode={onReturnFromEditMode}
        />
      )}
    </>
  );
}
