import GlobalStyles from "../components/GlobalStyles";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [popup, setPopup] = useState("");
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState();

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
      />
    </>
  );
}

export default MyApp;
