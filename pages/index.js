import CategoryAnimals from "../components/CardSection/CategoryAnimals";
import CategoryOverview from "../components/CategoryOverview/CategoryOverview";
import { words } from "../dummydata/words";
import { nanoid } from "nanoid";
import Link from "next/link";

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
  console.log(wordsInCategories);

  return (
    <>
      {wordsInCategories.map((item) => (
        <Link href={`/${item.slug}`}>
          <CategoryOverview
            key={item.key}
            name={item.categoryName}
            number={item.categoryWords.length}
            wordsInCategories={wordsInCategories}
          />
        </Link>
      ))}
    </>
  );
}
