import styled from "styled-components";
import { InputField, Dropdown, BackButton, ActionButton } from "../StyledForm";
import { languages } from "../../lib/languages";

export default function AddTranslationForm({
  onReturnFromEditMode,
  onSaveTranslation,
  id,
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
    <form onSubmit={handleAddedTranslation}>
      <label htmlFor="queryLanguage1" name="queryLanguage1">
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
      </label>
      <InputField
        id="queryLanguage2Translation"
        name="queryLanguage2Translation"
        type="text"
        maxLength={50}
        placeholder="type translation"
        required
      ></InputField>
      <label htmlFor="gender2" name="gender2">
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
      <BackButton type="button" aria-label="go back">
        back
      </BackButton>
      <ActionButton type="submit" aria-label="save new translation">
        save
      </ActionButton>
    </form>
  );
}
