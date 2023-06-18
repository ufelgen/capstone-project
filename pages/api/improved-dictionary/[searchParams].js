export default async function handler(req, res) {
  const { searchParams } = req.query;
  const searchTerm = searchParams.split("-")[0];
  let languageFrom = searchParams.split("-")[1];
  let languageTo = searchParams.split("-")[2];

  function getCorrectCountryCodes() {
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

  getCorrectCountryCodes();

  try {
    const response = await fetch(
      // `https://api.pons.com/v1/dictionary?q=${searchTerm}&l=${languageFrom}${languageTo}&in=${languageFrom}`,

      `https://api.pons.com/v1/dictionary?q=${searchTerm}&l=ensl`,

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
