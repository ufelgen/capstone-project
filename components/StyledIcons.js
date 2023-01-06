import styled from "styled-components";

export function DeclensionIcon() {
  return (
    <StyledDeclensionIcon aria-label="word with existing declension">
      D
    </StyledDeclensionIcon>
  );
}

export function ConjugationIcon() {
  return (
    <StyledDeclensionIcon aria-label="word with existing conjugation">
      C
    </StyledDeclensionIcon>
  );
}

export function NotesIcon() {
  return (
    <StyledNotesIcon aria-label="word with existing notes">N</StyledNotesIcon>
  );
}

const Icon = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  background-color: var(--lightgrey);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const StyledDeclensionIcon = styled(Icon)`
  top: 5%;
  right: 5%;
`;
const StyledNotesIcon = styled(Icon)`
  top: 5%;
  right: 20%;
`;
