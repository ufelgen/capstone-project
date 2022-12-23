import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 10px;
  margin: 10px 12px;
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
    padding: 4px;
  }

  input,
  select,
  button {
    border: 1px solid darkmagenta;
    margin: 4px;
    border-radius: 5px;
    height: 4vh;
  }

  input {
    width: 100%;
  }

  select {
    margin: 4px 0;
  }

  button {
    background-color: darkmagenta;
    color: white;
  }
`;
