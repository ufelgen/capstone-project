import { render, screen } from "@testing-library/react";
import SingleWordHeading from "./SingleWordHeading";
import "@testing-library/jest-dom";

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

test("renders correct heading for single word on notes page", async () => {
  const base = word.base;
  const query1 = word.query1;

  render(<SingleWordHeading base={base} query1={query1} />);
  const englishWord = screen.queryByText(/animal/i);
  expect(englishWord).toBeInTheDocument();
});
