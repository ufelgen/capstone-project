import { StyledForm } from "../StyledForm";
import { handleConjugation } from "../../helpers/handleConjugation";
import styled from "styled-components";

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

    onAddConjugationForm(id, newConjugation);
  }
  return (
    <StyledConjugationForm
      onSubmit={(event) => handleConjugationForm(event, conjugationId)}
    >
      <p>Please provide the verb root:</p>
      <div>
        <label htmlFor="present">on/ona</label>
        <input
          type="text"
          id="present"
          name="present"
          placeholder="third person singular present"
          required
        />
      </div>
      <p>Please provide the participle:</p>
      <div>
        <label htmlFor="participleMasc">on je</label>
        <input
          type="text"
          id="participleMasc"
          name="participleMasc"
          placeholder="participle masculinum"
          required
        />
      </div>
      <div>
        <label htmlFor="participleFem">ona je</label>
        <input
          type="text"
          id="participleFem"
          name="participleFem"
          placeholder="participle femininum"
          required
        />
      </div>
      <div>
        <button type="submit">add</button>
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
