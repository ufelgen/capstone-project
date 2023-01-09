import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VocabCard from "./VocabCard";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";
import { useState } from "react";

const word = {
  id: 77,
  category: "animals",
  base: { language: "english", flag: "🇬🇧", translation: "animal" },
  notes:
    "Beside nouns ending with –ost, there are also other nouns that fall into the 2.1. Feminine declension group. Such as: jesen (autumn), kokoš (chicken), miš (mouse), nit (thread), obrv (eyebrow), pamet (intelligence), perut(wing), polnoč (midnight), pomlad (spring), smrt (death) zavest (consciousness), žival (animal)…",

  query1: {
    id: 43,
    language: "slovenian",
    flag: "🇸🇮",
    translation: "žival",
    declension: {
      specification: "second female declension",
      singular: {
        nominative: "žival",
        genitive: "živali",
        dative: "živali",
        accusative: "žival",
        locative: "živali",
        instrumental: "živaljo",
      },
      plural: {
        nominative: "živali",
        genitive: "živali",
        dative: "živalim",
        accusative: "živali",
        locative: "živalih",
        instrumental: "živalmi",
      },
    },
    gender: "f",
  },
};

// mock useRouter
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// setup a new mocking function for push method
const pushMock = jest.fn();

// mock a return value on useRouter
useRouter.mockReturnValue({
  query: {},
  // return mock for push method
  push: pushMock,
  // ... add the props or methods you need
});

test("popup menu button function is called on click", async () => {
  const user = userEvent.setup();
  const handlePopupClick = jest.fn();
  render(<VocabCard word={word} popup={""} onPopupClick={handlePopupClick} />);
  const popupButton = screen.getByRole("button", { name: "open popup menu" });

  await user.click(popupButton);

  expect(handlePopupClick).toHaveBeenCalled();
});

function MyTestComponent() {
  const [popup, setPopup] = useState(false);

  return (
    <VocabCard
      word={word}
      popup={popup}
      onPopupClick={() => {
        setPopup(word.id);
      }}
    />
  );
}

test("opens popup menu upon button click", async () => {
  const user = userEvent.setup();
  render(<MyTestComponent />);

  const popupButton = screen.getByTestId("openPopup");

  await user.click(popupButton);

  const popupMenu = screen.getByTestId("popup");

  expect(popupButton).not.toBeInTheDocument();
  expect(popupMenu).toBeVisible();
});
