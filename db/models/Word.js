import mongoose from "mongoose";

const { Schema } = mongoose;

const declensionSchema = new Schema({
  nominative: { type: String },
  genitive: { type: String },
  dative: { type: String },
  accusative: { type: String },
  locative: { type: String },
  instrumental: { type: String },
});

const conjugationSchema = new Schema({
  person: { type: String },
  pronouns: { type: String },
  verbForm: { type: String },
});

const wordSchema = new Schema({
  user: { type: String },
  category: { type: String, required: true },
  base: {
    language: { type: String, required: true },
    flag: { type: String, required: true },
    translation: { type: String, required: true },
  },
  notes: { type: String },
  query1: {
    language: { type: String, required: true },
    flag: { type: String, required: true },
    translation: { type: String, required: true },
    declension: {
      specification: { type: String },
      singular: declensionSchema,
      plural: declensionSchema,
    },
    conjugation: {
      present: [conjugationSchema],
      past: [conjugationSchema],
      future: [conjugationSchema],
    },
    gender: { type: String },
  },
  query2: {
    language: { type: String },
    flag: { type: String },
    translation: { type: String },
    gender: { type: String },
  },
});

const Word = mongoose.models.Word || mongoose.model("Word", wordSchema);

export default Word;
