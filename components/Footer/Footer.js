import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import {
  HiHome,
  HiOutlineInformationCircle,
  HiOutlineArrowCircleLeft,
  HiTranslate,
} from "react-icons/hi";
import CaseInfo from "../CaseInfo/CaseInfo";
import Image from "next/image";

export default function Footer({ path, onReturnFromEditMode }) {
  const { pathname } = useRouter();

  const [showInfo, setShowInfo] = useState(false);

  function handleReturn(link) {
    onReturnFromEditMode();
    Router.push(link);
  }

  return (
    <StyledFooter>
      {pathname !== "/" && (
        <button
          aria-label="return to home page"
          onClick={() => handleReturn("/")}
        >
          <HiHome size="7.7vh" color="darkmagenta" />
        </button>
      )}
      {pathname === "/" && (
        <>
          <button
            aria-label="go to translation page slovenian"
            onClick={() => handleReturn("/dictionary")}
          >
            <Image
              src="/flags/si.svg"
              width={40}
              height={30}
              alt="slovenian flag"
            />
          </button>
          <button
            aria-label="go to translation page"
            onClick={() => handleReturn("/improved-dictionary")}
          >
            <HiTranslate size="7.7vh" color="darkmagenta" />
          </button>
        </>
      )}
      {pathname === "/declension/[id]" && (
        <button>
          <HiOutlineInformationCircle
            size="7.7vh"
            color="darkmagenta"
            aria-label="show more info"
            onClick={() => setShowInfo(!showInfo)}
          />
        </button>
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
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
`;
