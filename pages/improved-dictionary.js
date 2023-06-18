import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import ImprovedSearchForm from "../components/ImprovedSearchForm/ImprovedSearchForm";
import { fetchAllDictionaryData } from "../helpers/fetchDictionaryData";
import { Fragment } from "react";
import parse from "html-react-parser";
import { nanoid } from "nanoid";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function ImprovedDictionary({
  onReturnFromEditMode,
  onSelectFlag,
  onToggleDropdown,
  onToggleDropdownTwo,
  selectedFlag,
  isDropdown,
  isDropdownTwo,
  onUpdateDictionaryResult,
  dictionaryResult,
}) {
  async function handleImprovedSearch(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm2.value;
    const languageFrom = selectedFlag[0];
    const languageTo = selectedFlag[1];
    const searchParams = `${searchTerm}-${languageFrom}-${languageTo}`;
    const translation = await fetchAllDictionaryData(searchParams);
    onUpdateDictionaryResult(translation);
    event.target.reset();

    console.log("huhu testi");
    //onReturnFromEditMode();
  }

  return (
    <Main>
      <ImprovedSearchForm
        onSelectFlag={onSelectFlag}
        onToggleDropdown={onToggleDropdown}
        onToggleDropdownTwo={onToggleDropdownTwo}
        onImprovedSearch={handleImprovedSearch}
        selectedFlag={selectedFlag}
        isDropdown={isDropdown}
        isDropdownTwo={isDropdownTwo}
      />

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
                                  onClick={(event) =>
                                    handleAddFlashcard(
                                      event,
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
      <Footer onReturnFromEditMode={onReturnFromEditMode} />
    </Main>
  );
}

const Main = styled.main`
  margin-bottom: 11vh;
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
      font-weight: bold;
    }

    &.full_collocation {
      //additional styles go here
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
      //additional styles go here
    }
  }
`;

const Headword = styled.h4`
  color: var(--darkmagenta);
`;
