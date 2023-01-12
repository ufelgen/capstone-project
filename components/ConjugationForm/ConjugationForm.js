import { StyledForm } from "../StyledForm";
import { handleConjugation } from "../../helpers/handleConjugation";
import styled from "styled-components";
import { ActionButton, InputField, Label } from "../StyledForm";

export default function ConjugationForm({
  onAddConjugationForm,
  conjugationId,
}) {
  function handleConjugationForm(event, id) {
    event.preventDefault;
    const present = event.target.elements.present.value;
    const participleMasc = event.target.elements.participleMasc.value;
    const participleFem = event.target.elements.participleFem.value;
    const newConjugation = handleConjugation(
      present,
      participleMasc,
      participleFem
    );
    const newConjugationObject = {
      conjugation: newConjugation,
    };
    onAddConjugationForm(id, newConjugationObject);
  }
  return (
    <StyledConjugationForm
      onSubmit={(event) => handleConjugationForm(event, conjugationId)}
    >
      <p>Please provide the verb root:</p>
      <div>
        <Label htmlFor="present">on/ona</Label>
        <InputField
          type="text"
          id="present"
          name="present"
          placeholder="third person singular present"
          required
        />
      </div>
      <p>Please provide the participle:</p>
      <div>
        <Label htmlFor="participleMasc">on je</Label>
        <InputField
          type="text"
          id="participleMasc"
          name="participleMasc"
          placeholder="participle masculinum"
          required
        />
      </div>
      <div>
        <Label htmlFor="participleFem">ona je</Label>
        <InputField
          type="text"
          id="participleFem"
          name="participleFem"
          placeholder="participle femininum"
          required
        />
      </div>
      <div>
        <ActionButton type="submit" aria-label="add conjugation">
          add
        </ActionButton>
      </div>
    </StyledConjugationForm>
  );
}

const StyledConjugationForm = styled(StyledForm)`
  div {
    display: grid;
    grid-template-columns: 1fr 4fr;
    text-align: right;
  }

  button {
    grid-column: 5;
  }
`;
