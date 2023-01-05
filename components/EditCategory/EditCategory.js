import styled from "styled-components";
import { StyledForm } from "../StyledForm";

export default function EditCategory({
  item,
  onReturnFromEditMode,
  onSaveEdited,
  editId,
}) {
  function handleEditCategoryName(event) {
    event.preventDefault();
    const newCategoryName = event.target.elements.updatedCategory.value;
    onSaveEdited(editId, newCategoryName);
    onReturnFromEditMode();
  }

  return (
    <StyledEditCategoryForm onSubmit={handleEditCategoryName}>
      <label htmlFor="updatedCategory">edit category name:</label>
      <input
        id="updatedCategory"
        type="text"
        defaultValue={item.categoryName}
      />
      <div>
        <button
          type="button"
          aria-label="go back"
          onClick={onReturnFromEditMode}
        >
          back
        </button>
        <button type="submit" aria-label="submit">
          edit category
        </button>
      </div>
    </StyledEditCategoryForm>
  );
}

const StyledEditCategoryForm = styled(StyledForm)`
  input {
    width: 100;
    margin: 0.25rem;
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
`;
