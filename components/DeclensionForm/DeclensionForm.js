import styled from "styled-components";
import Footer from "../Footer/Footer";

export default function DeclensionForm({ currentWord }) {
  const { base, query1 } = currentWord;

  return (
    <>
      <StyledHeadingWrapper>
        <h2>{base.flag}</h2>
        <h2>{query1.flag}</h2>
        <h2>{base.translation}</h2>
        <h2>{query1.translation}</h2>
      </StyledHeadingWrapper>
      <form>
        <label htmlFor="specification">declension type:</label>
        <input type="text" name="specification" />
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
      </form>
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

const StyledSpecification = styled.h3`
  display: flex;
  justify-content: center;
`;

const StyledDeclensionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 0fr 2fr 0fr 2fr;
  margin: 10px;
  padding: 7px;

  p,
  input {
    padding: 7px;
  }

  h4 {
    margin-bottom: 10px;
  }
`;
