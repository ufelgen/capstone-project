import styled from "styled-components";
import DeclensionForm from "../DeclensionForm/DeclensionForm";
import SingleWordHeading from "../SingleWordHeading/SingleWordHeading";
import { ActionButton } from "../StyledForm";

export default function DeclensionPage({
  currentWord,
  editing,
  editId,
  onEdit,
  onReturnFromEditMode,
  onAddDeclensionForm,
}) {
  const { base, query1 } = currentWord;

  return (
    <>
      {editing && editId === currentWord.id ? (
        <DeclensionForm
          currentWord={currentWord}
          onAddDeclensionForm={onAddDeclensionForm}
          editing={editing}
          onReturnFromEditMode={onReturnFromEditMode}
        />
      ) : (
        <>
          <SingleWordHeading base={base} query1={query1} />
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
            <div>
              <ActionButton
                aria-label="edit declension"
                onClick={(event) => onEdit(event, currentWord.id)}
              >
                edit
              </ActionButton>
            </div>
          </StyledDeclensionPage>
        </>
      )}
    </>
  );
}

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
  margin: 0.625rem 0.75rem;
  background-color: var(--white);
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid var(--darkmagenta);
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  div {
    display: flex;
    justify-content: flex-end;
  }
`;
