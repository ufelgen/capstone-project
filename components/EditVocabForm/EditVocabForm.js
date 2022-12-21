import { languages } from "../../lib/languages";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

export default function EditVocabForm({
  word,
  editId,
  setEditing,
  onSaveEdited,
  setPopup,
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

    console.log("updated vocab: ", updatedVocab);
    onSaveEdited(editId, updatedVocab);

    setEditing(false);
    setPopup(false);
  }

  function returnFromEditMode() {
    setEditing(false);
    setPopup(false);
  }

  return (
    <>
      <StyledForm onSubmit={handleEditVocab}>
        <LabelEng htmlFor="english" name="english">
          🇬🇧 english
        </LabelEng>
        <InputEng
          id="english"
          name="english"
          type="text"
          maxLength={50}
          defaultValue={word.base.translation}
        ></InputEng>

        <LabelQuery htmlFor="queryLanguage1" name="queryLanguage1">
          <select
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
          </select>
        </LabelQuery>
        <InputQuery
          id="queryLanguage1"
          name="queryLanguage1"
          type="text"
          maxLength={50}
          defaultValue={word.query1.translation}
        ></InputQuery>

        <LabelGender htmlFor="gender" name="gender">
          <select defaultValue={word.query1.gender} name="gender" id="gender">
            <option hidden={true}>gender</option>
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
          </select>
        </LabelGender>

        <LabelCat htmlFor="category" name="category">
          category:
        </LabelCat>

        <input
          className="catinput"
          id="newCategory"
          name="category"
          type="text"
          maxLength={50}
          list="category"
          placeholder={word.category}
          required
        />
        <datalist name="category" id="category" className="catinput">
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

        <button type="submit">edit word</button>
        <button onClick={returnFromEditMode}>back</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  padding: 10px;
  margin: 10px 12px;
  background-color: white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  label {
    padding: 4px;
  }
  input {
    padding: 4px;
    border: 1px solid darkmagenta;
    margin: 4px;
    border-radius: 5px;
    height: 4vh;
  }

  select {
    padding: 4px;
    border: 1px solid darkmagenta;
    margin: 4px 0;
    border-radius: 5px;
    height: 4vh;
  }

  .catinput {
    grid-area: catinput;
  }
  button {
    padding: 4px;
    border: 1px solid darkmagenta;
    border-radius: 5px;
    margin: 4px;
    grid-area: button;
    background-color: darkmagenta;
    color: white;
  }
`;

const LabelEng = styled.label`
  grid-area: eng;
`;

const InputEng = styled.input`
  grid-area: enginput;
`;

const LabelQuery = styled.label`
  grid-area: query;
`;

const InputQuery = styled.input`
  grid-area: queryinput;
  width: 100%;
`;

const LabelGender = styled.label`
  grid-area: gender;
  justify-self: end;
`;

const LabelCat = styled.label`
  grid-area: cat;
`;
