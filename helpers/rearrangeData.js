export function rearrangeData(array) {
  const allCategories = array.map((word) => word.category);

  const uniqueCategories = Array.from(new Set(allCategories));

  const singleCategories = uniqueCategories.map((category) => {
    return (category = array.filter((word) => word.category === category));
  });

  const wordsInCategories = singleCategories.map((item) => {
    return {
      categoryName: item[0].category,
      categoryWords: item,
    };
  });

  return wordsInCategories;
}
