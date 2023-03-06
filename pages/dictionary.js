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
import Head from "next/head";
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

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
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
                      <ResultSection>{parse(rom.headword_full)}</ResultSection>
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
                                    {translation.target.replace(/&#39;/g, "'")}
                                  </TranslationP>
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
      color: var(--darkmagenta);
      font-weight: bold;
    }

    &.full_collocation {
      //color: var(--darkgrey);
    }

    &.rhetoric,
    &.topic {
      color: var(--middlegrey);
    }

    &.example {
      font-style: italic;
    }
  }

  article {
    margin: 0 2.5rem;
  }
`;

const TranslationP = styled.p`
  margin-bottom: 0.5rem;
`;

const SourceP = styled.p`
  strong {
    &.headword {
      color: var(--darkmagenta);
    }
  }
`;
