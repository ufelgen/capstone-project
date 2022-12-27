import styled from "styled-components";

export default function CaseInfo() {
  return (
    <StyledDeclensionPage>
      <StyledDeclensionWrapper>
        <p>1</p>
        <p>Nominative:</p>
        <GridPOne>kdo ali kaj?</GridPOne>
        <GridPTwo>(Imenovalnik)</GridPTwo>
        <p>2</p>
        <p>Genitive:</p>
        <GridPOne>koga ali česa?</GridPOne>
        <GridPTwo>(Rodilnik)</GridPTwo>
        <p>3</p>
        <p>Dative:</p>
        <GridPOne>komu ali čemu?</GridPOne>
        <GridPTwo>(Dajalnik)</GridPTwo>
        <p>4</p>
        <p>Accusative:</p>
        <GridPOne>koga ali kaj?</GridPOne>
        <GridPTwo>(Tožilnik)</GridPTwo>
        <p>5</p>
        <p>Locative:</p>
        <GridPOne>pri kom ali pri čem?</GridPOne>
        <GridPTwo>(Mestnik)</GridPTwo>
        <p>6</p>
        <p>Instrumental:</p>
        <GridPOne>s kom ali s čim?</GridPOne>
        <GridPTwo>(Orodnik)</GridPTwo>
      </StyledDeclensionWrapper>
    </StyledDeclensionPage>
  );
}

const StyledDeclensionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr 5fr;
  margin: 0.625rem;
  padding: 0.43rem;

  p {
    padding: 0.1rem;
  }
`;

const GridPOne = styled.p`
  grid-column: 3;
  grid-row: span 2;
`;

const GridPTwo = styled.p`
  grid-column: 2 / span 1;
`;

const StyledDeclensionPage = styled.section`
  padding: 0.625rem;
  margin: 2rem;
  background-color: lightgrey;
  color: black;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);

  position: fixed;
  right: -1.25rem;
  bottom: 3rem;
`;
