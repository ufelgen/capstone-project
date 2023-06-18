export default async function handler(req, res) {
  const { searchParams } = req.query;
  const searchTerm = searchParams.slice(0, searchParams.length - 4);
  const languageFrom = searchParams.slice(
    searchTerm.length,
    searchParams.length - 2
  );
  const languageTo = searchParams.slice(
    searchTerm.length + 2,
    searchParams.length
  );

  /*   function getCorrectCountryCodes() {
    if (languageFrom === "si") {
      languageFrom = "sl";
      console.log("1");
      return languageFrom;
    } else if (languageFrom === "gb") {
      languageFrom = "en";
      console.log("2");
      return languageFrom;
    }

    if (languageTo === "si") {
      languageTo = "sl";
      console.log("3");
      return languageTo;
    } else if (languageTo === "gb") {
      languageTo = "en";
      console.log("4");
      return languageTo;
    }
  }

  getCorrectCountryCodes(); */

  try {
    const response = await fetch(
      //`https://api.pons.com/v1/dictionary?q=${searchTerm}&l=${languageFrom}${languageTo}&in=${languageFrom}`,
      `https://api.pons.com/v1/dictionary?q=${searchTerm}&l=${languageFrom}${languageTo}`,
      //`https://api.pons.com/v1/dictionary?q=${searchParams}&l=ensl`,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Secret": process.env.X_SECRET,
        },
      }
    );
    const translation = await response.json();
    res.status(200).json(translation);
  } catch (error) {
    console.error("du kannst gar nichts", error);
    res.status(404).json({ message: "not found", details: error.message });
  }
}
