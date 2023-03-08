import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: var(--white);
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid var(--darkmagenta);
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const ActionButton = styled.button`
  padding: 0.25rem;
  border: 1px solid var(--darkmagenta);
  margin: 0.25rem;
  border-radius: 5px;
  height: 4vh;
  width: 15vw;
  background-color: var(--darkmagenta);
  color: var(--white);
  cursor: pointer;
`;

export const BiggerActionButton = styled(ActionButton)`
  width: 25vw;
`;

export const BackButton = styled(ActionButton)`
  border: 1px solid var(--darkgrey);
  background-color: var(--darkgrey);
`;

export const InputField = styled.input`
  padding: 0.25rem;
  border: 1px solid var(--darkmagenta);
  margin: 0.25rem;
  border-radius: 5px;
  height: 4vh;
  width: 100%;
`;

export const Dropdown = styled.select`
  padding: 0.25rem;
  border: 1px solid var(--darkmagenta);
  margin: 0.25rem;
  border-radius: 5px;
  height: 4vh;
  margin: 0.25rem 0;
`;

export const Label = styled.label`
  padding: 0.25rem;
`;

export const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const Language = styled.button`
  padding: 0.25rem;
  border: 1px solid var(--darkmagenta);
  margin: 0.25rem;
  border-radius: 5px;
  height: 4vh;
  width: 77px;
  margin: 0.25rem 0;
  background-color: white;
`;

export const DropdownContent = styled.div`
  opacity: 0;
  position: absolute;
  width: 77px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 0.1fr 1fr;

  &.show {
    opacity: 1;
    z-index: 1;
    background-color: white;
  }
`;

export const Select = styled.label`
  padding: 5px;
  border: none;
  background-color: white;
`;

export const InvisibleRadioButton = styled.input`
  opacity: 0;
`;

export const PopupForm = styled(StyledForm)`
  position: fixed;
  height: auto;
  width: 80vw;
  bottom: 30vh;
  margin-left: 10vw;

  background-color: var(--lightgrey);
  background-image: none;

  label {
    margin: 0 0.5rem;
  }

  h4 {
    margin: 0.5rem 0;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
