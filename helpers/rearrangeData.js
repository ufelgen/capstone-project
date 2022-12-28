import { nanoid } from "nanoid";

export function rearrangeData(words) {
  const allCategories = words.map((word) => word.category);

  const uniqueCategories = Array.from(new Set(allCategories));

  const singleCategories = uniqueCategories.map((category) => {
    return (category = words.filter((word) => word.category === category));
  });

  const wordsInCategories = singleCategories.map((item) => {
    return {
      id: nanoid(),
      categoryName: item[0].category,
      categoryWords: item,
    };
  });

  return wordsInCategories;
}
