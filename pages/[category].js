import styled from "styled-components";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import useLocalStorageState from "use-local-storage-state";
import { rearrangeData } from "../helpers/rearrangeData";

export default function Category() {
  const router = useRouter();
  const { category } = router.query;

  const [allWords] = useLocalStorageState("allWords");

  if (!allWords) {
    return null;
  }

  const wordsInCategories = rearrangeData(allWords);

  const currentCategory = wordsInCategories.find(
    (word) => word.categoryName === category
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
