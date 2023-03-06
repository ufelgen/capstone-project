export default async function handler(req, res) {
  const { searchTerm } = req.query;

  try {
    const response = await fetch(
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
