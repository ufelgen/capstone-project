import Header from "../components/Header/Header";
import NewWordForm from "../components/NewWordForm/NewWordForm";
import Link from "next/link";
import { Fragment } from "react";
import PopupMenuButton from "../components/PopupMenuButton/PopupMenuButton";
import PopupMenu from "../components/PopupMenu/PopupMenu";
import EditCategory from "../components/EditCategory/EditCategory";
import { rearrangeData } from "../helpers/rearrangeData";
import styled from "styled-components";
import fetchData from "../helpers/fetchData";
import { useSession, signIn, signOut } from "next-auth/react";
import { BiggerActionButton } from "../components/StyledForm";

export default function Home({
  allWords,
  onHandleAllWords,
  popup,
  editing,
  editId,
  onPopupClick,
  onClosePopup,
  onEdit,
  onReturnFromEditMode,
}) {
  if (!allWords) {
    return null;
  }

  const { data: session } = useSession();

  const wordsInCategories = rearrangeData(allWords);

  async function pushNewWord(newWord) {
    await fetch("/api/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    });
    async function performFetch() {
      const allWordsFromDatabase = await fetchData();
      onHandleAllWords(allWordsFromDatabase);
    }
    performFetch();
  }

  async function handleDeleteCategory(event, category) {
    event.preventDefault();
    event.stopPropagation();
    const confirmation = confirm(
      "do you wish to delete all words saved in this category?"
    );
    if (confirmation) {
      await fetch("/api/words", {
        method: "DELETE",
        body: category,
      });
      async function performFetch() {
        const allWordsFromDatabase = await fetchData();
        onHandleAllWords(allWordsFromDatabase);
      }
      performFetch();
    }
  }

  async function handleEditedCategory(editId, updatedCategory) {
    await fetch("/api/words", {
      method: "PUT",
      body: [editId, updatedCategory],
    });
    async function performFetch() {
      const allWordsFromDatabase = await fetchData();
      onHandleAllWords(allWordsFromDatabase);
    }
    performFetch();
  }

  return (
    <>
      <Header />
      <LoginSection>
        {session ? (
          <>
            <div>
              <p>you are signed in as </p>
              <p>{session?.user?.name}</p>
            </div>
            <BiggerActionButton onClick={signOut}>SIGN OUT</BiggerActionButton>
          </>
        ) : (
          // remove argument "github" if more than one provider
          <BiggerActionButton onClick={() => signIn("github")}>
            SIGN IN
          </BiggerActionButton>
        )}
      </LoginSection>
      {session && (
        <StyledMain>
          <NewWordForm onCreateNew={pushNewWord} allWords={allWords} />
          {wordsInCategories.map((item) =>
            editing && editId === item.categoryName ? (
              <Fragment key={item.id}>
                <EditCategory
                  item={item}
                  onReturnFromEditMode={onReturnFromEditMode}
                  onSaveEdited={handleEditedCategory}
                  editId={editId}
                />
              </Fragment>
            ) : (
              <Fragment key={item.id}>
                <StyledLink
                  aria-label={`open ${item.categoryName} category`}
                  href={`/${item.categoryName}`}
                >
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
            )
          )}
        </StyledMain>
      )}
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
  background-color: var(--white);
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid var(--darkmagenta);
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
`;

const LoginSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  div {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    align-items: center;
  }
`;
