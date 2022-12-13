import CategoryOverview from "../components/CategoryOverview/CategoryOverview";
import Header from "../components/Header/Header";
import { words } from "../dummydata/words";
import { nanoid } from "nanoid";
import Link from "next/link";
import { Fragment } from "react";

const allCategories = words.map((word) => word.category);
const uniqueCategories = Array.from(new Set(allCategories));

const singleCategories = uniqueCategories.map((category) => {
  return (category = words.filter((word) => word.category === category));
});

export const wordsInCategories = singleCategories.map((item) => {
  return {
    id: nanoid(),
    slug: item[0].category,
    categoryName: item[0].category,
    categoryWords: item,
  };
});

export default function Home() {
  return (
    <>
      <Header />
      {wordsInCategories.map((item) => (
        <Fragment key={item.key}>
          <Link href={`/${item.slug}`}>
            <CategoryOverview
              name={item.categoryName}
              number={item.categoryWords.length}
            />
          </Link>
        </Fragment>
      ))}
    </>
  );
}
