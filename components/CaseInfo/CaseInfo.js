import styled from "styled-components";
import { cases } from "../../lib/cases";
import { Fragment } from "react";

export default function CaseInfo() {
  return (
    <StyledDeclensionPage>
      <StyledDeclensionWrapper>
        {cases.map((singleCase) => (
          <Fragment key={singleCase.id}>
            <p>{singleCase.id}</p>
            <p>{singleCase.english.toUpperCase()}</p>
            <GridPOne>{singleCase.question}</GridPOne>
            <GridPTwo>({singleCase.slovenian})</GridPTwo>
          </Fragment>
        ))}
      </StyledDeclensionWrapper>
    </StyledDeclensionPage>
  );
}

const StyledDeclensionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 5.5fr 7fr;
  margin: 0.625rem;
  padding: 0.43rem;

  p {
    padding: 0.1rem;
  }
`;

const GridPOne = styled.p`
  grid-column: 3;
  grid-row: span 2;
  font-weight: bold;
`;

const GridPTwo = styled.p`
  grid-column: 2 / span 1;
  font-style: italic;
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
