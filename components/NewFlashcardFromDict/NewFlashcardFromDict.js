import styled from "styled-components";
import Image from "next/image";
import {
  ActionButton,
  BackButton,
  InputField,
  Dropdown,
  PopupForm,
} from "../StyledForm";

export default function NewFlashcardFromDictionary({
  onNewFlashcard,
  onPopupClick,
  infoForNewFlashcard,
  uniqueCategories,
}) {
  return (
    <NewFlashcard onSubmit={(event) => onNewFlashcard(event)}>
      <EnglishFlag htmlFor="english">
        <Image
          src={"/flags/gb.svg"}
          width={16}
          height={12}
          alt={"english flag"}
        />{" "}
      </EnglishFlag>
      <EnglishWord
        id="english"
        name="english"
        type="text"
        maxLength={50}
        defaultValue={infoForNewFlashcard[0]}
      ></EnglishWord>
      <SlovenianFlag htmlFor="queryLanguage1">
        <Image
          src={"/flags/si.svg"}
          width={16}
          height={12}
          alt={"slovenian flag"}
        />{" "}
      </SlovenianFlag>
      <SlovenianWord
        id="queryLanguage1"
        name="queryLanguage1"
        type="text"
        maxLength={50}
        defaultValue={infoForNewFlashcard[1]}
      ></SlovenianWord>
      <GenderDropdown
        defaultValue={infoForNewFlashcard[2]}
        name="gender"
        id="gender"
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
      </GenderDropdown>

      <CategoryInput
        id="newCategory"
        name="category"
        type="text"
        maxLength={50}
        list="category"
        placeholder="choose category"
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
      <ButtonDiv>
        <BackButton
          type="button"
          aria-label="go back"
          onClick={(event) => onPopupClick(event, "false")}
        >
          back
        </BackButton>
        <ActionButton type="submit" aria-label="add flashcard">
          add
        </ActionButton>
      </ButtonDiv>
    </NewFlashcard>
  );
}

const NewFlashcard = styled(PopupForm)`
  display: grid;
  grid-template-columns: 10% 60% 20%;
  padding-left: 0;
`;

const EnglishFlag = styled.label`
  grid-column: 1;
  grid-row: 1;
`;

const EnglishWord = styled(InputField)`
  grid-column: 2 / span 2;
  grid-row: 1;
`;

const SlovenianFlag = styled.label`
  grid-column: 1;
  grid-row: 2;
`;

const SlovenianWord = styled(InputField)`
  grid-column: 2;
  grid-row: 2;
`;

const GenderDropdown = styled(Dropdown)`
  grid-column: 3;
  grid-row: 2;
  margin-left: 0.5rem;
`;

const CategoryInput = styled(InputField)`
  grid-column: 1 / span 3;
  grid-row: 3;
`;

const ButtonDiv = styled.div`
  grid-column: 1 / span 3;
  grid-row: 4;
`;
