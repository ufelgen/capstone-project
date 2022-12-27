import styled from "styled-components";
import Footer from "../Footer/Footer";

export default function DeclensionPage({ currentWord }) {
  const { base, query1 } = currentWord;

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
      <StyledDeclensionPage>
        <StyledSpecification>declension type:</StyledSpecification>
        <StyledSpecification>
          {query1.declension?.specification}
        </StyledSpecification>
        <StyledDeclensionWrapper>
          <p></p>
          <h4>singular</h4>
          <h4>plural</h4>
          <p>1</p>
          <p>{query1.declension?.singular.nominative}</p>
          <p>{query1.declension?.plural.nominative}</p>
          <p>2</p>
          <p>{query1.declension?.singular.genitive}</p>
          <p>{query1.declension?.plural.genitive}</p>
          <p>3</p>
          <p>{query1.declension?.singular.dative}</p>
          <p>{query1.declension?.plural.dative}</p>
          <p>4</p>
          <p>{query1.declension?.singular.accusative}</p>
          <p>{query1.declension?.plural.accusative}</p>
          <p>5</p>
          <p>{query1.declension?.singular.locative}</p>
          <p>{query1.declension?.plural.locative}</p>
          <p>6</p>
          <p>{query1.declension?.singular.instrumental}</p>
          <p>{query1.declension?.plural.instrumental}</p>
        </StyledDeclensionWrapper>
      </StyledDeclensionPage>
      <Footer path={currentWord.category} />
    </>
  );
}

const StyledHeadingWrapper = styled.section`
  margin: 0.625rem 0.625rem 1.25rem 0.625rem;
  background-color: White;
  color: darkmagenta;
  text-align: center;
  padding: 0.43rem;
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
  grid-template-columns: 1fr 2fr 2fr;
  margin: 0.625rem;
  padding: 0.43rem;

  p {
    padding: 0.43rem;
  }

  h4 {
    margin-bottom: 0.625rem;
  }
`;

const StyledDeclensionPage = styled.section`
  padding: 0.625rem;
  margin: 0.625rem 12px;
  background-color: white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
`;
