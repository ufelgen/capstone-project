import mongoose from "mongoose";

const { Schema } = mongoose;
const wordSchema = new Schema({
  user: { type: String, required: false },
  category: { type: String, required: true },
  base: {
    language: { type: String, required: true },
    flag: { type: String, required: true },
    translation: { type: String, required: true },
  },
  notes: { type: String, required: false },
  query1: {
    language: { type: String, required: true },
    flag: { type: String, required: true },
    translation: { type: String, required: true },
    declension: {
      specification: { type: String, required: false },
      singular: {
        nominative: { type: String, required: false },
        genitive: { type: String, required: false },
        dative: { type: String, required: false },
        accusative: { type: String, required: false },
        locative: { type: String, required: false },
        instrumental: { type: String, required: false },
      },
      plural: {
        nominative: { type: String, required: false },
        genitive: { type: String, required: false },
        dative: { type: String, required: false },
        accusative: { type: String, required: false },
        locative: { type: String, required: false },
        instrumental: { type: String, required: false },
      },
    },
    conjugation: {
      present: [
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
      ],
      past: [
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
      ],
      future: [
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
        {
          person: { type: String, required: false },
          pronouns: { type: String, required: false },
          verbForm: { type: String, required: false },
        },
      ],
    },
    gender: { type: String },
  },
  query2: {
    language: { type: String, required: false },
    flag: { type: String, required: false },
    translation: { type: String, required: false },
  },
});

// muss eventuell umbenannt werden, um mit der Datenbank zu kommunizieren
const Word = mongoose.models.Word || mongoose.model("Word", wordSchema);

export default Word;
