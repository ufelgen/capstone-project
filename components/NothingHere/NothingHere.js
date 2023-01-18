import Link from "next/link";
import styled from "styled-components";
import { StyledHeading } from "../../pages/[category]";
import Lottie from "lottie-react";
import astronautMusic from "../../public/Lottie/astronautMusic.json";

export default function NothingHere() {
  return (
    <>
      <StyledHeading>
        there are currently no words saved in this category!
      </StyledHeading>
      <Main>
        <Lottie animationData={astronautMusic} loop={true} />
        <StyledLink href={"/"}>
          <p>back to main page</p>
        </StyledLink>
      </Main>
    </>
  );
}

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: darkmagenta;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
`;
