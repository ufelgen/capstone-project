import styled from "styled-components";
import {
  InputField,
  Dropdown,
  BackButton,
  ActionButton,
  DropdownWrapper,
  DropdownContent,
  Language,
  Select,
  InvisibleRadioButton,
} from "../StyledForm";
import { languages } from "../../lib/languages";
import Image from "next/image";
import { Fragment } from "react";

export default function AddTranslationForm({
  onReturnFromEditMode,
  onSaveTranslation,
  id,
  isDropdownTwo,
  onToggleDropdownTwo,
  selectedFlag,
  onSelectFlag,
}) {
  function handleAddedTranslation(event) {
    event.preventDefault();
    const fields = event.target.elements;
    const language2 = fields.queryLanguage2.value.split("-");
    const translation2 = fields.queryLanguage2Translation.value;
    const gender2 = fields.gender2.value;

    const query2 = {
      language: language2[1],
      flag: language2[0],
      translation: translation2,
      gender: gender2,
    };

    onSaveTranslation(id, query2);
    onReturnFromEditMode();
  }

  return (
    <StyledForm onSubmit={handleAddedTranslation}>
      <DropdownWrapper>
        <Language onClick={onToggleDropdownTwo}>
          {selectedFlag === "" ? (
            `language` + "\u25BC"
          ) : (
            <Image
              src={`/flags/${selectedFlag.split("-")[0]}.svg`}
              width={20}
              height={15}
              alt={`${selectedFlag.split("-")[1]} flag`}
            />
          )}
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
                  onChange={() => onSelectFlag(language.value)}
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

      {/*  <label htmlFor="queryLanguage2Translation">
        <Dropdown name="queryLanguage2" id="queryLanguage2" required>
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
      </label> */}
      <InputField
        id="queryLanguage2Translation"
        name="queryLanguage2Translation"
        type="text"
        maxLength={50}
        placeholder="type translation"
        required
      ></InputField>
      <label>
        <Dropdown name="gender2" id="gender2" required>
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
      </label>
      <section>
        <BackButton
          type="button"
          aria-label="go back"
          onClick={onReturnFromEditMode}
        >
          back
        </BackButton>
        <ActionButton type="submit" aria-label="save new translation">
          save
        </ActionButton>
      </section>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  section {
    flex-flow: row wrap;
  }
`;
