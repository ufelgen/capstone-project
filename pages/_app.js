import GlobalStyles from "../components/GlobalStyles";
import { useState, useEffect } from "react";
import Head from "next/head";
import fetchData from "../helpers/fetchData";

function MyApp({ Component, pageProps }) {
  const [allWords, setAllWords] = useState();

  //huhu testi
  function handleAllWords(words) {
    setAllWords(words);
  }

  useEffect(() => {
    async function performFetch() {
      const allWordsFromDatabase = await fetchData();
      handleAllWords(allWordsFromDatabase);
    }
    performFetch();
  }, []);

  const [popup, setPopup] = useState("");
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState();
  const [tense, setTense] = useState("present");
  const [addTranslation, setAddTranslation] = useState("");

  function handleAddTranslation(event, id) {
    event.preventDefault();
    event.stopPropagation();
    setAddTranslation(id);
    setPopup(false);
  }

  function changeTense(tense) {
    setTense(tense);
  }

  function handlePopupClick(event, id) {
    event.preventDefault();
    event.stopPropagation();
    setPopup(id);
  }

  function handleClosePopup(event) {
    event.preventDefault();
    event.stopPropagation();
    setPopup(false);
  }

  function handleEdit(event, id) {
    event.preventDefault();
    event.stopPropagation();
    setEditing(true);
    setEditId(id);
  }

  function handleReturnFromEditMode() {
    setEditing(false);
    setPopup(false);
    setAddTranslation(false);
  }

  return (
    <>
      <Head>
        <title>flashcards extreme</title>
      </Head>
      <GlobalStyles />
      <Component
        {...pageProps}
        allWords={allWords}
        onHandleAllWords={handleAllWords}
        popup={popup}
        editing={editing}
        editId={editId}
        onPopupClick={handlePopupClick}
        onClosePopup={handleClosePopup}
        onEdit={handleEdit}
        onReturnFromEditMode={handleReturnFromEditMode}
        tense={tense}
        onChangeTense={changeTense}
        onAddTranslation={handleAddTranslation}
        addTranslation={addTranslation}
      />
    </>
  );
}

export default MyApp;
