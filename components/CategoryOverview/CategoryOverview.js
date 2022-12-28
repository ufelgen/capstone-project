import styled from "styled-components";
import PopupMenuButton from "../PopupMenuButton/PopupMenuButton";

export default function CategoryOverview({ name, number }) {
  return (
    <>
      <StyledCategory>
        <h3>{name}</h3>
        <p>
          {number} {number === 1 ? "word" : "words"}
        </p>
        <PopupMenuButton id={item.id} onPopupClick={onPopupClick} />
      </StyledCategory>
    </>
  );
}

const StyledCategory = styled.section`
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
`;
