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

  let correctDirection = "";

  function getCorrectDirection() {
    if (
      (languageFrom === "en" && languageTo === "de") ||
      (languageFrom === "de" && languageTo === "en")
    ) {
      correctDirection = "deen";
    } else if (
      (languageFrom === "en" && languageTo === "fr") ||
      (languageFrom === "fr" && languageTo === "en")
    ) {
      correctDirection = "enfr";
    } else if (
      (languageFrom === "en" && languageTo === "it") ||
      (languageFrom === "it" && languageTo === "en")
    ) {
      correctDirection = "enit";
    } else if (
      (languageFrom === "en" && languageTo === "pl") ||
      (languageFrom === "pl" && languageTo === "en")
    ) {
      correctDirection = "enpl";
    } else if (
      (languageFrom === "en" && languageTo === "pt") ||
      (languageFrom === "pt" && languageTo === "en")
    ) {
      correctDirection = "enpt";
    } else if (
      (languageFrom === "en" && languageTo === "ru") ||
      (languageFrom === "ru" && languageTo === "en")
    ) {
      correctDirection = "enru";
    } else if (
      (languageFrom === "en" && languageTo === "sl") ||
      (languageFrom === "sl" && languageTo === "en")
    ) {
      correctDirection = "ensl";
    } else if (
      (languageFrom === "en" && languageTo === "es") ||
      (languageFrom === "es" && languageTo === "en")
    ) {
      correctDirection = "enes";
    } else if (
      (languageFrom === "en" && languageTo === "zh") ||
      (languageFrom === "zh" && languageTo === "en")
    ) {
      correctDirection = "enzh";
    } else if (
      (languageFrom === "de" && languageTo === "fr") ||
      (languageFrom === "fr" && languageTo === "de")
    ) {
      correctDirection = "defr";
    } else if (
      (languageFrom === "it" && languageTo === "fr") ||
      (languageFrom === "fr" && languageTo === "it")
    ) {
      correctDirection = "frit";
    } else if (
      (languageFrom === "pl" && languageTo === "fr") ||
      (languageFrom === "fr" && languageTo === "pl")
    ) {
      correctDirection = "frpl";
    } else if (
      (languageFrom === "sl" && languageTo === "fr") ||
      (languageFrom === "fr" && languageTo === "sl")
    ) {
      correctDirection = "frsl";
    } else if (
      (languageFrom === "es" && languageTo === "fr") ||
      (languageFrom === "fr" && languageTo === "es")
    ) {
      correctDirection = "esfr";
    } else if (
      (languageFrom === "zh" && languageTo === "fr") ||
      (languageFrom === "fr" && languageTo === "zh")
    ) {
      correctDirection = "frzh";
    } else if (
      (languageFrom === "de" && languageTo === "it") ||
      (languageFrom === "it" && languageTo === "de")
    ) {
      correctDirection = "deit";
    } else if (
      (languageFrom === "de" && languageTo === "pl") ||
      (languageFrom === "pl" && languageTo === "de")
    ) {
      correctDirection = "depl";
    } else if (
      (languageFrom === "de" && languageTo === "pt") ||
      (languageFrom === "pt" && languageTo === "de")
    ) {
      correctDirection = "dept";
    } else if (
      (languageFrom === "de" && languageTo === "ru") ||
      (languageFrom === "ru" && languageTo === "de")
    ) {
      correctDirection = "deru";
    } else if (
      (languageFrom === "de" && languageTo === "sl") ||
      (languageFrom === "sl" && languageTo === "de")
    ) {
      correctDirection = "desl";
    } else if (
      (languageFrom === "de" && languageTo === "es") ||
      (languageFrom === "es" && languageTo === "de")
    ) {
      correctDirection = "dees";
    } else if (
      (languageFrom === "de" && languageTo === "zh") ||
      (languageFrom === "zh" && languageTo === "de")
    ) {
      correctDirection = "dezh";
    } else if (
      (languageFrom === "it" && languageTo === "pl") ||
      (languageFrom === "pl" && languageTo === "it")
    ) {
      correctDirection = "itpl";
    } else if (
      (languageFrom === "it" && languageTo === "sl") ||
      (languageFrom === "sl" && languageTo === "it")
    ) {
      correctDirection = "itsl";
    } else if (
      (languageFrom === "it" && languageTo === "es") ||
      (languageFrom === "es" && languageTo === "it")
    ) {
      correctDirection = "esit";
    } else if (
      (languageFrom === "ru" && languageTo === "pl") ||
      (languageFrom === "pl" && languageTo === "ru")
    ) {
      correctDirection = "plru";
    } else if (
      (languageFrom === "es" && languageTo === "pl") ||
      (languageFrom === "pl" && languageTo === "es")
    ) {
      correctDirection = "espl";
    } else if (
      (languageFrom === "es" && languageTo === "pt") ||
      (languageFrom === "pt" && languageTo === "es")
    ) {
      correctDirection = "espt";
    } else if (
      (languageFrom === "es" && languageTo === "sl") ||
      (languageFrom === "sl" && languageTo === "es")
    ) {
      correctDirection = "essl";
    } else if (
      (languageFrom === "es" && languageTo === "zh") ||
      (languageFrom === "zh" && languageTo === "es")
    ) {
      correctDirection = "eszh";
    } else {
      console.log("huiiiii");
      return;
    }
  }
  // deen; enfr; enit; enpl; enpt; enru; ensl; enes; enzh; defr; frit; frpl; frsl; esfr; frzh; deit; depl; dept; deru; desl; dees; dezh; itpl; itsl; esit; plru; espl; espt; essl; eszh 30

  getCorrectDirection();

  try {
    const response = await fetch(
      `https://api.pons.com/v1/dictionary?q=${searchTerm}&l=${correctDirection}&in=${languageFrom}`,

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
