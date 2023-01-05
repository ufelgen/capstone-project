import styled from "styled-components";

export default function Header() {
  return <StyledHeader>flashcards extreme</StyledHeader>;
}

const StyledHeader = styled.header`
  height: 10vh;
  background-color: var(--lightgrey);
  color: var(--darkmagenta);
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  cursor: default;
`;
