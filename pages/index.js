import CategoryOverview from "../components/CategoryOverview/CategoryOverview";
import Header from "../components/Header/Header";
import NewWordForm from "../components/NewWordForm/NewWordForm";
import Link from "next/link";
import { words } from "../dummydata/words";
import { nanoid } from "nanoid";
import { Fragment } from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [allWords, setAllWords] = useState(words);

  const allCategories = words.map((word) => word.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  const singleCategories = uniqueCategories.map((category) => {
    return (category = words.filter((word) => word.category === category));
  });

  const wordsInCategories = singleCategories.map((item) => {
    return {
      id: nanoid(),
      slug: item[0].category,
      categoryName: item[0].category,
      categoryWords: item,
    };
  });

  console.log("all Words: ", allWords);

  async function pushNewWord(newWord) {
    setAllWords([...allWords, { id: nanoid(), ...newWord }]);
  }

  return (
    <>
      <Header />
      <StyledMain>
        <NewWordForm onCreateNew={pushNewWord} />
        {wordsInCategories.map((item) => (
          <Fragment key={item.id}>
            <StyledLink href={`/${item.slug}`}>
              <CategoryOverview
                name={item.categoryName}
                number={item.categoryWords.length}
              />
            </StyledLink>
          </Fragment>
        ))}
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin-bottom: 11vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
