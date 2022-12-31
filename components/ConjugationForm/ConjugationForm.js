import { StyledForm } from "./StyledForm";
import { conjugation } from "../../lib/conjugation";

export default function ConjugationForm({
  onAddConjugationForm,
  conjugationId,
}) {
  function handleConjugationForm(event, id) {
    event.preventDefault;
    const present = event.target.elements.present.value;
    const participleMasc = event.target.elements.participleMasc.value;
    const participleFem = event.target.elements.participleFem.value;
    const conjugation = conjugation(present, participleMasc, participleFem);

    onAddConjugationForm(conjugationId, conjugation);
  }
  return (
    <StyledForm
      onSubmit={(event) => handleConjugationForm(event, conjugationId)}
    >
      <p>Please provide the verb root:</p>
      <label htmlFor="present">on/ona (present)</label>
      <input
        type="text"
        id="present"
        name="present"
        placeholder="third person singular present"
        required
      />
      <p>Please provide the participle:</p>
      <label htmlFor="participleMasc">on je</label>
      <input
        type="text"
        id="participleMasc"
        name="participleMasc"
        placeholder="participle masculinum"
        required
      />
      <label htmlFor="participleFem">on je</label>
      <input
        type="text"
        id="participleFem"
        name="participleFem"
        placeholder="participle femininum"
        required
      />
      <button type="submit">add</button>
    </StyledForm>
  );
}
