import styled from "styled-components";
import SingleWordHeading from "../SingleWordHeading/SingleWordHeading";
import {
  StyledForm,
  BackButton,
  ActionButton,
  InputField,
} from "../StyledForm";
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
          <InputField
            type="text"
            id="specification"
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
                  <StyledInput
                    type="text"
                    name={singleCase.english + "Singular"}
                    id={singleCase.english + "Singular"}
                    defaultValue={
                      query1.declension.singular[singleCase.english]
                    }
                    required
                  />
                  <label htmlFor={singleCase.english + "Plural"}></label>
                  <StyledInput
                    type="text"
                    name={singleCase.english + "Plural"}
                    id={singleCase.english + "Plural"}
                    defaultValue={query1.declension.plural[singleCase.english]}
                    required
                  />
                </Fragment>
              ))
            : cases.map((singleCase) => (
                <Fragment key={singleCase.id}>
                  <p>{singleCase.id}</p>
                  <label htmlFor={singleCase.english + "Singular"}></label>
                  <StyledInput
                    type="text"
                    name={singleCase.english + "Singular"}
                    id={singleCase.english + "Singular"}
                    placeholder={singleCase.english}
                    required
                  />
                  <label htmlFor={singleCase.english + "Plural"}></label>
                  <StyledInput
                    type="text"
                    name={singleCase.english + "Plural"}
                    id={singleCase.english + "Plural"}
                    placeholder={singleCase.english}
                    required
                  />
                </Fragment>
              ))}
        </StyledDeclensionWrapper>
        <StyledDeclensionButtonWrapper>
          {editing ? (
            <>
              <BackButton
                type="button"
                aria-label="go back"
                onClick={onReturnFromEditMode}
              >
                back
              </BackButton>
              <ActionButton type="submit" aria-label="update declension">
                update
              </ActionButton>
            </>
          ) : (
            <ActionButton type="submit" aria-label="add declension">
              add
            </ActionButton>
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
  grid-template-columns: 1fr 0fr 5fr 0.2fr 5fr;
  margin: 0.625rem;
  padding: 0.43rem;

  p {
    padding: 0.43rem;
  }

  h4 {
    margin: 0 0 0.625rem 0.625rem;
  }
`;

const StyledInput = styled(InputField)`
  padding: 0.43rem;
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
