import dbConnect from "../../../db/dbConnect";
import Word from "../../../db/models/Word";

export default async function handler(req, res) {
  await dbConnect();

  const category = req.query.category;
  console.log("req.query", req.query);

  if (req.method === "DELETE") {
    const result = await Word.deleteMany({ category: category });
    if (result) {
      res.status(200).json({ message: "word deleted" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } else if (req.method === "PUT") {
    const updatedWord = await Word.updateMany(id, req.body, {
      returnDocument: "after",
    });
    if (updatedWord) {
      res.status(200).json({ message: "word updated" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
}
