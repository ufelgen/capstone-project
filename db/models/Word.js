import mongoose from "mongoose";

const { Schema } = mongoose;
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
      singular: {
        nominative: { type: String },
        genitive: { type: String },
        dative: { type: String },
        accusative: { type: String },
        locative: { type: String },
        instrumental: { type: String },
      },
      plural: {
        nominative: { type: String },
        genitive: { type: String },
        dative: { type: String },
        accusative: { type: String },
        locative: { type: String },
        instrumental: { type: String },
      },
    },
    conjugation: {
      present: [
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
      ],
      past: [
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
      ],
      future: [
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
        {
          person: { type: String },
          pronouns: { type: String },
          verbForm: { type: String },
        },
      ],
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
