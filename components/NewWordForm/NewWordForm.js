import styled from "styled-components";
import { StyledForm } from "../StyledForm";
import { nanoid } from "nanoid";
import { languages } from "../../lib/languages";

export default function NewWordForm({ onCreateNew, allWords }) {
  const allCategories = allWords.map((word) => word.category);
  const uniqueCategories = Array.from(new Set(allCategories));

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
    <StyledNewWordForm onSubmit={handleSubmit}>
      <LabelEng htmlFor="english" name="english">
        🇬🇧 english
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
          <option hidden={true}>language</option>
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
        placeholder="type translation"
        required
      ></InputQuery>

      <LabelGender htmlFor="gender" name="gender">
        <select name="gender" id="gender">
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
        placeholder="add a category"
        list="category"
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

      <button type="submit">add word</button>
    </StyledNewWordForm>
  );
}

const StyledNewWordForm = styled(StyledForm)`
  display: grid;
  grid-template-columns: 27% 46% 27%;
  grid-template-areas:
    "eng  enginput enginput"
    "query queryinput  gender"
    "cat  catinput catinput"
    " . . button";

  .catinput {
    grid-area: catinput;
  }
  button {
    grid-area: button;
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
  justify-self: end;
`;

const LabelCat = styled.label`
  grid-area: cat;
`;
