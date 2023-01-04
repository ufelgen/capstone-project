import styled from "styled-components";

export default function EditConjugation({ currentWord }) {
  const present = currentWord.query1.conjugation.present;
  return (
    <form>
      {present.map((word) => (
        <StyledTableRowsPresent key={word.person}>
          <StyledPronouns>{word.pronouns}</StyledPronouns>
          <StyledVerbform>
            <input
              aria-label={word.person}
              name={word.person}
              id={word.person}
              placeholder={word.verbForm}
            />
          </StyledVerbform>
        </StyledTableRowsPresent>
      ))}
    </form>
  );
}

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
