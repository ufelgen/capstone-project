import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <StyledFooter>
      <Link href={`/`}>
        <p>home</p>
      </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  height: 10vh;
  width: 100%;
  background-color: lightgray;
  color: darkmagenta;
`;
