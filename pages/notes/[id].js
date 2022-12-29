import Link from "next/link";
import { useRouter } from "next/router";
import NotesForm from "../../components/NotesForm/NotesForm";
import NotesPage from "../../components/NotesPage/NotesPage";
import useLocalStorageState from "use-local-storage-state";

export default function Declension() {
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
      {currentWord.notes ? (
        <NotesPage currentWord={currentWord} />
      ) : (
        <NotesForm currentWord={currentWord} onSaveNotes={handleSaveNotes} />
      )}
    </>
  );
}
