import styled from "styled-components";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

export default function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li>
          <Link href={`/`}>
            <HiHome size="7.7vh" color="darkmagenta" />
          </Link>{" "}
        </li>
      </ul>
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
  justify-content: center;
  align-items: center;
  ul {
    list-style: none;
  }
`;
