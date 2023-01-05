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

export default function Footer({ path, onReturnFromEditMode }) {
  const { pathname } = useRouter();

  const [showInfo, setShowInfo] = useState(false);

  function handleReturn() {
    onReturnFromEditMode();
  }

  return (
    <StyledFooter>
      <Link aria-label="return to home page" href={`/`} onClick={handleReturn}>
        <HiHome size="7.7vh" color="darkmagenta" />
      </Link>{" "}
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
          <Link aria-label="go back" href={`/${path}`} onClick={handleReturn}>
            <HiOutlineArrowCircleLeft size="7.7vh" color="darkmagenta" />
          </Link>
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
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  ul {
    list-style: none;
  }
`;
