import { nanoid } from "nanoid";

export const words = [
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "animal" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "žival",
      declination: {
        nominative: "žival",
      },
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "cat" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "mačka",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "dog" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "pes",
      gender: "m",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "rabbit" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "zajec",
      gender: "m",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "duck" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "raca",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "bear" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "medved",
      gender: "m",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "monkey" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "opica",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "sheep" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "ovca",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "bison" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "bizon",
      gender: "m",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "pig" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "prašič",
      gender: "m",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "walrus" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "mrož",
      gender: "m",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "dinosaur" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "dinozaver",
      gender: "m",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "cow" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "krava",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "otter" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "vidra",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "goat" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "koza",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "fruits",
    base: { language: "english", flag: "🇬🇧", translation: "fruit" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "sadež",
      gender: "m",
    },
  },
  {
    id: nanoid(),
    category: "fruits",
    base: { language: "english", flag: "🇬🇧", translation: "apple" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "jabolko",
      gender: "n",
    },
  },
  {
    id: nanoid(),
    category: "fruits",
    base: { language: "english", flag: "🇬🇧", translation: "pear" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "hruška",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "fruits",
    base: { language: "english", flag: "🇬🇧", translation: "strawberry" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "jagoda",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "colours",
    base: { language: "english", flag: "🇬🇧", translation: "colour" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "barva",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "colours",
    base: { language: "english", flag: "🇬🇧", translation: "yellow" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "rumen",
    },
  },
  {
    id: nanoid(),
    category: "colours",
    base: { language: "english", flag: "🇬🇧", translation: "blue" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "moder",
    },
  },
  {
    id: nanoid(),
    category: "verbs",
    base: { language: "english", flag: "🇬🇧", translation: "to need" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "potrebovati",
      tag: "infinitive",
    },
  },
  {
    id: nanoid(),
    category: "verbs",
    base: { language: "english", flag: "🇬🇧", translation: "to forget" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "pozabiti",
      tag: "infinitive",
    },
  },
  {
    id: nanoid(),
    category: "verbs",
    base: { language: "english", flag: "🇬🇧", translation: "to learn" },
    query1: {
      id: nanoid(),
      language: "slovenian",
      flag: "🇸🇮",
      translation: "učiti se",
      tag: "infinitive",
    },
  },
];
