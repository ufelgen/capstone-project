import { nanoid } from "nanoid";

export const words = [
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "animal" },
    query1: {
      id: nanoid(),
      language: "🇸🇮",
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
    base: { language: "🇬🇧", translation: "cat" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "mačka", gender: "f" },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "dog" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "pes", gender: "m" },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "rabbit" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "zajec", gender: "m" },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "duck" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "raca", gender: "f" },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "bear" },
    query1: {
      id: nanoid(),
      language: "🇸🇮",
      translation: "medved",
      gender: "m",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "monkey" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "opica", gender: "f" },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "sheep" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "ovca", gender: "f" },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "bison" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "bizon", gender: "m" },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "pig" },
    query1: {
      id: nanoid(),
      language: "🇸🇮",
      translation: "prašič",
      gender: "m",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "walrus" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "mrož", gender: "m" },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "dinosaur" },
    query1: {
      id: nanoid(),
      language: "🇸🇮",
      translation: "dinozaver",
      gender: "m",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "cow" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "krava", gender: "f" },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "otter" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "vidra", gender: "f" },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "🇬🇧", translation: "goat" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "koza", gender: "f" },
  },
  {
    id: nanoid(),
    category: "fruits",
    base: { language: "🇬🇧", translation: "fruit" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "sadež", gender: "m" },
  },
  {
    id: nanoid(),
    category: "fruits",
    base: { language: "🇬🇧", translation: "apple" },
    query: {
      id: nanoid(),
      language: "🇸🇮",
      translation: "jabolko",
      gender: "n",
    },
  },
  {
    id: nanoid(),
    category: "fruits",
    base: { language: "🇬🇧", translation: "pear" },
    query1: {
      id: nanoid(),
      language: "🇸🇮",
      translation: "hruška",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "fruits",
    base: { language: "🇬🇧", translation: "strawberry" },
    query1: {
      id: nanoid(),
      language: "🇸🇮",
      translation: "jagoda",
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "colours",
    base: { language: "🇬🇧", translation: "colour" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "barva", gender: "f" },
  },
  {
    id: nanoid(),
    category: "colours",
    base: { language: "🇬🇧", translation: "yellow" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "rumen" },
  },
  {
    id: nanoid(),
    category: "colours",
    base: { language: "🇬🇧", translation: "blue" },
    query1: { id: nanoid(), language: "🇸🇮", translation: "moder" },
  },
  {
    id: nanoid(),
    category: "verbs",
    base: { language: "🇬🇧", translation: "to need" },
    query1: {
      id: nanoid(),
      language: "🇸🇮",
      translation: "potrebovati",
      tag: "infinitive",
    },
  },
  {
    id: nanoid(),
    category: "verbs",
    base: { language: "🇬🇧", translation: "to forget" },
    query1: {
      id: nanoid(),
      language: "🇸🇮",
      translation: "pozabiti",
      tag: "infinitive",
    },
  },
  {
    id: nanoid(),
    category: "verbs",
    base: { language: "🇬🇧", translation: "to learn" },
    query1: {
      id: nanoid(),
      language: "🇸🇮",
      translation: "učiti se",
      tag: "infinitive",
    },
  },
];
