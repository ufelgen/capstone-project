import styled from "styled-components";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import SearchForm from "../components/SearchForm/SearchForm";
import fetchDictionaryData from "../helpers/fetchDictionaryData";
import parse from "html-react-parser";
import { Fragment } from "react";
import { nanoid } from "nanoid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ActionButton, BackButton } from "../components/StyledForm";
import { useState } from "react";

export default function Dictionary({
  onReturnFromEditMode,
  dictionaryResult,
  onUpdateDictionaryResult,
  onPopupClick,
  onClosePopup,
  popup,
}) {
  const [queryToAdd, setQueryToAdd] = useState("");
  const [translationToAdd, setTranslationToAdd] = useState("");

  async function handleSearch(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value;
    const translation = await fetchDictionaryData(searchTerm);
    console.log("translation in frontend", translation);
    onUpdateDictionaryResult(translation);
    event.target.reset();
  }

  function handleAddFlashcard(event, query, translation) {
    event.preventDefault();

    const cleanQuery = query.replace(/<\/?[^>]+(>|$)/g, "");
    const cleanTranslation = translation.replace(/<\/?[^>]+(>|$)/g, "");

    setQueryToAdd(cleanQuery);
    setTranslationToAdd(cleanTranslation);

    onPopupClick(event, "first");
  }

  function handleFlashcardEntry(event) {
    event.preventDefault();
    const type = event.target.elements.type.value;
    const language = event.target.elements.language.value;

    const translationWithGender = translationToAdd.replace(" ", "-");
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
          <Popup>
            <form>
              <p>please specify:</p>
              <h4>do you wish to add a word or a phrase?</h4>
              <input type="radio" id="word" name="type" value="word" required />
              <label htmlFor="type">word</label>
              <input
                type="radio"
                id="phrase"
                name="type"
                value="phrase"
                required
              />
              <label htmlFor="type">phrase</label>
              <h4>which language was your search query?</h4>
              <input
                type="radio"
                id="english"
                name="language"
                value="english"
                required
              />
              <label htmlFor="language">
                <Image
                  src="/flags/gb.svg"
                  width={20}
                  height={15}
                  alt="great britain flag"
                />
              </label>
              <input
                type="radio"
                id="slovenian"
                name="language"
                value="slovenian"
                required
              />
              <label htmlFor="language">
                <Image
                  src="/flags/si.svg"
                  width={20}
                  height={15}
                  alt="slovenian flag"
                />
              </label>
              <BackButton onClick={onClosePopup}>back</BackButton>
              <ActionButton
                type="submit"
                onClick={(event) => handleFlashcardEntry(event)}
              >
                continue
              </ActionButton>
            </form>
          </Popup>
        )}
      </Main>
      <Footer onReturnFromEditMode={onReturnFromEditMode} />
    </>
  );
}

const Main = styled.main`
  margin-bottom: 11vh;
`;

const Popup = styled.section`
  position: fixed;
  height: 50vh;
  width: 70vw;
  bottom: 25vh;
  left: 15vw;
  background-color: var(--lightgrey);
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
