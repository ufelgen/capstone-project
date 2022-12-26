import styled from "styled-components";
import Footer from "../Footer/Footer";
import { StyledForm } from "../StyledForm";

export default function DeclensionForm({ currentWord, onAddDeclensionForm }) {
  const { base, query1 } = currentWord;

  function handleSubmitDeclensionForm(event) {
    event.preventDefault();

    const fields = event.target.elements;
    const addedDeclension = {
      declension: {
        specification: fields.specification.value,
        singular: {
          nominative: fields.nominativeSingular.value,
          genitive: fields.genitiveSingular.value,
          dative: fields.dativeSingular.value,
          accusative: fields.accusativeSingular.value,
          locative: fields.locativeSingular.value,
          instrumental: fields.instrumentalSingular.value,
        },
        plural: {
          nominative: fields.nominativePlural.value,
          genitive: fields.genitivePlural.value,
          dative: fields.dativePlural.value,
          accusative: fields.accusativePlural.value,
          locative: fields.locativePlural.value,
          instrumental: fields.instrumentalPlural.value,
        },
      },
    };

    onAddDeclensionForm(currentWord.id, addedDeclension);
  }

  return (
    <>
      <StyledHeadingWrapper>
        <h2>{base.flag}</h2>
        <h2>{query1.flag}</h2>
        <h2>{base.translation}</h2>
        <h2>
          {query1.translation} ({query1.gender})
        </h2>
      </StyledHeadingWrapper>
      <StyledForm onSubmit={handleSubmitDeclensionForm}>
        <StyledSpecificationWrapper>
          <label htmlFor="specification">declension type:</label>
          <input type="text" name="specification" />
        </StyledSpecificationWrapper>
        <StyledDeclensionWrapper>
          <p></p>
          <p></p>
          <h4>singular</h4>
          <p></p>
          <h4>plural</h4>
          <p>1</p>
          <label htmlFor="nominativeSingular"></label>
          <input
            type="text"
            name="nominativeSingular"
            placeholder="nominative"
          />
          <label htmlFor="nominativePlural"></label>
          <input type="text" name="nominativePlural" placeholder="nominative" />
          <p>2</p>
          <label htmlFor="genitiveSingular"></label>
          <input type="text" name="genitiveSingular" placeholder="genitive" />
          <label htmlFor="genitivePlural"></label>
          <input type="text" name="genitivePlural" placeholder="genitive" />
          <p>3</p>
          <label htmlFor="dativeSingular"></label>
          <input type="text" name="dativeSingular" placeholder="dative" />
          <label htmlFor="dativePlural"></label>
          <input type="text" name="dativePlural" placeholder="dative" />
          <p>4</p>
          <label htmlFor="accusativeSingular"></label>
          <input
            type="text"
            name="accusativeSingular"
            placeholder="accusative"
          />
          <label htmlFor="accusativePlural"></label>
          <input type="text" name="accusativePlural" placeholder="accusative" />
          <p>5</p>
          <label htmlFor="locativeSingular"></label>
          <input type="text" name="locativeSingular" placeholder="locative" />
          <label htmlFor="locativePlural"></label>
          <input type="text" name="locativePlural" placeholder="locative" />
          <p>6</p>
          <label htmlFor="instrumentalSingular"></label>
          <input
            type="text"
            name="instrumentalSingular"
            placeholder="instrumental"
          />
          <label htmlFor="instrumentalPlural"></label>
          <input
            type="text"
            name="instrumentalPlural"
            placeholder="instrumental"
          />
        </StyledDeclensionWrapper>
        <StyledDeclensionButtonWrapper>
          <button type="submit">add</button>
        </StyledDeclensionButtonWrapper>
      </StyledForm>
      <Footer path={currentWord.category} />
    </>
  );
}

const StyledHeadingWrapper = styled.section`
  margin: 10px 10px 20px 10px;
  background-color: White;
  color: darkmagenta;
  text-align: center;
  padding: 7px;
  cursor: default;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledSpecificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDeclensionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 0fr 5fr 0fr 5fr;
  margin: 10px;
  padding: 7px;

  p,
  input {
    padding: 7px;
  }

  h4 {
    margin: 0 0 10px 10px;
  }
`;

const StyledDeclensionButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;
