import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { MemoryRouter } from "react-router-dom";
import { useRouter } from "next/router";

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

test("renders more info button when on declension page", async () => {
  render(
    <MemoryRouter initialEntries={["/declension/77"]}>
      <Footer />
    </MemoryRouter>
  );
  const infoButton = screen.getByLabelText("show more info");
  expect(infoButton).toBeInTheDocument();
});
