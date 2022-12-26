import styled from "styled-components";
import Footer from "../Footer/Footer";
import Link from "next/link";

export default function DeclensionPage({ currentWord }) {
  const { base, query1 } = currentWord;

  return (
    <>
      <StyledHeadingWrapper>
        <h2>{base.flag}</h2>
        <h2>{query1.flag}</h2>
        <h2>{base.translation}</h2>
        <h2>{query1.translation}</h2>
      </StyledHeadingWrapper>
      <StyledDeclensionWrapper>
        <p>1</p>
        <p>{query1.declension.singular.nominative}</p>
        <p>{query1.declension.plural.nominative}</p>
        <p>2</p>
        <p>{query1.declension.singular.genitive}</p>
        <p>{query1.declension.plural.genitive}</p>
        <p>3</p>
        <p>{query1.declension.singular.dative}</p>
        <p>{query1.declension.plural.dative}</p>
        <p>4</p>
        <p>{query1.declension.singular.accusative}</p>
        <p>{query1.declension.plural.accusative}</p>
        <p>5</p>
        <p>{query1.declension.singular.locative}</p>
        <p>{query1.declension.plural.locative}</p>
        <p>6</p>
        <p>{query1.declension.singular.instrumental}</p>
        <p>{query1.declension.plural.instrumental}</p>
      </StyledDeclensionWrapper>
      <Footer path={currentWord.category} />
    </>
  );
}

const StyledHeadingWrapper = styled.section`
  margin: 10px;
  background-color: White;
  color: darkmagenta;
  text-align: center;
  padding: 7px;
  cursor: default;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledDeclensionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  margin: 10px;
  padding: 7px;

  p {
    padding: 7px;
  }
`;
