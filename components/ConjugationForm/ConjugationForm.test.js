import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConjugationForm from "./ConjugationForm";

test("does not submit conjugation form with missing input", async () => {
  const user = userEvent.setup();
  const handleAddConjugationForm = jest.fn();

  render(
    <ConjugationForm id="123" onAddConjugationForm={handleAddConjugationForm} />
  );
  const presentInput = screen.getByLabelText("on/ona");
  const participleMascInput = screen.getByLabelText("on je");
  const submitButton = screen.getByRole("button", { name: "add conjugation" });

  await user.type(presentInput, "kupi");
  await user.type(participleMascInput, "kupil");
  await user.click(submitButton);

  expect(handleAddConjugationForm).not.toHaveBeenCalled();
});
