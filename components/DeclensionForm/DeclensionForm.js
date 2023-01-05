import styled from "styled-components";
import SingleWordHeading from "../SingleWordHeading/SingleWordHeading";
import { StyledForm } from "../StyledForm";
import { cases } from "../../lib/cases";
import { Fragment } from "react";

export default function DeclensionForm({
  currentWord,
  onAddDeclensionForm,
  editing,
  onReturnFromEditMode,
}) {
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
    editing && onReturnFromEditMode();
  }

  return (
    <>
      <SingleWordHeading base={base} query1={query1} />
      <StyledForm onSubmit={handleSubmitDeclensionForm}>
        <StyledSpecificationWrapper>
          <label htmlFor="specification">declension type:</label>
          <input
            type="text"
            name="specification"
            defaultValue={query1.declension?.specification}
            required
          />
        </StyledSpecificationWrapper>
        <StyledDeclensionWrapper>
          <SingularH4>singular</SingularH4>
          <PluralH4>plural</PluralH4>
          {editing
            ? cases.map((singleCase) => (
                <Fragment key={singleCase.id}>
                  <p>{singleCase.id}</p>
                  <label htmlFor={singleCase.english + "Singular"}></label>
                  <input
                    type="text"
                    name={singleCase.english + "Singular"}
                    defaultValue={
                      query1.declension.singular[singleCase.english]
                    }
                    required
                  />
                  <label htmlFor={singleCase.english + "Plural"}></label>
                  <input
                    type="text"
                    name={singleCase.english + "Plural"}
                    defaultValue={query1.declension.plural[singleCase.english]}
                    required
                  />
                </Fragment>
              ))
            : cases.map((singleCase) => (
                <Fragment key={singleCase.id}>
                  <p>{singleCase.id}</p>
                  <label htmlFor={singleCase.english + "Singular"}></label>
                  <input
                    type="text"
                    name={singleCase.english + "Singular"}
                    placeholder={singleCase.english}
                    required
                  />
                  <label htmlFor={singleCase.english + "Plural"}></label>
                  <input
                    type="text"
                    name={singleCase.english + "Plural"}
                    placeholder={singleCase.english}
                    required
                  />
                </Fragment>
              ))}
        </StyledDeclensionWrapper>
        <StyledDeclensionButtonWrapper>
          {editing ? (
            <>
              <button
                type="button"
                aria-label="go back"
                onClick={onReturnFromEditMode}
              >
                back
              </button>
              <button type="submit" aria-label="submit">
                update
              </button>
            </>
          ) : (
            <button type="submit" aria-label="submit">
              add
            </button>
          )}
        </StyledDeclensionButtonWrapper>
      </StyledForm>
    </>
  );
}

const StyledSpecificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDeclensionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 0fr 5fr 0fr 5fr;
  margin: 0.625rem;
  padding: 0.43rem;

  p,
  input {
    padding: 0.43rem;
  }

  h4 {
    margin: 0 0 0.625rem 0.625rem;
  }
`;

const SingularH4 = styled.h4`
  grid-column: 3;
`;

const PluralH4 = styled.h4`
  grid-column: 5;
`;

const StyledDeclensionButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.625rem;
`;
