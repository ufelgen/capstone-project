import styled from "styled-components";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import PopupMenuButton from "../components/PopupMenuButton/PopupMenuButton";
import PopupMenu from "../components/PopupMenu/PopupMenu";
import EditVocabForm from "../components/EditVocabForm/EditVocabForm";
import useLocalStorageState from "use-local-storage-state";
import { rearrangeData } from "../helpers/rearrangeData";
import Link from "next/link";
import { DeclensionIcon } from "../components/StyledIcons";

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

  function handleDelete(id) {
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
              <StyledCard>
                <p>
                  <Flag>{word.base.flag}</Flag>
                  {word.base.translation}
                </p>
                <p>
                  <Flag>{word.query1.flag}</Flag>
                  {word.query1.translation}
                  <Gender>{word.query1.gender}</Gender>
                </p>
                {word.query1.declension && <DeclensionIcon />}
                {word.id === popup ? (
                  <PopupMenu
                    onClosePopup={onClosePopup}
                    id={word.id}
                    onDelete={handleDelete}
                    onEdit={onEdit}
                    word={word}
                  />
                ) : (
                  <PopupMenuButton id={word.id} onPopupClick={onPopupClick} />
                )}
              </StyledCard>
            </Fragment>
          )
        )}
      </CardWrapper>
      <Footer />
    </Fragment>
  );
}

const Gender = styled.span`
  padding-left: 0.625rem;
  font-style: italic;
`;

const Flag = styled.span`
  padding-right: 0.625rem;
`;

const CardWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  margin-bottom: 11vh;
`;

const StyledCard = styled.div`
  position: relative;
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  text-decoration: none;
  list-style: none;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  cursor: default;
  p {
    padding: 0.43rem 0;
  }
`;

const StyledHeading = styled.h2`
  margin: 0.625rem;
  background-color: White;
  color: darkmagenta;
  text-align: center;
  padding: 0.43rem;
  cursor: default;
`;
