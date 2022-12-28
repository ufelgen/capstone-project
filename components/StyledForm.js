import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  position: relative;
  justify-content: center;
  align-items: center;

  label,
  input,
  select,
  button {
    padding: 0.25rem;
  }

  input,
  select,
  button {
    border: 1px solid darkmagenta;
    margin: 0.25rem;
    border-radius: 5px;
    height: 4vh;
  }

  input {
    width: 100%;
  }

  select {
    margin: 0.25rem 0;
  }

  button {
    background-color: darkmagenta;
    color: white;
  }
`;
