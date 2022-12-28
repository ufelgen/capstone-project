import Header from "../components/Header/Header";
import NewWordForm from "../components/NewWordForm/NewWordForm";
import Link from "next/link";
import { words } from "../lib/words";
import { Fragment } from "react";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";
import PopupMenuButton from "../components/PopupMenuButton/PopupMenuButton";
import PopupMenu from "../components/PopupMenu/PopupMenu";
import { rearrangeData } from "../helpers/rearrangeData";
import styled from "styled-components";

export default function Home({
  popup,
  editing,
  editId,
  onPopupClick,
  onClosePopup,
  onEdit,
  onReturnFromEditMode,
}) {
  const [allWords, setAllWords] = useLocalStorageState("allWords", {
    defaultValue: words,
  });

  if (!allWords) {
    return null;
  }
  const wordsInCategories = rearrangeData(allWords);

  async function pushNewWord(newWord) {
    setAllWords([...allWords, { id: nanoid(), ...newWord }]);
  }

  function handleDeleteCategory(event, category) {
    event.preventDefault();
    event.stopPropagation();
    setAllWords(allWords.filter((word) => word.category !== category));
  }

  return (
    <>
      <Header />
      <StyledMain>
        <NewWordForm onCreateNew={pushNewWord} allWords={allWords} />
        {wordsInCategories.map((item) => (
          <Fragment key={item.categoryName}>
            <StyledLink href={`/${item.categoryName}`}>
              <StyledCategory>
                <h3>{item.categoryName}</h3>
                <p>
                  {item.categoryWords.length}{" "}
                  {item.number === 1 ? "word" : "words"}
                </p>
                {item.categoryName === popup ? (
                  <PopupMenu
                    onClosePopup={onClosePopup}
                    id={item.categoryName}
                    onDelete={handleDeleteCategory}
                    onEdit={onEdit}
                    prop={item}
                  />
                ) : (
                  <PopupMenuButton
                    id={item.categoryName}
                    onPopupClick={onPopupClick}
                  />
                )}
              </StyledCategory>
            </StyledLink>
          </Fragment>
        ))}
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin-bottom: 11vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledCategory = styled.section`
  position: relative;
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
`;
