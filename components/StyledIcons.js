import styled from "styled-components";

export function DeclensionIcon() {
  return <StyledDeclensionIcon>D</StyledDeclensionIcon>;
}

export function NotesIcon() {
  return <StyledNotesIcon>N</StyledNotesIcon>;
}

const Icon = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  background-color: lightgray;
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
