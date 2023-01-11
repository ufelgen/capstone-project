import dbConnect from "../../../db/dbConnect";
import Word from "../../../db/models/Word";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const words = await Word.find();

    const allWords = words.map((word) => {
      return {
        id: word._id,
        user: word.user,
        category: word.category,
        base: {
          language: word.base.language,
          flag: word.base.flag,
          translation: word.base.translation,
        },
        notes: word.notes,
        query1: {
          language: word.query1.language,
          flag: word.query1.flag,
          translation: word.query1.translation,
          declension: {
            specification: word.declension?.specification,
            singular: {
              nominative: word.declension?.singular.nominative,
              genitive: word.declension?.singular.genitive,
              dative: word.declension?.singular.dative,
              accusative: word.declension?.singular.accusative,
              locative: word.declension?.singular.locative,
              instrumental: word.declension?.singular.instrumental,
            },
            plural: {
              nominative: word.declension?.plural.nominative,
              genitive: word.declension?.plural.genitive,
              dative: word.declension?.plural.dative,
              accusative: word.declension?.plural.accusative,
              locative: word.declension?.plural.locative,
              instrumental: word.declension?.plural.instrumental,
            },
          },
          conjugation: {
            present: [
              {
                person: word.query1.conjugation?.present[0]?.person,
                pronouns: word.query1.conjugation?.present[0]?.pronouns,
                verbForm: word.query1.conjugation?.present[0]?.verbForm,
              },
              {
                person: word.query1.conjugation?.present[1]?.person,
                pronouns: word.query1.conjugation?.present[1]?.pronouns,
                verbForm: word.query1.conjugation?.present[1]?.verbForm,
              },
              {
                person: word.query1.conjugation?.present[2]?.person,
                pronouns: word.query1.conjugation?.present[2]?.pronouns,
                verbForm: word.query1.conjugation?.present[2]?.verbForm,
              },
              {
                person: word.query1.conjugation?.present[3]?.person,
                pronouns: word.query1.conjugation?.present[3]?.pronouns,
                verbForm: word.query1.conjugation?.present[3]?.verbForm,
              },
              {
                person: word.query1.conjugation?.present[4]?.person,
                pronouns: word.query1.conjugation?.present[4]?.pronouns,
                verbForm: word.query1.conjugation?.present[4]?.verbForm,
              },
              {
                person: word.query1.conjugation?.present[5]?.person,
                pronouns: word.query1.conjugation?.present[5]?.pronouns,
                verbForm: word.query1.conjugation?.present[5]?.verbForm,
              },
              {
                person: word.query1.conjugation?.present[6]?.person,
                pronouns: word.query1.conjugation?.present[6]?.pronouns,
                verbForm: word.query1.conjugation?.present[6]?.verbForm,
              },
              {
                person: word.query1.conjugation?.present[7]?.person,
                pronouns: word.query1.conjugation?.present[7]?.pronouns,
                verbForm: word.query1.conjugation?.present[7]?.verbForm,
              },
              {
                person: word.query1.conjugation?.present[8]?.person,
                pronouns: word.query1.conjugation?.present[8]?.pronouns,
                verbForm: word.query1.conjugation?.present[8]?.verbForm,
              },
            ],
            past: [
              {
                person: word.query1.conjugation?.past[0]?.person,
                pronouns: word.query1.conjugation?.past[0]?.pronouns,
                verbForm: word.query1.conjugation?.past[0]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[1]?.person,
                pronouns: word.query1.conjugation?.past[1]?.pronouns,
                verbForm: word.query1.conjugation?.past[1]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[2]?.person,
                pronouns: word.query1.conjugation?.past[2]?.pronouns,
                verbForm: word.query1.conjugation?.past[2]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[3]?.person,
                pronouns: word.query1.conjugation?.past[3]?.pronouns,
                verbForm: word.query1.conjugation?.past[3]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[4]?.person,
                pronouns: word.query1.conjugation?.past[4]?.pronouns,
                verbForm: word.query1.conjugation?.past[4]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[5]?.person,
                pronouns: word.query1.conjugation?.past[5]?.pronouns,
                verbForm: word.query1.conjugation?.past[5]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[6]?.person,
                pronouns: word.query1.conjugation?.past[6]?.pronouns,
                verbForm: word.query1.conjugation?.past[6]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[7]?.person,
                pronouns: word.query1.conjugation?.past[7]?.pronouns,
                verbForm: word.query1.conjugation?.past[7]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[8]?.person,
                pronouns: word.query1.conjugation?.past[8]?.pronouns,
                verbForm: word.query1.conjugation?.past[8]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[9]?.person,
                pronouns: word.query1.conjugation?.past[9]?.pronouns,
                verbForm: word.query1.conjugation?.past[9]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[10]?.person,
                pronouns: word.query1.conjugation?.past[10]?.pronouns,
                verbForm: word.query1.conjugation?.past[10]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[11]?.person,
                pronouns: word.query1.conjugation?.past[11]?.pronouns,
                verbForm: word.query1.conjugation?.past[11]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[12]?.person,
                pronouns: word.query1.conjugation?.past[12]?.pronouns,
                verbForm: word.query1.conjugation?.past[12]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[13]?.person,
                pronouns: word.query1.conjugation?.past[13]?.pronouns,
                verbForm: word.query1.conjugation?.past[13]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[14]?.person,
                pronouns: word.query1.conjugation?.past[14]?.pronouns,
                verbForm: word.query1.conjugation?.past[14]?.verbForm,
              },
              {
                person: word.query1.conjugation?.past[15]?.person,
                pronouns: word.query1.conjugation?.past[15]?.pronouns,
                verbForm: word.query1.conjugation?.past[15]?.verbForm,
              },
            ],
            future: [
              {
                person: word.query1.conjugation?.future[0]?.person,
                pronouns: word.query1.conjugation?.future[0]?.pronouns,
                verbForm: word.query1.conjugation?.future[0]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[1]?.person,
                pronouns: word.query1.conjugation?.future[1]?.pronouns,
                verbForm: word.query1.conjugation?.future[1]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[2]?.person,
                pronouns: word.query1.conjugation?.future[2]?.pronouns,
                verbForm: word.query1.conjugation?.future[2]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[3]?.person,
                pronouns: word.query1.conjugation?.future[3]?.pronouns,
                verbForm: word.query1.conjugation?.future[3]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[4]?.person,
                pronouns: word.query1.conjugation?.future[4]?.pronouns,
                verbForm: word.query1.conjugation?.future[4]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[5]?.person,
                pronouns: word.query1.conjugation?.future[5]?.pronouns,
                verbForm: word.query1.conjugation?.future[5]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[6]?.person,
                pronouns: word.query1.conjugation?.future[6]?.pronouns,
                verbForm: word.query1.conjugation?.future[6]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[7]?.person,
                pronouns: word.query1.conjugation?.future[7]?.pronouns,
                verbForm: word.query1.conjugation?.future[7]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[8]?.person,
                pronouns: word.query1.conjugation?.future[8]?.pronouns,
                verbForm: word.query1.conjugation?.future[8]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[9]?.person,
                pronouns: word.query1.conjugation?.future[9]?.pronouns,
                verbForm: word.query1.conjugation?.future[9]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[10]?.person,
                pronouns: word.query1.conjugation?.future[10]?.pronouns,
                verbForm: word.query1.conjugation?.future[10]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[11]?.person,
                pronouns: word.query1.conjugation?.future[11]?.pronouns,
                verbForm: word.query1.conjugation?.future[11]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[12]?.person,
                pronouns: word.query1.conjugation?.future[12]?.pronouns,
                verbForm: word.query1.conjugation?.future[12]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[13]?.person,
                pronouns: word.query1.conjugation?.future[13]?.pronouns,
                verbForm: word.query1.conjugation?.future[13]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[14]?.person,
                pronouns: word.query1.conjugation?.future[14]?.pronouns,
                verbForm: word.query1.conjugation?.future[14]?.verbForm,
              },
              {
                person: word.query1.conjugation?.future[15]?.person,
                pronouns: word.query1.conjugation?.future[15]?.pronouns,
                verbForm: word.query1.conjugation?.future[15]?.verbForm,
              },
            ],
          },
          gender: word.query1?.gender,
        },
        query2: {
          language: word.query2?.language,
          flag: word.query2?.flag,
          translation: word.query2?.translation,
        },
      };
    });

    res.status(200).json(allWords);
  } else if (req.method === "POST") {
    const data = req.body;

    try {
      const newWord = await Word.create(data);
      res.status(201).json(newWord);
    } catch (error) {
      res.status(400).json("Data could not be processed", { error });
    }
  }
}
