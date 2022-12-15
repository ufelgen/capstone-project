import styled from "styled-components";
import { nanoid } from "nanoid";

export default function NewWordForm({ onCreateNew }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const fields = event.target.elements;

    const language = fields.queryLanguage.value.split("-");
    const newWord = {
      category: fields.category.value,
      base: {
        language: "english",
        flag: "🇬🇧",
        translation: fields.english.value,
      },
      query1: {
        id: nanoid(),
        language: language[1],
        flag: language[0],
        translation: fields.queryLanguage1.value,
        gender: fields.gender.value,
      },
    };

    onCreateNew(newWord);

    event.target.reset();
    fields.english.focus();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <LabelEng htmlFor="english" name="english">
        🇬🇧 english :
      </LabelEng>
      <InputEng
        id="english"
        name="english"
        type="text"
        maxLength={50}
        placeholder="type word in english"
        required
      ></InputEng>

      <LabelQuery htmlFor="queryLanguage1" name="queryLanguage1">
        <select name="queryLanguage" id="queryLanguage">
          <option selected disabled>
            language
          </option>
          <option value="🇭🇷-croatian" name="croatian">
            🇭🇷
          </option>
          <option value="🇨🇿-czech" name="czech">
            🇨🇿
          </option>
          <option value="🇩🇰-danish" name="danish">
            🇩🇰
          </option>
          <option value="🇩🇪-german" name="german">
            🇩🇪
          </option>
          <option value="🇫🇷-french" name="french">
            🇫🇷
          </option>
          <option value="🇬🇷-greek" name="greek">
            🇬🇷
          </option>
          <option value="🇮🇹-italian" name="italian">
            🇮🇹
          </option>
          <option value="🇵🇹-portuguese" name="portuguese">
            🇵🇹
          </option>
          <option value="🇷🇺-russian" name="russian">
            🇷🇺
          </option>
          <option value="🇸🇮-slovenian" name="slovenian">
            🇸🇮
          </option>
          <option value="🇪🇸-spanish" name="spanish">
            🇪🇸
          </option>
          <option value="🇹🇷-turkish" name="turkish">
            🇹🇷
          </option>
        </select>
      </LabelQuery>
      <InputQuery
        id="queryLanguage1"
        name="queryLanguage1"
        type="text"
        maxLength={50}
        placeholder="type translation"
        required
      ></InputQuery>

      <LabelGender htmlFor="gender" name="gender">
        <select name="gender" id="gender">
          <option selected disabled>
            gender
          </option>
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
      <InputCat name="category" id="category">
        <option value="animals" name="animals">
          animals
        </option>
        <option value="colours" name="colours">
          colours
        </option>
        <option value="fruits" name="fruits">
          fruits
        </option>
        <option value="verbs" name="verbs">
          verbs
        </option>
      </InputCat>

      <button type="submit">add word</button>
    </StyledForm>
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
  display: grid;
  grid-template-areas:
    "eng  enginput enginput"
    "query queryinput  gender"
    "cat  catinput catinput"
    " . . button";

  label {
    padding: 4px;
  }
  input {
    padding: 4px;
    border: 1px solid darkmagenta;
    margin: 4px;
    border-radius: 5px;
  }

  select {
    padding: 4px;
    border: 1px solid darkmagenta;
    margin: 4px;
    border-radius: 5px;
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
`;

const LabelGender = styled.label`
  grid-area: gender;
`;

const LabelCat = styled.label`
  grid-area: cat;
`;

const InputCat = styled.select`
  grid-area: catinput;
`;
