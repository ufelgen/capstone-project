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
import { Fragment } from "react";
import { nanoid } from "nanoid";
import { AiOutlinePlusCircle } from "react-icons/ai";

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
    event.target.reset();
  }

  function handleAddFlashcard(query, translation) {
    const cleanQuery = query.replace(/<\/?[^>]+(>|$)/g, "");
    const cleanTranslation = translation.replace(/<\/?[^>]+(>|$)/g, "");
    const translationWithGender = cleanTranslation.replace(" ", "-");
    const translationArray = translationWithGender.split("-");
    const finalTranslation = translationArray[0];
    const finalGender = translationArray[1];
    console.log("query", cleanQuery);
    console.log("translation", finalTranslation);
    console.log("gender", finalGender);
  }

  return (
    <>
      <Main>
        <StyledForm onSubmit={() => handleSearch(event)}>
          <Label htmlFor="searchTerm"></Label>
          <SearchField name="searchTerm" id="searchTerm" />
          <ActionButton type="submit" aria-label="submit search">
            search
          </ActionButton>
        </StyledForm>
        <>
          {dictionaryResult[0] &&
            dictionaryResult.map((result) =>
              result.hits.map((hit) =>
                hit.roms.map((rom) => {
                  return (
                    <Fragment key={nanoid()}>
                      <ResultSection>
                        <Headword>{parse(rom.headword_full)}</Headword>
                      </ResultSection>
                      {rom.arabs.map((arab) => {
                        return (
                          <ResultSection key={nanoid()}>
                            <h4>{parse(arab.header)}</h4>
                            {arab.translations.map((translation) => {
                              return (
                                <article key={nanoid()}>
                                  <SourceP>
                                    {parse(
                                      translation.source.replace(/&#39;/g, "'")
                                    )}
                                  </SourceP>
                                  <TranslationP>
                                    {parse(
                                      translation.target.replace(/&#39;/g, "'")
                                    )}
                                  </TranslationP>
                                  <button
                                    onClick={() =>
                                      handleAddFlashcard(
                                        translation.source,
                                        translation.target
                                      )
                                    }
                                  >
                                    <AiOutlinePlusCircle
                                      color="darkmagenta"
                                      size="4vh"
                                    />
                                  </button>
                                </article>
                              );
                            })}
                          </ResultSection>
                        );
                      })}
                    </Fragment>
                  );
                })
              )
            )}
        </>
      </Main>
      <Footer onReturnFromEditMode={onReturnFromEditMode} />
    </>
  );
}

const Main = styled.main`
  margin-bottom: 11vh;
`;

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
      //color: var(--darkmagenta);
      font-weight: bold;
    }

    &.full_collocation {
      //color: var(--darkgrey);
    }

    &.rhetoric,
    &.style,
    &.region,
    &.topic {
      color: var(--middlegrey);
    }

    &.example,
    &.genus {
      font-style: italic;
    }

    &.phonetics {
      color: var(--darkgrey);
    }
  }

  article {
    margin: 0 2.5rem;
    display: grid;
    grid-template-columns: 90% 10%;
    p {
      grid-column: 1;
    }
    button {
      grid-column: 2;
      grid-row: 1 / span 2;
      //margin: 0.5rem;
      border: none;
      background-color: transparent;
    }
  }
`;

const TranslationP = styled.p`
  margin-bottom: 0.5rem;
`;

const SourceP = styled.p`
  strong {
    &.headword {
      //color: var(--darkmagenta);
    }
  }
`;

const Headword = styled.h4`
  color: var(--darkmagenta);
`;
