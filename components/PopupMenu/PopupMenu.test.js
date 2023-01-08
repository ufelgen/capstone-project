import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PopupMenu from "./PopupMenu";
import PopupMenuButton from "../PopupMenuButton/PopupMenuButton";

test("renders popup menu upon popup menu button click", async () => {
  const user = userEvent.setup();
  const handlePopupClick = jest.fn();
  const popupMenu = render(
    <PopupMenu
      onDelete={jest.fn()}
      onEdit={jest.fn()}
      id={1234}
      onClosePopup={jest.fn()}
      prop="prop"
    />
  );
  render(<PopupMenuButton onPopupClick={handlePopupClick} />);

  const popupButton = screen.getByRole("button");

  await user.click(popupButton);
  expect(popupMenu).toBeInTheDocument();
});
