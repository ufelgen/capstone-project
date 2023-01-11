import dbConnect from "../../../db/dbConnect";
import Word from "../../../db/models/Word";

export default async function handler(req, res) {
  await dbConnect();

  const id = req.query.id;

  if (req.method === "GET") {
    try {
      const word = await Word.findById(id);
      res.status(200).json(word);
    } catch (error) {
      res.status(404).json({ message: "not found", details: error.message });
    }
  } else if (req.method === "DELETE") {
    const result = await Word.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "word deleted" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } else if (req.method === "PUT") {
    const updatedWord = await Word.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (updatedWord) {
      res.status(200).json({ message: "word updated" }, updatedWord);
    } else {
      res.status(404).json({ message: "not found" });
    }
  } else if (req.method === "PATCH") {
    const update = await Word.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (update) {
      res.status(200).json({ message: "word updated" }, update);
    } else {
      res.status(404).json({ message: "not found" });
    }
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
}
