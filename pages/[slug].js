import styled from "styled-components";
import { useRouter } from "next/router";
// { wordsInCategories } from ".";
import { Fragment } from "react";
import { nanoid } from "nanoid";
import Footer from "../components/Footer/Footer";

export default function Category({ allWords }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log("all Words: ", allWords);

  const allCategories = allWords.map((word) => word.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  const singleCategories = uniqueCategories.map((category) => {
    return (category = allWords.filter((word) => word.category === category));
  });

  const wordsInCategories = singleCategories.map((item) => {
    return {
      id: nanoid(),
      slug: item[0].category,
      categoryName: item[0].category,
      categoryWords: item,
    };
  });

  const currentCategory = wordsInCategories.find(
    (category) => category.slug === slug
  );

  if (!currentCategory) {
    return <p>not found </p>;
  }

  const { categoryName, categoryWords } = currentCategory;

  return (
    <Fragment>
      <StyledHeading>{categoryName}</StyledHeading>
      <CardWrapper>
        {categoryWords.map((word) => (
          <Fragment key={word.id}>
            <StyledCard>
              <p>
                <Flag>{word.base.flag}</Flag>
                {word.base.translation}
              </p>
              <p>
                <Flag>{word.query1.flag}</Flag>
                {word.query1.translation}
                <Gender>{word.query1.gender}</Gender>
              </p>
            </StyledCard>
          </Fragment>
        ))}
      </CardWrapper>
      <Footer />
    </Fragment>
  );
}

const Gender = styled.span`
  padding-left: 10px;
  font-style: italic;
`;

const Flag = styled.span`
  padding-right: 10px;
`;

const CardWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  margin-bottom: 11vh;
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
  cursor: default;
  p {
    padding: 7px 0px;
  }
`;

const StyledHeading = styled.h2`
  margin: 10px;
  background-color: White;
  color: darkmagenta;
  text-align: center;
  padding: 7px;
  cursor: default;
`;
