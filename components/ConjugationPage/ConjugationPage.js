import styled from "styled-components";
import { useState } from "react";
import ConjugationButtons from "../ConjugationButtons/ConjugationButtons";

export default function ConjugationPage({
  currentWord,
  editing,
  onEdit,
  onReturnFromEditMode,
  onEditConjugation,
  tense,
  onChangeTense,
}) {
  const present = currentWord.query1.conjugation.present;
  const past = currentWord.query1.conjugation.past;
  const future = currentWord.query1.conjugation.future;

  function updateConjugation(event, present, past, future) {
    const fields = event.target.elements;
    if (tense === "present") {
      const updatedConjugation = present.map((word) => {
        return {
          person: word.person,
          pronouns: word.pronouns,
          verbForm: fields[word.person].value,
        };
      });
      return updatedConjugation;
    } else if (tense === "past") {
      const updatedConjugation = past.map((word) => {
        return {
          person: word.person,
          pronouns: word.pronouns,
          verbForm: fields[word.person].value,
        };
      });
      return updatedConjugation;
    } else if (tense === "future") {
      const updatedConjugation = future.map((word) => {
        return {
          person: word.person,
          pronouns: word.pronouns,
          verbForm: fields[word.person].value,
        };
      });
      return updatedConjugation;
    }
  }
  function handleSubmitEditConjugation(event) {
    event.preventDefault();

    const updatedConjugation = updateConjugation(event, present, past, future);
    // const updatedConjugationPresent = present.map((word) => {
    //   return {
    //     verbForm: fields[word.person].value,
    //   };
    // });

    // if (tense === "present") {
    //   const updatedConjugation = present.map((word) => {
    //     return {
    //       verbForm: fields[word.person].value,
    //     };
    //   });
    //   return updatedConjugation;
    // } else if (tense === "past") {
    //   const updatedConjugation = past.map((word) => {
    //     return {
    //       verbForm: fields[word.person].value,
    //     };
    //   });
    //   return updatedConjugation;
    // } else if (tense === "future") {
    //   const updatedConjugation = future.map((word) => {
    //     return {
    //       verbForm: fields[word.person].value,
    //     };
    //   });
    //   return updatedConjugation;
    // }

    //////////////////////
    console.log("updatedConjugation in ConjugationPage", updatedConjugation);
    /////////////////////

    onEditConjugation(currentWord.id, updatedConjugation);
    onReturnFromEditMode();
  }

  return (
    <>
      <StyledSection>
        <ConjugationButtons tense={tense} onChangeTense={onChangeTense} />
        <form onSubmit={handleSubmitEditConjugation}>
          <StyledTable>
            <tbody>
              {tense === "present" &&
                present.map((word) => (
                  <StyledTableRowsPresent key={word.person}>
                    <StyledPronouns>{word.pronouns}</StyledPronouns>
                    {editing ? (
                      <StyledVerbform>
                        <input
                          aria-label={word.person}
                          name={word.person}
                          id={word.person}
                          defaultValue={word.verbForm}
                        />
                      </StyledVerbform>
                    ) : (
                      <StyledVerbform>{word.verbForm}</StyledVerbform>
                    )}
                  </StyledTableRowsPresent>
                ))}
              {tense === "past" &&
                past.map((word) => (
                  <StyledTableRows key={word.person}>
                    <StyledPronouns>{word.pronouns}</StyledPronouns>
                    {editing ? (
                      <StyledVerbform>
                        <input
                          aria-label={word.person}
                          name={word.person}
                          id={word.person}
                          defaultValue={word.verbForm}
                        />
                      </StyledVerbform>
                    ) : (
                      <StyledVerbform>{word.verbForm}</StyledVerbform>
                    )}
                  </StyledTableRows>
                ))}
              {tense === "future" &&
                future.map((word) => (
                  <StyledTableRows key={word.person}>
                    <StyledPronouns>{word.pronouns}</StyledPronouns>
                    {editing ? (
                      <StyledVerbform>
                        <input
                          aria-label={word.person}
                          name={word.person}
                          id={word.person}
                          defaultValue={word.verbForm}
                        />
                      </StyledVerbform>
                    ) : (
                      <StyledVerbform>{word.verbForm}</StyledVerbform>
                    )}
                  </StyledTableRows>
                ))}
            </tbody>
          </StyledTable>
          {editing ? (
            <>
              <button type="button" onClick={onReturnFromEditMode}>
                back
              </button>
              <button type="submit">update</button>
            </>
          ) : (
            <button
              type="button"
              onClick={(event) => onEdit(event, currentWord.id)}
            >
              edit
            </button>
          )}
        </form>
      </StyledSection>
    </>
  );
}

const StyledTable = styled.table`
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: lightgray;
  color: black;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  position: relative;
  justify-content: center;
  align-items: center;
  width: 90vw;
`;

const StyledTableRows = styled.tr`
  display: grid;
  grid-template-columns: 0.8fr 2fr;
  border-bottom: 1px solid white;
  padding: 0.1rem;
  :last-child {
    border-bottom: none;
  }
`;
const StyledTableRowsPresent = styled(StyledTableRows)`
  grid-template-columns: 1fr 1fr;
`;

const StyledPronouns = styled.td`
  text-align: right;
  padding-right: 1rem;
`;

const StyledVerbform = styled.td`
  text-align: left;
  padding-left: 1rem;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
