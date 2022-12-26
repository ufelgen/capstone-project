import styled from "styled-components";
import Link from "next/link";

export default function DeclensionPage({ currentWord }) {
  const { base, query1 } = currentWord;

  return (
    <>
      <StyledHeadingWrapper>
        <BaseFlag>{base.flag}</BaseFlag>
        <BaseTranslation>{base.translation}</BaseTranslation>
        <Query1Flag>{query1.flag}</Query1Flag>
        <Query1Translation>{query1.translation}</Query1Translation>
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
  grid-template-areas: "base-flag query1-flag" "base-translation query1-translation";
`;

const BaseFlag = styled.h2`
  grid-area: "base-flag";
`;

const Query1Flag = styled.h2`
  grid-area: "query1-flag";
`;

const BaseTranslation = styled.h2`
  grid-area: "base-translation";
`;

const Query1Translation = styled.h2`
  grid-area: "query1-translation";
`;

const StyledDeclensionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  margin: 10px;
  padding: 7px;
`;
