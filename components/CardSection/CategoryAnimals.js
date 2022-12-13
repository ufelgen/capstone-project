import { words } from "../../dummydata/words";
import { Fragment } from "react";
import styled from "styled-components";

export default function CardSection() {
  const allCategories = words.map((word) => word.category);
  const singleCategories = Array.from(new Set(allCategories));
  const animals = words.filter((word) => word.category === "animals");

  return (
    <Fragment>
      <StyledHeader>{singleCategories[0]}</StyledHeader>
      <CardWrapper>
        {animals.map((animal) => (
          <Fragment key={animal.id}>
            <StyledCard>
              <p>{animal.base.translation}</p>
              <p>{animal.query1.translation}</p>
            </StyledCard>
          </Fragment>
        ))}
      </CardWrapper>
    </Fragment>
  );
}

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
`;

const StyledCard = styled.div`
  padding: 10px;
  margin: 10px 12px;
  background-color: white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  text-decoration: none;
  list-style: none;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  p {
    padding: 7px 0px;
  }
`;

const StyledHeader = styled.h1`
  margin: 10px;
  background-color: White;
  color: darkmagenta;
  text-align: center;
`;
