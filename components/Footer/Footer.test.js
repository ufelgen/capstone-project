import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { MemoryRouter } from "react-router-dom";

test("renders more info button when on declension page", async () => {
  render(
    <MemoryRouter initialEntries={["/declension/[id]"]}>
      <Footer />
    </MemoryRouter>
  );
  const infoButton = screen.getByLabelText("show more info");
  expect(infoButton).toBeInTheDocument();
});
