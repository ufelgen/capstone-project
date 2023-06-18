export default async function handler(req, res) {
  const { searchParams } = req.query;
  const searchTerm = searchParams.split("-")[0];
  let languageFrom = searchParams.split("-")[1];
  let languageTo = searchParams.split("-")[2];

  if (languageFrom === "si") {
    let languageFrom = "sl";
    return languageFrom;
  } else if (languageFrom === "gb") {
    let languageFrom = "en";
    return languageFrom;
  }

  if (languageTo === "si") {
    let languageTo = "sl";
    return languageTo;
  } else if (languageTo === "gb") {
    let languageTo = "en";
    return languageTo;
  }

  try {
    const response = await fetch(
      `https://api.pons.com/v1/dictionary?q=${searchTerm}&l=${languageFrom}${languageTo}&in=${languageFrom}`,
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
