import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeclensionForm from "./DeclensionForm";

const word = {
  id: 77,
  category: "animals",
  base: { language: "english", flag: "🇬🇧", translation: "cat" },
  query1: {
    id: 43,
    language: "slovenian",
    flag: "🇸🇮",
    translation: "mačka",
    gender: "f",
  },
};

test("does not submit declension form with missing input", async () => {
  const user = userEvent.setup();
  const handleAddDeclensionForm = jest.fn();

  render(
    <DeclensionForm
      currentWord={word}
      onAddDeclensionForm={handleAddDeclensionForm}
    />
  );
  const submitButton = screen.getByRole("button", { name: "add declension" });

  await user.click(submitButton);

  expect(handleAddDeclensionForm).not.toHaveBeenCalled();
});
