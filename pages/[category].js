import styled from "styled-components";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import VocabCard from "../components/VocabCard/VocabCard";
import EditVocabForm from "../components/EditVocabForm/EditVocabForm";
import useLocalStorageState from "use-local-storage-state";
import { rearrangeData } from "../helpers/rearrangeData";
import Link from "next/link";

export default function Category({
  popup,
  editing,
  editId,
  onPopupClick,
  onClosePopup,
  onEdit,
  onReturnFromEditMode,
}) {
  const router = useRouter();
  const { category } = router.query;

  const [allWords, setAllWords] = useLocalStorageState("allWords");

  function handleDelete(event, id) {
    event.preventDefault();
    event.stopPropagation();
    setAllWords(allWords.filter((word) => word.id !== id));
  }

  function handleEditedVocab(editId, updatedVocab) {
    setAllWords(
      allWords.map((word) => (word.id === editId ? updatedVocab : word))
    );
  }

  if (!allWords) {
    return null;
  }

  const wordsInCategories = rearrangeData(allWords);

  const currentCategory = wordsInCategories.find(
    (word) => word.categoryName === category
  );

  if (!currentCategory) {
    return (
      <>
        <h2>there are currently no words saved in this category!</h2>
        <Link href={"/"}>back to main page</Link>
      </>
    );
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
                word={word}
                onReturnFromEditMode={onReturnFromEditMode}
                onSaveEdited={handleEditedVocab}
                editId={editId}
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
                onPopupClick={onPopupClick}
              />
            </Fragment>
          )
        )}
      </CardWrapper>
      <Footer />
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
