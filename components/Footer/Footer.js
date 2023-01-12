import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import {
  HiHome,
  HiOutlineInformationCircle,
  HiOutlineArrowCircleLeft,
} from "react-icons/hi";
import CaseInfo from "../CaseInfo/CaseInfo";

export default function Footer({ path, onReturnFromEditMode }) {
  const { pathname } = useRouter();

  const [showInfo, setShowInfo] = useState(false);

  function handleReturn(link) {
    onReturnFromEditMode();
    Router.push(link);
  }

  return (
    <StyledFooter>
      <button
        aria-label="return to home page"
        onClick={() => handleReturn("/")}
      >
        <HiHome size="7.7vh" color="darkmagenta" />
      </button>{" "}
      {pathname === "/declension/[id]" && (
        <HiOutlineInformationCircle
          size="7.7vh"
          color="darkmagenta"
          aria-label="show more info"
          onClick={() => setShowInfo(!showInfo)}
        />
      )}
      {(pathname === "/declension/[id]" ||
        pathname === "/notes/[id]" ||
        pathname === "/conjugation/[id]") && (
        <>
          <button aria-label="go back" onClick={() => handleReturn(`/${path}`)}>
            <HiOutlineArrowCircleLeft size="7.7vh" color="darkmagenta" />
          </button>
        </>
      )}
      {showInfo && <CaseInfo />}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  height: 10vh;
  width: 100%;
  background-color: var(--lightgrey);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  button {
    background-color: transparent;
    border: none;
  }
  ul {
    list-style: none;
  }
`;
