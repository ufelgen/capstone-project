import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewWordForm from "./NewWordForm";

jest.mock("nanoid", () => {
  return { nanoid: () => "1234" };
});

test("does not submit the form without filling out all input fields", async () => {
  const user = userEvent.setup();
  const handleCreateNew = jest.fn();

  render(<NewWordForm onCreateNew={handleCreateNew} allWords={[]} />);
  const submitButton = screen.getByRole("button", {
    name: "add new flashcard",
  });
  await user.click(submitButton);
  expect(handleCreateNew).not.toHaveBeenCalled();
});

test("calls the onCreateNew handler with inputs on submit", async () => {
  const user = userEvent.setup();
  const handleCreateNew = jest.fn();
  const handleSelectFlag = jest.fn();
  jest.mock("nanoid", () => {
    return { nanoid: () => "1234" };
  });

  render(
    <NewWordForm
      onCreateNew={handleCreateNew}
      onSelectFlag={handleSelectFlag}
      allWords={[]}
    />
  );
  const englishInput = screen.getByLabelText("english");
  const query1Input = screen.getByTestId("queryLanguage1");
  const gender = screen.getByTestId("gender");
  const category = screen.getByTestId("category");

  const submitButton = screen.getByRole("button", {
    name: "add new flashcard",
  });

  const RadioSlovenian = screen.getByTestId("Radio-slovenian");
  await user.type(englishInput, "beaver");
  await user.click(RadioSlovenian);
  await user.type(query1Input, "bober");
  await user.selectOptions(gender, "m");
  await user.type(category, "animals");

  await user.click(submitButton);
  expect(handleCreateNew).toHaveBeenCalledWith({
    category: "animals",
    base: {
      language: "english",
      flag: "gb",
      translation: "beaver",
    },
    query1: {
      language: "slovenian",
      flag: "si",
      translation: "bober",
      gender: "m",
    },
  });
});
