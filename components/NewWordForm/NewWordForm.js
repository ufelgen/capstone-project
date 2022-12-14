import styled from "styled-components";

export default function NewWordForm() {
  return (
    <StyledForm>
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
        ></input>
      </fieldset>{" "}
      <fieldset>
        <label htmlFor="queryLanguage1" name="queryLanguage1">
          <select value="queryLanguage" id="queryLanguage">
            <option value="[🇭🇷, croatian]" name="croatian">
              🇭🇷
            </option>
            <option value="[🇨🇿, czech]" name="czech">
              🇨🇿
            </option>
            <option value="[🇩🇰, danish]" name="danish">
              🇩🇰
            </option>
            <option value="[🇩🇪, german]" name="german">
              🇩🇪
            </option>
            <option value="[🇫🇷, french]" name="french">
              🇫🇷
            </option>
            <option value="[🇬🇷, greek]" name="greek">
              🇬🇷
            </option>
            <option value="[🇮🇹, italian]" name="italian">
              🇮🇹
            </option>
            <option value="[🇵🇹, portuguese]" name="portuguese">
              🇵🇹
            </option>
            <option value="[🇷🇺, russian]" name="russian">
              🇷🇺
            </option>
            <option value="[🇸🇮, slovenian]" name="slovenian">
              🇸🇮
            </option>
            <option value="[🇪🇸, spanish]" name="spanish">
              🇪🇸
            </option>
            <option value="[🇹🇷, turkish]" name="turkish">
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
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="category" name="category">
          category:
        </label>
        <select value="category" id="category">
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
