import styled from "styled-components";

export default function Header() {
  return <StyledHeader>this app will soon have a cool name</StyledHeader>;
}

const StyledHeader = styled.header`
  height: 10vh;
  background-color: lightgray;
  color: darkmagenta;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  cursor: default;
`;
