import Link from "next/link";
import styled from "styled-components";
import { StyledHeading } from "../[category]";

export default function DeclensionHome() {
  return (
    <>
      <StyledHeading>there's nothing here</StyledHeading>
      <Main>
        <Link href={"/"}>
          <p>back to main page</p>
        </Link>
      </Main>
    </>
  );
}

const Main = styled.section`
  display: flex;
  justify-content: center;
  align-self: center;
`;
