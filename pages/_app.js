import GlobalStyles from "../components/GlobalStyles";
import { useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [popup, setPopup] = useState("");
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState();
  const [tense, setTense] = useState("present");

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
  }

  return (
    <>
      <Head>
        <title>flashcards extreme</title>
      </Head>
      <GlobalStyles />
      <Component
        {...pageProps}
        popup={popup}
        editing={editing}
        editId={editId}
        onPopupClick={handlePopupClick}
        onClosePopup={handleClosePopup}
        onEdit={handleEdit}
        onReturnFromEditMode={handleReturnFromEditMode}
        tense={tense}
        onChangeTense={changeTense}
      />
    </>
  );
}

export default MyApp;
