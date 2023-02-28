import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import {
  StyledForm,
  ActionButton,
  InputField,
  Label,
} from "../components/StyledForm";

export default function Dictionary({ onReturnFromEditMode }) {
  async function handleSearch(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value;

    try {
      const response = await fetch(
        //`https://api.pons.com/v1/dictionary?q=${searchTerm}&l=ende`,
        `/dict-api/v1/dictionary`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            /*         "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, X-Secret",
            "Access-Control-Allow-Credentials": "true",
            withCredentials: "true",
            crossorigin: "true", */
            "X-Secret":
              "4b154aa9be6e86c71f9ecc559f88cdd261eb992656f09b6f5fc80fc10dd22bc8",
          },
        }
      );
      const translation = await response.json();
      console.log(translation);
    } catch (error) {
      console.error("du kannst gar nichts", error);
    }
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
