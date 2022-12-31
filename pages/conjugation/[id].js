import Link from "next/link";
import { useRouter } from "next/router";
import ConjugationPage from "../../components/WrongConjugationPage";
import ConjugationForm from "../../components/ConjugationForm";
import useLocalStorageState from "use-local-storage-state";

export default function Conjugation() {
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

  function handleAddConjugationForm(conjugationId, conjugation) {
    setAllWords(
      allWords.map((word) =>
        word.id === conjugationId
          ? { ...word, query1: { ...word.query1, ...conjugation } }
          : word
      )
    );
  }

  return (
    <>
      {/* <SingleWordHeading base={currentWord.base} query1={currentWord.query1} */}
      {currentWord.query1.conjugation ? (
        <ConjugationPage currentWord={currentWord} />
      ) : (
        <ConjugationForm
          onAddConjugationForm={handleAddConjugationForm}
          conjugationId={currentWord.id}
        />
      )}
    </>
  );
}
