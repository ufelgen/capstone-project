import { languages } from "../../lib/languages";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";
import {
  StyledForm,
  ActionButton,
  BackButton,
  InputField,
  Dropdown,
  Label,
} from "../StyledForm";

export default function EditVocabForm({
  word,
  editId,
  onSaveEdited,
  onReturnFromEditMode,
}) {
  const [allWords] = useLocalStorageState("allWords");
  const allCategories = allWords.map((word) => word.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  function handleEditVocab(event) {
    event.preventDefault();
    const fields = event.target.elements;
    const newBase = fields.english.value;
    const newQuery1Translation = fields.queryLanguage1.value;
    const language = fields.queryLanguage.value.split("-");
    const newGender = fields.gender.value;
    const newCategory = fields.category.value;

    const updatedVocab = {
      id: editId,
      category: newCategory,
      base: {
        language: "english",
        flag: "🇬🇧",
        translation: newBase,
      },
      query1: {
        id: nanoid(),
        language: language[1],
        flag: language[0],
        translation: newQuery1Translation,
        gender: newGender,
      },
    };

    onSaveEdited(editId, updatedVocab);

    onReturnFromEditMode();
  }

  return (
    <>
      <StyledEditForm onSubmit={handleEditVocab}>
        <Label htmlFor="english" name="english">
          🇬🇧 english
        </Label>
        <InputField
          id="english"
          name="english"
          type="text"
          maxLength={50}
          defaultValue={word.base.translation}
        ></InputField>

        <label htmlFor="queryLanguage1" name="queryLanguage1">
          <Dropdown
            defaultValue={word.query1.flag + "-" + word.query1.language}
            name="queryLanguage"
            id="queryLanguage"
          >
            {languages.map((language) => {
              return (
                <option
                  key={language.name}
                  value={language.value}
                  name={language.name}
                >
                  {language.flag}
                </option>
              );
            })}
          </Dropdown>
        </label>
        <InputField
          id="queryLanguage1"
          name="queryLanguage1"
          type="text"
          maxLength={50}
          defaultValue={word.query1.translation}
        ></InputField>

        <label htmlFor="gender" name="gender">
          <Dropdown defaultValue={word.query1.gender} name="gender" id="gender">
            <option value="" name="none">
              none
            </option>
            <option value="m" name="male">
              m
            </option>
            <option value="f" name="female">
              f
            </option>
            <option value="n" name="neuter">
              n
            </option>
          </Dropdown>
        </label>

        <Label htmlFor="category" name="category">
          category:
        </Label>

        <InputField
          id="newCategory"
          name="category"
          type="text"
          maxLength={50}
          list="category"
          placeholder={word.category}
          required
        />
        <datalist name="category" id="category">
          {uniqueCategories.map((uniqueCategory) => {
            return (
              <option
                key={uniqueCategory}
                value={uniqueCategory}
                name={uniqueCategory}
              >
                {uniqueCategory}
              </option>
            );
          })}
        </datalist>

        <BackButton
          type="button"
          aria-label="go back"
          onClick={onReturnFromEditMode}
        >
          back
        </BackButton>
        <ActionButton type="submit" aria-label="edit flashcard">
          edit
        </ActionButton>
      </StyledEditForm>
    </>
  );
}

const StyledEditForm = styled(StyledForm)`
  display: flex;
  flex-flow: row wrap;
  label {
    margin: 0.1rem;
  }
`;
