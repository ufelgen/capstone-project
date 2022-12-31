import styled from "styled-components";
import { useState } from "react";
import ConjugationButtons from "./ConjugationButtons";

export default function ConjugationPage({ currentWord }) {
  const present = currentWord.query1.conjugation.present;
  const past = currentWord.query1.conjugation.past;
  const future = currentWord.query1.conjugation.future;
  const [tense, setTense] = useState("present");

  function changeTense(tense) {
    setTense(tense);
  }

  return (
    <>
      <StyledSection>
        <ConjugationButtons onChangeTense={changeTense} />
        <StyledTable>
          {" "}
          <tbody>
            {tense === "present" &&
              present.map((word) => (
                <StyledTableRowsPresent key={word.person}>
                  <StyledPronouns>{word.pronouns}</StyledPronouns>
                  <StyledVerbform>{word.verbForm}</StyledVerbform>
                </StyledTableRowsPresent>
              ))}{" "}
            {tense === "past" &&
              past.map((word) => (
                <StyledTableRows key={word.person}>
                  <StyledPronouns>{word.pronouns}</StyledPronouns>
                  <StyledVerbform>{word.verbForm}</StyledVerbform>
                </StyledTableRows>
              ))}{" "}
            {tense === "future" &&
              future.map((word) => (
                <StyledTableRows key={word.person}>
                  <StyledPronouns>{word.pronouns}</StyledPronouns>
                  <StyledVerbform>{word.verbForm}</StyledVerbform>
                </StyledTableRows>
              ))}{" "}
          </tbody>
        </StyledTable>
      </StyledSection>
    </>
  );
}

const StyledTable = styled.table`
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: lightgray;
  //background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  position: relative;
  justify-content: center;
  align-items: center;
  width: 85%;
`;

const StyledTableRows = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid white;
  :last-child {
    border-bottom: none;
  }
`;
const StyledTableRowsPresent = styled(StyledTableRows)`
  grid-template-columns: 1fr 1.5fr;
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
