import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  HiHome,
  HiOutlineInformationCircle,
  HiOutlineArrowCircleLeft,
} from "react-icons/hi";
import CaseInfo from "../CaseInfo/CaseInfo";

export default function Footer({ path }) {
  const { pathname } = useRouter();

  const [showInfo, setShowInfo] = useState(false);

  return (
    <StyledFooter>
      <Link href={`/`}>
        <HiHome size="7.7vh" color="darkmagenta" />
      </Link>{" "}
      {pathname === "/declension/[id]" && (
        <HiOutlineInformationCircle
          size="7.7vh"
          color="darkmagenta"
          onClick={() => setShowInfo(!showInfo)}
        />
      )}
      {pathname === "/declension/[id]" ||
        (pathname === "/notes/[id]" && (
          <>
            <Link href={`/${path}`}>
              <HiOutlineArrowCircleLeft size="7.7vh" color="darkmagenta" />
            </Link>
          </>
        ))}
      {showInfo && <CaseInfo />}
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
