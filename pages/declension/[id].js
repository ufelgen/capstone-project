import Link from "next/link";
import Router, { useRouter } from "next/router";
import DeclensionPage from "../../components/DeclensionPage/DeclensionPage";
import DeclensionForm from "../../components/DeclensionForm/DeclensionForm";
import Footer from "../../components/Footer/Footer";
import fetchData from "../../helpers/fetchData";

export default function Declension({
  allWords,
  onHandleAllWords,
  editing,
  editId,
  onEdit,
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

  async function handleAddDeclensionForm(declensionId, declension) {
    const currentWord = allWords.find((word) => word.id === declensionId);
    const updatedWord = {
      ...currentWord,
      query1: { ...currentWord.query1, ...declension },
    };
    await fetch("/api/words/" + declensionId, {
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

  async function handleDeleteDeclension(declensionId) {
    const currentWord = allWords.find((word) => word.id === declensionId);
    const updatedWord = {
      ...currentWord,
      query1: { ...currentWord.query1, declension: {} },
    };
    const confirmation = confirm("do you wish to delete this declension?");
    if (confirmation) {
      await fetch("/api/words/" + declensionId, {
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
    Router.push(`/${currentWord.category}`);
    onReturnFromEditMode();
  }

  return (
    <>
      {currentWord.query1.declension.singular.nominative ? (
        <DeclensionPage
          currentWord={currentWord}
          editing={editing}
          editId={editId}
          onEdit={onEdit}
          onReturnFromEditMode={onReturnFromEditMode}
          onAddDeclensionForm={handleAddDeclensionForm}
          onDeleteDeclension={handleDeleteDeclension}
        />
      ) : (
        <DeclensionForm
          currentWord={currentWord}
          onAddDeclensionForm={handleAddDeclensionForm}
        />
      )}
      <Footer
        path={currentWord.category}
        onReturnFromEditMode={onReturnFromEditMode}
      />
    </>
  );
}
