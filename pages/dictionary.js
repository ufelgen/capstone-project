import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import SearchForm from "../components/SearchForm/SearchForm";
import SpecificationForm from "../components/SpecificationForm/SpecificationForm";
import NewFlashcardFromDictionary from "../components/NewFlashcardFromDict/NewFlashcardFromDict";
import { fetchDictionaryData } from "../helpers/fetchDictionaryData";
import parse from "html-react-parser";
import { Fragment } from "react";
import { nanoid } from "nanoid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

export default function Dictionary({
  onReturnFromEditMode,
  dictionaryResult,
  onUpdateDictionaryResult,
  onPopupClick,
  onClosePopup,
  popup,
  allWords,
  onCreateNew,
}) {
  const allCategories = allWords?.map((word) => word.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  const [translationToAdd, setTranslationToAdd] = useState([]);
  const [infoForNewFlashcard, setInfoForNewFlashcard] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value;
    const translation = await fetchDictionaryData(searchTerm);
    onUpdateDictionaryResult(translation);
    event.target.reset();
  }

  function handleAddFlashcard(event, query, translation) {
    event.preventDefault();
    const cleanQuery = query.replace(/<\/?[^>]+(>|$)/g, "");
    const cleanTranslation = translation.replace(/<\/?[^>]+(>|$)/g, "");
    setTranslationToAdd([cleanQuery, cleanTranslation]);
    onPopupClick(event, "first");
  }

  function handleFlashcardEntry(event) {
    event.preventDefault();
    const type = event.target.elements.specification.value;
    const language = event.target.elements.language.value;
    const fullTranslation = translationToAdd[1].replace(" ", "-");
    const translationArray = fullTranslation.split("-");
    const finalTranslation = translationArray[0];
    const finalGender = translationArray[1];

    if (type === "word" && language === "english") {
      setInfoForNewFlashcard([
        translationToAdd[0],
        finalTranslation,
        finalGender,
      ]);
    } else if (type === "word" && language === "slovenian") {
      setInfoForNewFlashcard([finalTranslation, translationToAdd[0], ""]);
    } else if (type === "phrase" && language === "english") {
      setInfoForNewFlashcard([translationToAdd[0], fullTranslation, ""]);
    } else if (type === "phrase" && language === "slovenian") {
      setInfoForNewFlashcard([fullTranslation, translationToAdd[0], ""]);
    } else {
      console.log("blublabli");
      return;
    }

    onPopupClick(event, "second");
  }

  function handleNewFlashcard(event) {
    event.preventDefault();
    const fields = event.target.elements;
    const newWord = {
      category: fields.category.value.trim(),
      base: {
        language: "english",
        flag: "gb",
        translation: fields.english.value,
      },
      query1: {
        language: "slovenian",
        flag: "si",
        translation: fields.queryLanguage1.value,
        gender: fields.gender.value,
      },
    };

    onCreateNew(newWord);
    onPopupClick(event, false);
  }

  return (
    <>
      <Main>
        <SearchForm onSearch={handleSearch} />

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
        {popup === "first" && (
          <SpecificationForm
            onFlashcardEntry={handleFlashcardEntry}
            onClosePopup={onClosePopup}
          />
        )}
        {popup === "second" && (
          <NewFlashcardFromDictionary
            onNewFlashcard={handleNewFlashcard}
            onPopupClick={onPopupClick}
            infoForNewFlashcard={infoForNewFlashcard}
            uniqueCategories={uniqueCategories}
          />
        )}
      </Main>
      <Footer onReturnFromEditMode={onReturnFromEditMode} />
    </>
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
