import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import {
  StyledForm,
  ActionButton,
  InputField,
  Label,
} from "../components/StyledForm";
import fetchDictionaryData from "../helpers/fetchDictionaryData";
import parse from "html-react-parser";

export default function Dictionary({
  onReturnFromEditMode,
  dictionaryResult,
  onUpdateDictionaryResult,
}) {
  async function handleSearch(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value;
    const translation = await fetchDictionaryData(searchTerm);
    console.log("translation in frontend", translation);
    onUpdateDictionaryResult(translation);
  }

  //const parse = require("html-react-parser");

  return (
    <>
      <StyledForm onSubmit={() => handleSearch(event)}>
        <Label htmlFor="searchTerm"></Label>
        <SearchField name="searchTerm" id="searchTerm" />
        <ActionButton type="submit" aria-label="submit search">
          search
        </ActionButton>
      </StyledForm>
      <ResultSection>
        {dictionaryResult[0] &&
          dictionaryResult.map((result) =>
            result.hits.map((hit) =>
              hit.roms.map((rom) => {
                return (
                  <>
                    {parse(rom.headword_full)}
                    {rom.arabs.map((arab) => {
                      return (
                        <>
                          {parse(arab.header)}{" "}
                          {arab.translations.map((translation) => {
                            return (
                              <>
                                {parse(translation.source)} {translation.target}
                              </>
                            );
                          })}
                        </>
                      );
                    })}
                  </>
                );
              })
            )
          )}
      </ResultSection>
      <Footer onReturnFromEditMode={onReturnFromEditMode} />
    </>
  );
}

const SearchField = styled(InputField)`
  width: 77%;
  margin: 0;
`;

const ResultSection = styled.section`
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: var(--white);
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid var(--darkmagenta);
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  position: relative;
  justify-content: center;
  align-items: center;

  span {
    &.headword_attributes {
      color: hotpink;
    }

    &.topic {
      color: hotpink;
    }
  }
`;
