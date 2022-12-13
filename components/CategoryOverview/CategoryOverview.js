import styled from "styled-components";
import Link from "next/link";

export default function CategoryOverview({ name, number }) {
  return (
    <>
      <Category>
        <h3>{name}</h3>
        <p>{number} words</p>
      </Category>
    </>
  );
}

const StyledHeader = styled.h2`
  margin: 10px;
  background-color: White;
  color: darkmagenta;
  text-align: center;
  padding: 7px;
`;

const Category = styled.section`
  padding: 10px;
  margin: 10px 12px;
  background-color: white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
`;
