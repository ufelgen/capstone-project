import styled from "styled-components";
import { nanoid } from "nanoid";

export default function NewWordForm({ onCreateNew }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const fields = event.target.elements;

    const language = fields.queryLanguage.value.split("-");
    console.log("language: ", language);
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
    console.log("new word: ", newWord);

    event.target.reset();
    fields.english.focus();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="english" name="english">
          🇬🇧
        </label>
        <input
          id="english"
          name="english"
          type="text"
          max="50"
          placeholder="type word in english"
          required
        ></input>
      </fieldset>{" "}
      <fieldset>
        <label htmlFor="queryLanguage1" name="queryLanguage1">
          <select name="queryLanguage" id="queryLanguage">
            <option value="" name="select">
              select language
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
        </label>
        <input
          id="queryLanguage1"
          name="queryLanguage1"
          type="text"
          max="50"
          placeholder="type translation"
          required
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="gender" name="gender">
          select gender
        </label>
        <select name="name" id="gender">
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
      </fieldset>
      <fieldset>
        <label htmlFor="category" name="category">
          category:
        </label>
        <select name="category" id="category">
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
        </select>
      </fieldset>
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
`;
