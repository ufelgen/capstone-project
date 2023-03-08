import styled from "styled-components";
import Image from "next/image";
import { StyledForm, ActionButton, InputField, Label } from "../StyledForm";

export default function SearchForm({ onSearch }) {
  return (
    <StyledSearchForm onSubmit={() => onSearch(event)}>
      <Label htmlFor="searchTerm"></Label>
      <SearchField name="searchTerm" id="searchTerm" />
      <SearchButton type="submit" aria-label="submit search">
        <Image
          src="/flags/gb.svg"
          width={20}
          height={15}
          alt="great britain flag"
        />
        <Arrow>{"\u25C2" + "\u25B8"}</Arrow>
        <Image
          src="/flags/si.svg"
          width={20}
          height={15}
          alt="slovenian flag"
        />
      </SearchButton>
    </StyledSearchForm>
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
