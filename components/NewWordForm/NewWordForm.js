import styled from "styled-components";
import { StyledForm, ActionButton, Dropdown, InputField } from "../StyledForm";
import { languages } from "../../lib/languages";
import Image from "next/image";
import { useState } from "react";
import { Fragment } from "react";

export default function NewWordForm({ onCreateNew, allWords }) {
  const allCategories = allWords.map((word) => word.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  const [isDropdown, setIsDropdown] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const fields = event.target.elements;

    const language = fields.queryLanguage.value.split("-");
    const newWord = {
      category: fields.category.value.trim(),
      base: {
        language: "english",
        flag: "gb",
        translation: fields.english.value,
      },
      query1: {
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
      <LabelEng htmlFor="english">
        <Image
          src={"/flags/gb.svg"}
          width={16}
          height={12}
          alt={"english flag"}
        />{" "}
        english
      </LabelEng>
      <InputEng
        id="english"
        name="english"
        type="text"
        maxLength={50}
        placeholder="type word in english"
        required
      ></InputEng>

      <DropdownWrapper>
        <Language onClick={() => setIsDropdown(!isDropdown)}>
          language &#x25BC;
        </Language>
        <DropdownContent className={isDropdown && "show"}>
          {languages.map((language) => {
            return (
              <Fragment key={language.name}>
                <input
                  type="radio"
                  id={language.name}
                  name="queryLanguage"
                  value={language.value}
                  data-testid="queryLanguage"
                  required
                />
                <Select htmlFor={language.name}>
                  <Image
                    src={`/flags/${language.value.split("-")[0]}.svg`}
                    width={20}
                    height={15}
                    alt={`${language.name} flag`}
                  />
                </Select>
              </Fragment>
            );
          })}
        </DropdownContent>
      </DropdownWrapper>

      {/* <LabelQuery htmlFor="queryLanguage1">
        <Dropdown
          name="queryLanguage"
          id="queryLanguage"
          data-testid="queryLanguage"
          required
        >
          <option hidden={true} value="">
            language
          </option>
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
      </LabelQuery> */}
      <InputQuery
        id="queryLanguage1"
        name="queryLanguage1"
        type="text"
        maxLength={50}
        placeholder="type translation"
        data-testid="queryLanguage1"
        required
      ></InputQuery>

      <LabelGender>
        <Dropdown name="gender" id="gender" data-testid="gender" required>
          <option hidden={true} value="">
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
        </Dropdown>
      </LabelGender>

      <LabelCat htmlFor="category">category:</LabelCat>

      <InputField
        className="catinput"
        id="newCategory"
        name="category"
        type="text"
        maxLength={50}
        placeholder="add a category"
        list="category"
        data-testid="category"
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

      <StyledButton type="submit" aria-label="add new flashcard">
        add word
      </StyledButton>
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
`;

const StyledButton = styled(ActionButton)`
  grid-area: button;
  width: 100%;
`;
const LabelEng = styled.label`
  grid-area: eng;
`;

const InputEng = styled(InputField)`
  grid-area: enginput;
`;

const LabelQuery = styled.label`
  grid-area: query;
`;

const InputQuery = styled(InputField)`
  grid-area: queryinput;
`;

const LabelGender = styled.label`
  grid-area: gender;
  justify-self: end;
`;

const LabelCat = styled.label`
  grid-area: cat;
`;

const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Language = styled.button`
  padding: 0.25rem;
  border: 1px solid var(--darkmagenta);
  margin: 0.25rem;
  border-radius: 5px;
  height: 4vh;
  margin: 0.25rem 0;
  background-color: white;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  &.show {
    display: block;
    z-index: 1;
    background-color: white;
  }
`;

const Select = styled.label`
  display: block;
  padding: 5px;
  border: none;
  background-color: white;
`;

const InvisibleRadioButton = styled.input`
  display: none;
`;
