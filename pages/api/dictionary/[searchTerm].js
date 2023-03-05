export default async function handler(req, res) {
  const { searchTerm } = req.query;
  // search term wird korrekt ausgelesen

  try {
    // try-Block funktioniert nicht
    const response = await fetch(
      `https://api.pons.com/v1/dictionary?q=${searchTerm}&l=ende`,
      {
        method: "GET",
        headers: {
          //"Content-Type": "application/json",

          "X-Secret":
            "4b154aa9be6e86c71f9ecc559f88cdd261eb992656f09b6f5fc80fc10dd22bc8",
        },
      }
    );
    const translation = await response.json();
    console.log("translation in API route", translation);
    res.status(200).json(translation);
  } catch (error) {
    console.error("du kannst gar nichts", error);
    console.log("testi");
    // hier wird reingelaufen
    // Fehler: "Unexpected token N in JSON at position 0"
    res.status(404).json({ message: "not found", details: error.message });
  }
}
