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
              <p>
                <Flag>{animal.base.flag}</Flag>
                {animal.base.translation}
              </p>
              <p>
                <Flag>{animal.query1.flag}</Flag>
                {animal.query1.translation}
                <Gender>{animal.query1.gender}</Gender>
              </p>
            </StyledCard>
          </Fragment>
        ))}
      </CardWrapper>
    </Fragment>
  );
}

const Gender = styled.span`
  padding-left: 0.625rem;
  font-style: italic;
`;

const Flag = styled.span`
  padding-right: 0.625rem;
`;

const CardWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
`;

const StyledCard = styled.div`
  padding: 0.625rem;
  margin: 0.625rem 0.75rem;
  background-color: white;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  text-decoration: none;
  list-style: none;
  height: auto;
  border: 1px solid darkmagenta;
  box-shadow: 4px 4px 4px 0.7px rgba(130, 8, 130, 0.43);
  p {
    padding: 0.43rem 0;
  }
`;

const StyledHeader = styled.h2`
  margin: 0.625rem;
  background-color: White;
  color: darkmagenta;
  text-align: center;
  padding: 0.43rem;
`;
