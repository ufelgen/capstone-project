import styled from "styled-components";
import { useState } from "react";
import { languages } from "../../lib/languages";
import Image from "next/image";
import { Fragment } from "react";

export default function AlternativeDropdown() {
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <DropdownWrapper>
      <Language onClick={() => setIsDropdown(!isDropdown)}>
        language &#x25BC;
      </Language>
      <DropdownContent className={isDropdown && "show"}>
        {languages.map((language) => {
          return (
            <Fragment key={language.name}>
              <input
                type="radio"
                id={language.name}
                name="queryLanguage"
                value={language.value}
                data-testid="queryLanguage"
                required
              />
              <Select htmlFor={language.name}>
                <Image
                  src={`/flags/${language.value.split("-")[0]}.svg`}
                  width={20}
                  height={15}
                  alt={`${language.name} flag`}
                />
              </Select>
            </Fragment>
          );
        })}
      </DropdownContent>
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Language = styled.button`
  padding: 0.25rem;
  border: 1px solid var(--darkmagenta);
  margin: 0.25rem;
  border-radius: 5px;
  height: 4vh;
  margin: 0.25rem 0;
  background-color: white;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  &.show {
    display: block;
    z-index: 1;
    background-color: white;
  }
`;

const Select = styled.label`
  display: block;
  padding: 5px;
  border: none;
  background-color: white;
`;

const InvisibleRadioButton = styled.input`
  display: none;
`;
