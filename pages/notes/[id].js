import Link from "next/link";
import { useRouter } from "next/router";
import NotesForm from "../../components/NotesForm/NotesForm";
import NotesPage from "../../components/NotesPage/NotesPage";
import Footer from "../../components/Footer/Footer";
import SingleWordHeading from "../../components/SingleWordHeading/SingleWordHeading";
import fetchData from "../../helpers/fetchData";

export default function Notes({
  allWords,
  onHandleAllWords,
  onEdit,
  editId,
  editing,
  onReturnFromEditMode,
}) {
  const router = useRouter();
  const { id } = router.query;

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

  async function handleSaveNotes(notesId, wordNotes) {
    const currentWord = allWords.find((word) => word.id === notesId);
    const updatedWord = { ...currentWord, notes: wordNotes };
    await fetch("/api/words/" + notesId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    });
    async function performFetch() {
      const allWordsFromDatabase = await fetchData();
      onHandleAllWords(allWordsFromDatabase);
    }
    performFetch();
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
