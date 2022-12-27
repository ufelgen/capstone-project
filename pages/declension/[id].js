import Link from "next/link";
import { useRouter } from "next/router";
import DeclensionPage from "../../components/DeclensionPage/DeclensionPage";
import DeclensionForm from "../../components/DeclensionForm/DeclensionForm";
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

  function handleAddDeclensionForm(declensionId, declension) {
    setAllWords(
      allWords.map((word) =>
        word.id === declensionId
          ? { ...word, query1: { ...word.query1, ...declension } }
          : word
      )
    );
  }

  return (
    <>
      {currentWord.query1.declension ? (
        <DeclensionPage currentWord={currentWord} />
      ) : (
        <DeclensionForm
          currentWord={currentWord}
          onAddDeclensionForm={handleAddDeclensionForm}
        />
      )}
    </>
  );
}
