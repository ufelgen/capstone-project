import { languages } from "../../lib/languages";
import styled from "styled-components";
import { Fragment } from "react";
import Image from "next/image";
import {
  StyledForm,
  ActionButton,
  BackButton,
  InputField,
  Dropdown,
  Label,
  DropdownWrapper,
  DropdownContent,
  Language,
  Select,
  InvisibleRadioButton,
} from "../StyledForm";

export default function EditVocabForm({
  allWords,
  word,
  editId,
  onSaveEdited,
  onReturnFromEditMode,
  isDropdown,
  isDropdownTwo,
  onToggleDropdown,
  onToggleDropdownTwo,
  selectedFlag,
  onSelectFlag,
}) {
  const allCategories = allWords.map((word) => word.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  function updateVocab(event) {
    event.preventDefault();
    const fields = event.target.elements;
    if (word.query2.translation) {
      const newBase = fields.english.value;
      const newQuery1Translation = fields.queryLanguage1.value;
      const language = fields.queryLanguage.value.split("-");
      const newGender = fields.gender.value;
      const newCategory = fields.category.value;
      const newQuery2Translation = fields.queryLanguage2Translation.value;
      const language2 = fields.queryLanguage2.value.split("-");
      const newGender2 = fields.gender2.value;

      const updatedVocab = {
        id: editId,
        category: newCategory,
        base: {
          language: "english",
          flag: "gb",
          translation: newBase,
        },
        query1: {
          language: language[1],
          flag: language[0],
          translation: newQuery1Translation,
          gender: newGender,
        },
        query2: {
          language: language2[1],
          flag: language2[0],
          translation: newQuery2Translation,
          gender: newGender2,
        },
      };
      return updatedVocab;
    } else {
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
          flag: "gb",
          translation: newBase,
        },
        query1: {
          language: language[1],
          flag: language[0],
          translation: newQuery1Translation,
          gender: newGender,
        },
      };
      return updatedVocab;
    }
  }

  function handleEditVocab(event) {
    event.preventDefault();
    const updatedVocab = updateVocab(event);
    onSaveEdited(editId, updatedVocab);

    onReturnFromEditMode();
  }

  return (
    <>
      <StyledEditForm onSubmit={handleEditVocab}>
        <label htmlFor="english">
          <Image
            src={"/flags/gb.svg"}
            width={16}
            height={12}
            alt={"english flag"}
          />{" "}
          english
        </label>
        <InputField
          id="english"
          name="english"
          type="text"
          maxLength={50}
          defaultValue={word.base.translation}
        ></InputField>
        <DropdownWrapper>
          <Language onClick={onToggleDropdown}>
            <Image
              src={`/flags/${selectedFlag[0].split("-")[0]}.svg`}
              width={20}
              height={15}
              alt={`${selectedFlag[0].split("-")[1]}`}
            />
          </Language>
          <DropdownContent className={isDropdown && "show"}>
            {languages.map((language) => {
              return (
                <Fragment key={language.name}>
                  <InvisibleRadioButton
                    type="radio"
                    id={language.name}
                    name="queryLanguage"
                    value={language.value}
                    data-testid="queryLanguage"
                    onChange={() => onSelectFlag(language.value, "one")}
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

        {/*         <label htmlFor="queryLanguage1">
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
                  {language.flag} {language.name}
                </option>
              );
            })}
          </Dropdown>
        </label> */}
        <InputField
          id="queryLanguage1"
          name="queryLanguage1"
          type="text"
          maxLength={50}
          defaultValue={word.query1.translation}
        ></InputField>

        <label>
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
        {word.query2.translation && (
          <>
            <DropdownWrapper>
              <Language onClick={onToggleDropdownTwo}>
                <Image
                  src={`/flags/${selectedFlag[1].split("-")[0]}.svg`}
                  width={20}
                  height={15}
                  alt={`${selectedFlag[1].split("-")[1]}`}
                />
              </Language>
              <DropdownContent className={isDropdownTwo && "show"}>
                {languages.map((language) => {
                  return (
                    <Fragment key={language.name}>
                      <InvisibleRadioButton
                        type="radio"
                        id={`${language.name}2`}
                        name="queryLanguage2"
                        value={language.value}
                        data-testid="queryLanguage2"
                        onChange={() => onSelectFlag(language.value, "two")}
                        required
                      />
                      <Select htmlFor={`${language.name}2`}>
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
            <InputField
              id="queryLanguage2Translation"
              name="queryLanguage2Translation"
              type="text"
              maxLength={50}
              defaultValue={word.query2.translation}
            ></InputField>

            <label>
              <Dropdown
                defaultValue={word.query2.gender}
                name="gender2"
                id="gender2"
              >
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
          </>
        )}

        <Label htmlFor="category">category:</Label>

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
        <section>
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
        </section>
      </StyledEditForm>
    </>
  );
}

const StyledEditForm = styled(StyledForm)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  section {
    flex-flow: row wrap;
  }
  label {
    margin: 0.1rem;
  }
`;
