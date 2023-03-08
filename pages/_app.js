import GlobalStyles from "../components/GlobalStyles";
import { useState, useEffect } from "react";
import Head from "next/head";
import fetchData from "../helpers/fetchData";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [allWords, setAllWords] = useState();

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
  const [isDropdown, setIsDropdown] = useState(false);
  const [isDropdownTwo, setIsDropdownTwo] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState("");
  const [dictionaryResult, setDictionaryResult] = useState({});

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

  function handleEdit(event, id, word) {
    event.preventDefault();
    event.stopPropagation();
    setEditing(true);
    setEditId(id);
    if (word) {
      if (word.query2.translation) {
        setSelectedFlag([word.query1.flag, word.query2.flag]);
      } else {
        setSelectedFlag([word.query1.flag, ""]);
      }
    }
  }

  function handleReturnFromEditMode() {
    setEditing(false);
    setPopup(false);
    setAddTranslation(false);
    setIsDropdown(false);
    setIsDropdownTwo(false);
    setSelectedFlag("");
    setDictionaryResult({});
  }

  function selectFlag(value, querylanguage) {
    setIsDropdown(false);
    setIsDropdownTwo(false);
    if (querylanguage === "one") {
      setSelectedFlag([value, selectedFlag[1]]);
    } else if (querylanguage === "two") {
      setSelectedFlag([selectedFlag[0], value]);
    } else if (!querylanguage) {
      setSelectedFlag(value);
    }
  }

  function toggleDropdown() {
    setIsDropdown(!isDropdown);
  }

  function toggleDropdownTwo() {
    setIsDropdownTwo(!isDropdownTwo);
  }

  function handleUpdateDictionaryResult(translation) {
    setDictionaryResult(translation);
  }

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
      handleAllWords(allWordsFromDatabase);
    }
    performFetch();
  }

  return (
    <SessionProvider session={session}>
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
        isDropdown={isDropdown}
        isDropdownTwo={isDropdownTwo}
        onToggleDropdown={toggleDropdown}
        onToggleDropdownTwo={toggleDropdownTwo}
        selectedFlag={selectedFlag}
        onSelectFlag={selectFlag}
        dictionaryResult={dictionaryResult}
        onUpdateDictionaryResult={handleUpdateDictionaryResult}
        onCreateNew={pushNewWord}
      />
    </SessionProvider>
  );
}

export default MyApp;
