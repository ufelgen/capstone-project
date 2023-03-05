import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import {
  StyledForm,
  ActionButton,
  InputField,
  Label,
} from "../components/StyledForm";
import fetchDictionaryData from "../helpers/fetchDictionaryData";

export default function Dictionary({ onReturnFromEditMode }) {
  async function handleSearch(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value;
    const translation = await fetchDictionaryData(searchTerm);
    console.log("translation in frontend", translation);
  }
  return (
    <>
      <StyledForm onSubmit={() => handleSearch(event)}>
        <Label htmlFor="searchTerm"></Label>
        <SearchField name="searchTerm" id="searchTerm" />
        <ActionButton type="submit" aria-label="submit search">
          search
        </ActionButton>
      </StyledForm>
      <Footer onReturnFromEditMode={onReturnFromEditMode} />
    </>
  );
}

const SearchField = styled(InputField)`
  width: 77%;
  margin: 0;
`;
