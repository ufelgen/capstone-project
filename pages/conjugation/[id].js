import Link from "next/link";
import { useRouter } from "next/router";
import ConjugationPage from "../../components/ConjugationPage/ConjugationPage";
import ConjugationForm from "../../components/ConjugationForm/ConjugationForm";
import SingleWordHeading from "../../components/SingleWordHeading/SingleWordHeading";
import useLocalStorageState from "use-local-storage-state";
import Footer from "../../components/Footer/Footer";
import fetchData from "../../helpers/fetchData";

export default function Conjugation({
  allWords,
  onHandleAllWords,
  editing,
  onEdit,
  onReturnFromEditMode,
  tense,
  onChangeTense,
}) {
  const router = useRouter();
  const { id } = router.query;

  // words from local storage, replace by allWords from database by handing down
  //const [allWords, setAllWords] = useLocalStorageState("allWords");

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

  // add conjugation - replace by PUT
  // function handleAddConjugationForm(conjugationId, newConjugation) {
  //   setAllWords(
  //     allWords.map((word) =>
  //       word.id === conjugationId
  //         ? { ...word, query1: { ...word.query1, conjugation: newConjugation } }
  //         : word
  //     )
  //   );
  // }

  // FOR SOME REASON THIS FUNCTION EATS THE REST OF QUERY1
  //////////////////////////////////////////////////
  // UPDATING A WORD EATS THE CONJUGATION!!!!
  async function handleAddConjugationForm(conjugationId, newConjugation) {
    const currentWord = allWords.filter((word) => word.id === conjugationId);
    const updatedWord = {
      ...currentWord,
      query1: {
        ...currentWord.query1,
        ...newConjugation,
      },
    };
    await fetch("/api/words/" + conjugationId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    });
    async function performFetch() {
      const allWordsFromDatabase = await fetchData("/api/words");
      onHandleAllWords(allWordsFromDatabase);
    }
    performFetch();
  }

  // edit conjugation - replace by PUT
  // function handleEditConjugation(conjugationId, updatedConjugation) {
  //   if (tense === "present") {
  //     setAllWords(
  //       allWords.map((word) =>
  //         word.id === conjugationId
  //           ? {
  //               ...word,
  //               query1: {
  //                 ...word.query1,
  //                 conjugation: {
  //                   ...word.query1.conjugation,
  //                   present: updatedConjugation,
  //                 },
  //               },
  //             }
  //           : word
  //       )
  //     );
  //   } else if (tense === "past") {
  //     setAllWords(
  //       allWords.map((word) =>
  //         word.id === conjugationId
  //           ? {
  //               ...word,
  //               query1: {
  //                 ...word.query1,
  //                 conjugation: {
  //                   ...word.query1.conjugation,
  //                   past: updatedConjugation,
  //                 },
  //               },
  //             }
  //           : word
  //       )
  //     );
  //   } else if (tense === "future") {
  //     setAllWords(
  //       allWords.map((word) =>
  //         word.id === conjugationId
  //           ? {
  //               ...word,
  //               query1: {
  //                 ...word.query1,
  //                 conjugation: {
  //                   ...word.query1.conjugation,
  //                   future: updatedConjugation,
  //                 },
  //               },
  //             }
  //           : word
  //       )
  //     );
  //   }
  // }

  function handleEditConjugation(conjugationId, updatedConjugation) {}

  return (
    <>
      <SingleWordHeading base={currentWord.base} query1={currentWord.query1} />
      {currentWord.query1.conjugation.present[0].person ? (
        <ConjugationPage
          currentWord={currentWord}
          editing={editing}
          onEdit={onEdit}
          onReturnFromEditMode={onReturnFromEditMode}
          onEditConjugation={handleEditConjugation}
          tense={tense}
          onChangeTense={onChangeTense}
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
