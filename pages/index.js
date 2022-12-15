import CategoryOverview from "../components/CategoryOverview/CategoryOverview";
import Header from "../components/Header/Header";
import NewWordForm from "../components/NewWordForm/NewWordForm";
import Link from "next/link";
import { words } from "../dummydata/words";
import { nanoid } from "nanoid";
import { Fragment } from "react";
import { useLocalStorage } from "../helpers/hooks";
import { rearrangeData } from "../helpers/rearrangeData";
import styled from "styled-components";

export default function Home() {
  const [allWords, setAllWords] = useLocalStorage("allWords", words);

  if (!allWords) {
    return null;
  }
  const wordsInCategories = rearrangeData(allWords);

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
          <Fragment key={item.categoryName}>
            <StyledLink href={`/${item.categoryName}`}>
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
