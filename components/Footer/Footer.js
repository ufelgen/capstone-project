import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiHome, HiOutlineArrowCircleLeft } from "react-icons/hi";

export default function Footer({ path }) {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <StyledFooter>
      <Link href={`/`}>
        <HiHome size="7.7vh" color="darkmagenta" />
      </Link>{" "}
      {pathname === "/declension/[id]" && (
        <Link href={`/${path}`}>
          <HiOutlineArrowCircleLeft size="7.7vh" color="darkmagenta" />
        </Link>
      )}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  height: 10vh;
  width: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  ul {
    list-style: none;
  }
`;
