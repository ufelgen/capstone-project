import styled from "styled-components";

export default function ConjugationButtons({ tense, onChangeTense }) {
  return (
    <div>
      <StyledTenseButton
        type="button"
        className={tense === "past" ? "current" : ""}
        onClick={() => onChangeTense("past")}
      >
        past
      </StyledTenseButton>
      <StyledTenseButton
        type="button"
        className={tense === "present" ? "current" : ""}
        onClick={() => onChangeTense("present")}
      >
        present
      </StyledTenseButton>
      <StyledTenseButton
        type="button"
        className={tense === "future" ? "current" : ""}
        onClick={() => onChangeTense("future")}
      >
        future
      </StyledTenseButton>
    </div>
  );
}

const StyledTenseButton = styled.button`
  padding: 0.25rem;
  border: 1px solid black;
  margin: 0.25rem;
  border-radius: 5px;
  height: 4vh;
  width: 20vw;
  background-color: lightgray;
  color: black;

  &.current {
    border: 1px solid darkmagenta;
    background-color: darkmagenta;
    color: white;
  }
`;
