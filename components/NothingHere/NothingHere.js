import { Main, StyledLink } from "../../components/StyledNothingHere";
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
