import styled from "styled-components";
import Image from "next/image";
import {
  StyledForm,
  ActionButton,
  Dropdown,
  InputField,
  DropdownWrapper,
  DropdownContent,
  Language,
  Select,
  InvisibleRadioButton,
  Label,
} from "../StyledForm";
import { languages } from "../../lib/languages";
import { Fragment } from "react";

export default function ImprovedSearchForm({
  onImprovedSearch,
  onToggleDropdown,
  onToggleDropdownTwo,
  selectedFlag,
  isDropdown,
  isDropdownTwo,
  onSelectFlag,
}) {
  console.log(selectedFlag);
  console.log(isDropdown, isDropdownTwo);
  return (
    <>
      <button onClick={onToggleDropdown}> click me</button>
      {isDropdown && <h1>it works!</h1>}
      <div onSubmit={(event) => onImprovedSearch(event)}>
        <Label htmlFor="searchTerm"></Label>
        <SearchField name="searchTerm" id="searchTerm" />

        <DropdownWrapper>
          <Language onClick={onToggleDropdown}>
            {`from `}
            {selectedFlag === "" || selectedFlag[0] === "" ? (
              " \u25BC"
            ) : (
              <Image
                src={`/flags/${selectedFlag[0]}.svg`}
                width={20}
                height={15}
                alt={`${selectedFlag[0]} flag`}
              />
            )}
          </Language>
          <DropdownContent className={isDropdown && "show"}>
            {languages.map((language) => {
              return (
                <Fragment key={language.name}>
                  <InvisibleRadioButton
                    type="radio"
                    id={language.name}
                    name="queryLanguage"
                    value={language.value}
                    data-testid="queryLanguage"
                    onChange={() =>
                      onSelectFlag(language.value.split("-")[0], "from")
                    }
                    checked={language.value.split("-")[0] === selectedFlag[0]}
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
        <DropdownWrapper>
          <Language onClick={onToggleDropdownTwo}>
            {`to `}
            {selectedFlag === "" || selectedFlag[1] === "" ? (
              " \u25BC"
            ) : (
              <Image
                src={`/flags/${selectedFlag[1]}.svg`}
                width={20}
                height={15}
                alt={`${selectedFlag[1]} flag`}
              />
            )}
          </Language>
          <DropdownContent className={isDropdownTwo && "show"}>
            {languages.map((language) => {
              return (
                <Fragment key={language.name}>
                  <InvisibleRadioButton
                    type="radio"
                    id={`${language.name}2`}
                    name="queryLanguage2"
                    value={language.value}
                    data-testid="queryLanguage2"
                    onChange={() =>
                      onSelectFlag(language.value.split("-")[0], "to")
                    }
                    checked={language.value.split("-")[0] === selectedFlag[1]}
                  />
                  <Select htmlFor={`${language.name}2`}>
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

        <SearchButton type="submit" aria-label="submit search">
          search
        </SearchButton>
      </div>
    </>
  );
}

const StyledSearchForm = styled(StyledForm)`
  display: flex;
`;

const SearchField = styled(InputField)`
  width: 65%;
  margin-left: -0.5rem;
`;

const Arrow = styled.span`
  font-size: 1.5rem;
`;

const SearchButton = styled(ActionButton)`
  width: 30%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
