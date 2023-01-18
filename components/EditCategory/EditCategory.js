import styled from "styled-components";
import {
  StyledForm,
  BiggerActionButton,
  BackButton,
  InputField,
} from "../StyledForm";

export default function EditCategory({
  item,
  onReturnFromEditMode,
  onSaveEdited,
  editId,
}) {
  function handleEditCategoryName(event) {
    event.preventDefault();
    const newCategoryName = event.target.elements.updatedCategory.value.trim();
    onSaveEdited(editId, newCategoryName);
    onReturnFromEditMode();
  }

  return (
    <StyledEditCategoryForm onSubmit={handleEditCategoryName}>
      <label htmlFor="updatedCategory">edit category name:</label>
      <StyledInput
        id="updatedCategory"
        type="text"
        defaultValue={item.categoryName}
      />
      <div>
        <BackButton
          type="button"
          aria-label="go back"
          onClick={onReturnFromEditMode}
        >
          back
        </BackButton>
        <BiggerActionButton type="submit" aria-label="edit category">
          edit category
        </BiggerActionButton>
      </div>
    </StyledEditCategoryForm>
  );
}

const StyledEditCategoryForm = styled(StyledForm)`
  div {
    display: flex;
    justify-content: flex-end;
    margin: 0 -0.43rem;
  }
`;

const StyledInput = styled(InputField)`
  width: 100;
  margin: 0.25rem;
`;
