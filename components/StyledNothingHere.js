import Link from "next/link";
import styled from "styled-components";

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: darkmagenta;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
`;
