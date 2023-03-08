import styled from "styled-components";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import SearchForm from "../components/SearchForm/SearchForm";
import fetchDictionaryData from "../helpers/fetchDictionaryData";
import parse from "html-react-parser";
import { Fragment } from "react";
import { nanoid } from "nanoid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  ActionButton,
  BackButton,
  InputField,
  Dropdown,
  Label,
} from "../components/StyledForm";
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
  const allCategories = allWords.map((word) => word.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  const [translationToAdd, setTranslationToAdd] = useState([]);
  const [infoForNewFlashcard, setInfoForNewFlashcard] = useState([]);

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

    setTranslationToAdd([cleanQuery, cleanTranslation]);

    onPopupClick(event, "first");
  }

  function handleFlashcardEntry(event) {
    event.preventDefault();
    const type = event.target.elements.specification.value;
    const language = event.target.elements.language.value;

    const translationWithGender = translationToAdd[1].replace(" ", "-");
    const translationArray = translationWithGender.split("-");
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
      setInfoForNewFlashcard([translationToAdd[0], translationWithGender, ""]);
    } else if (type === "phrase" && language === "slovenian") {
      setInfoForNewFlashcard([translationWithGender, translationToAdd[0], ""]);
    }

    console.log("infoForNewFlashcard", infoForNewFlashcard);

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
          <Popup onSubmit={(event) => handleFlashcardEntry(event)}>
            <p>please specify:</p>
            <h4>do you wish to add a word or a phrase?</h4>
            <input
              type="radio"
              id="specification"
              name="specification"
              value="word"
              required
            />
            <label htmlFor="type">word</label>
            <input
              type="radio"
              id="specification"
              name="specification"
              value="phrase"
              required
            />
            <label htmlFor="language">phrase</label>
            <h4>which language was your search query?</h4>
            <input
              type="radio"
              id="language"
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
            <ActionButton type="submit">continue</ActionButton>
          </Popup>
        )}
        {popup === "second" && (
          <NewFlashcard onSubmit={(event) => handleNewFlashcard(event)}>
            <label htmlFor="english">
              <Image
                src={"/flags/gb.svg"}
                width={16}
                height={12}
                alt={"english flag"}
              />{" "}
            </label>
            <InputField
              id="english"
              name="english"
              type="text"
              maxLength={50}
              defaultValue={infoForNewFlashcard[0]}
            ></InputField>
            <label htmlFor="queryLanguage1">
              <Image
                src={"/flags/si.svg"}
                width={16}
                height={12}
                alt={"slovenian flag"}
              />{" "}
            </label>
            <InputField
              id="queryLanguage1"
              name="queryLanguage1"
              type="text"
              maxLength={50}
              defaultValue={infoForNewFlashcard[1]}
            ></InputField>
            <Dropdown
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
            </Dropdown>
            <Label htmlFor="category">category:</Label>

            <InputField
              id="newCategory"
              name="category"
              type="text"
              maxLength={50}
              list="category"
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
                onClick={(event) => onPopupClick(event, "false")}
              >
                back
              </BackButton>
              <ActionButton type="submit" aria-label="add flashcard">
                add
              </ActionButton>
            </section>
          </NewFlashcard>
        )}
      </Main>
      <Footer onReturnFromEditMode={onReturnFromEditMode} />
    </>
  );
}

const Main = styled.main`
  margin-bottom: 11vh;
`;

const Popup = styled.form`
  position: fixed;
  height: 50vh;
  width: 70vw;
  bottom: 25vh;
  left: 15vw;
  background-color: var(--lightgrey);
`;

const NewFlashcard = styled(Popup)``;
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
