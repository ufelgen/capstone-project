import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ConjugationPage from "../../components/ConjugationPage/ConjugationPage";
import ConjugationForm from "../../components/ConjugationForm/ConjugationForm";
import SingleWordHeading from "../../components/SingleWordHeading/SingleWordHeading";
import useLocalStorageState from "use-local-storage-state";
import Footer from "../../components/Footer/Footer";

export default function Conjugation({ editing, onEdit, onReturnFromEditMode }) {
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
  const [tense, setTense] = useState("present");

  function changeTense(tense) {
    setTense(tense);
  }

  function handleAddConjugationForm(conjugationId, newConjugation) {
    setAllWords(
      allWords.map((word) =>
        word.id === conjugationId
          ? { ...word, query1: { ...word.query1, conjugation: newConjugation } }
          : word
      )
    );
  }

  function handleEditConjugation(conjugationId, updatedConjugation) {
    if (tense === "present") {
      setAllWords(
        allWords.map((word) =>
          word.id === conjugationId
            ? {
                ...word,
                query1: {
                  ...word.query1,
                  conjugation: {
                    ...word.query1.conjugation,
                    present: updatedConjugation,
                  },
                },
              }
            : word
        )
      );
    } else if (tense === "past") {
      setAllWords(
        allWords.map((word) =>
          word.id === conjugationId
            ? {
                ...word,
                query1: {
                  ...word.query1,
                  conjugation: {
                    ...word.query1.conjugation,
                    past: updatedConjugation,
                  },
                },
              }
            : word
        )
      );
    } else if (tense === "future") {
      setAllWords(
        allWords.map((word) =>
          word.id === conjugationId
            ? {
                ...word,
                query1: {
                  ...word.query1,
                  conjugation: {
                    ...word.query1.conjugation,
                    future: updatedConjugation,
                  },
                },
              }
            : word
        )
      );
    }
  }

  return (
    <>
      <SingleWordHeading base={currentWord.base} query1={currentWord.query1} />
      {currentWord.query1.conjugation ? (
        <ConjugationPage
          currentWord={currentWord}
          editing={editing}
          onEdit={onEdit}
          onReturnFromEditMode={onReturnFromEditMode}
          onEditConjugation={handleEditConjugation}
          tense={tense}
          onChangeTense={changeTense}
        />
      ) : (
        <ConjugationForm
          onAddConjugationForm={handleAddConjugationForm}
          conjugationId={currentWord.id}
        />
      )}
      <Footer path={currentWord.category} />
    </>
  );
}
