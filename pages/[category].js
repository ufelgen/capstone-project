import styled from "styled-components";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import VocabCard from "../components/VocabCard/VocabCard";
import EditVocabForm from "../components/EditVocabForm/EditVocabForm";
import NothingHere from "../components/NothingHere/NothingHere";
import { rearrangeData } from "../helpers/rearrangeData";
import fetchData from "../helpers/fetchData";

export default function Category({
  allWords,
  onHandleAllWords,
  popup,
  editing,
  editId,
  onPopupClick,
  onClosePopup,
  onEdit,
  onAddTranslation,
  addTranslation,
  onReturnFromEditMode,
  isDropdown,
  isDropdownTwo,
  onToggleDropdown,
  onToggleDropdownTwo,
  selectedFlag,
  onSelectFlag,
}) {
  const router = useRouter();
  const { category } = router.query;

  async function handleDelete(event, id) {
    event.preventDefault();
    event.stopPropagation();
    await fetch("/api/words/" + id, {
      method: "DELETE",
    });
    async function performFetch() {
      const allWordsFromDatabase = await fetchData();
      onHandleAllWords(allWordsFromDatabase);
    }
    performFetch();
  }

  async function handleEditedVocab(editId, updatedVocab) {
    const currentWord = allWords.find((word) => word.id === editId);
    const updatedWord = {
      ...currentWord,
      base: { ...currentWord.base, ...updatedVocab.base },
      query1: { ...currentWord.query1, ...updatedVocab.query1 },
      query2: { ...currentWord.query2, ...updatedVocab.query2 },
    };
    await fetch("/api/words/" + editId, {
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

  async function handleSaveTranslation(id, query2) {
    const currentWord = allWords.find((word) => word.id === id);
    const updatedWord = { ...currentWord, query2 };
    await fetch("/api/words/" + id, {
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

  if (!allWords) {
    return null;
  }

  const wordsInCategories = rearrangeData(allWords);

  const currentCategory = wordsInCategories.find(
    (word) => word.categoryName === category
  );

  if (!currentCategory) {
    return <NothingHere />;
  }

  const { categoryName, categoryWords } = currentCategory;

  return (
    <Fragment>
      <StyledHeading>{categoryName}</StyledHeading>
      <CardWrapper>
        {categoryWords.map((word) =>
          editing && editId === word.id ? (
            <Fragment key={word.id}>
              <EditVocabForm
                allWords={allWords}
                word={word}
                onReturnFromEditMode={onReturnFromEditMode}
                onSaveEdited={handleEditedVocab}
                editId={editId}
                isDropdown={isDropdown}
                isDropdownTwo={isDropdownTwo}
                onToggleDropdown={onToggleDropdown}
                onToggleDropdownTwo={onToggleDropdownTwo}
                selectedFlag={selectedFlag}
                onSelectFlag={onSelectFlag}
              />
            </Fragment>
          ) : (
            <Fragment key={word.id}>
              <VocabCard
                word={word}
                popup={popup}
                onClosePopup={onClosePopup}
                onDelete={handleDelete}
                onEdit={onEdit}
                onReturnFromEditMode={onReturnFromEditMode}
                onAddTranslation={onAddTranslation}
                addTranslation={addTranslation}
                onSaveTranslation={handleSaveTranslation}
                onPopupClick={onPopupClick}
                isDropdownTwo={isDropdownTwo}
                onToggleDropdownTwo={onToggleDropdownTwo}
                selectedFlag={selectedFlag}
                onSelectFlag={onSelectFlag}
              />
            </Fragment>
          )
        )}
      </CardWrapper>
      <Footer onReturnFromEditMode={onReturnFromEditMode} />
    </Fragment>
  );
}

const CardWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--white);
  margin-bottom: 11vh;
`;

export const StyledHeading = styled.h2`
  margin: 0.625rem;
  background-color: var(--white);
  color: var(--darkmagenta);
  text-align: center;
  padding: 0.43rem;
  cursor: default;
`;
