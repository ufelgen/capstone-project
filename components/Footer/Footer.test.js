import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import mockRouter from "next-router-mock";
import "@testing-library/jest-dom";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

test("renders more info button when on declension page", async () => {
  mockRouter.setCurrentUrl("/declension/[id]");
  render(<Footer />);
  const infoButton = screen.getByLabelText("show more info");
  expect(infoButton).toBeInTheDocument();
});
