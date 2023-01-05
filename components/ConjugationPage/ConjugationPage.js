import styled from "styled-components";
import ConjugationButtons from "../ConjugationButtons/ConjugationButtons";
import { ActionButton, BackButton, InputField } from "../StyledForm";

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

    onEditConjugation(currentWord.id, updatedConjugation);
    onReturnFromEditMode();
  }

  return (
    <>
      <StyledSection>
        <ConjugationButtons tense={tense} onChangeTense={onChangeTense} />
        <StyledWrapper>
          <form onSubmit={handleSubmitEditConjugation}>
            <StyledTable>
              <tbody>
                {tense === "present" &&
                  present.map((word) => (
                    <StyledTableRowsPresent key={word.person}>
                      <StyledPronouns>{word.pronouns}</StyledPronouns>
                      {editing ? (
                        <StyledVerbform>
                          <StyledInput
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
                          <StyledInput
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
                          <StyledInput
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
            <StyledButtonContainer>
              {editing ? (
                <>
                  <BackButton
                    type="button"
                    aria-label="go back"
                    onClick={onReturnFromEditMode}
                  >
                    back
                  </BackButton>
                  <ActionButton type="submit" aria-label="update conjugation">
                    update
                  </ActionButton>
                </>
              ) : (
                <ActionButton
                  type="button"
                  aria-label="edit conjugation"
                  onClick={(event) => onEdit(event, currentWord.id)}
                >
                  edit
                </ActionButton>
              )}
            </StyledButtonContainer>
          </form>
        </StyledWrapper>
      </StyledSection>
    </>
  );
}

const StyledTable = styled.table`
  padding: 0.625rem;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 90vw;
`;

const StyledTableRows = styled.tr`
  display: grid;
  grid-template-columns: 0.8fr 2fr;
  border-bottom: 1px solid var(--white);
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
  margin-bottom: 11vh;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.25rem 1rem;
`;

const StyledWrapper = styled.article`
  background-color: var(--lightgrey);
  color: black;
  height: auto;
  border: 1px solid var(--darkmagenta);
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  margin: 1rem;
`;

const StyledInput = styled(InputField)`
  height: auto;
  margin: 0;
`;
