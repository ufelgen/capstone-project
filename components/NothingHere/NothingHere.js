import Link from "next/link";
import styled from "styled-components";
import { StyledHeading } from "../../pages/[category]";
import Lottie from "lottie-react";
import astronautMusic from "../../public/Lottie/astronautMusic.json";
import { useRouter } from "next/router";

export default function NothingHere() {
  const { pathname } = useRouter();
  return (
    <>
      <StyledHeading>
        {pathname === "/[category]"
          ? "there are currently no words saved in this category!"
          : "there's nothing here"}
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
