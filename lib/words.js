import { nanoid } from "nanoid";

export const words = [
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "animal" },
    notes:
      "Beside nouns ending with –ost, there are also other nouns that fall into the 2.1. Feminine declension group. Such as: jesen (autumn), kokoš (chicken), miš (mouse), nit (thread), obrv (eyebrow), pamet (intelligence), perut(wing), polnoč (midnight), pomlad (spring), smrt (death) zavest (consciousness), žival (animal)…",

    query1: {
      language: "slovenian",
      flag: "🇸🇮",
      translation: "žival",
      declension: {
        specification: "second female declension",
        singular: {
          nominative: "žival",
          genitive: "živali",
          dative: "živali",
          accusative: "žival",
          locative: "živali",
          instrumental: "živaljo",
        },
        plural: {
          nominative: "živali",
          genitive: "živali",
          dative: "živalim",
          accusative: "živali",
          locative: "živalih",
          instrumental: "živalmi",
        },
      },
      gender: "f",
    },
  },
  {
    id: nanoid(),
    category: "animals",
    base: { language: "english", flag: "🇬🇧", translation: "cat" },
    query1: {
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
      language: "slovenian",
      flag: "🇸🇮",
      translation: "potrebovati",
    },
  },
  {
    id: nanoid(),
    category: "verbs",
    base: { language: "english", flag: "🇬🇧", translation: "to forget" },
    query1: {
      language: "slovenian",
      flag: "🇸🇮",
      translation: "pozabiti",
    },
  },
  {
    id: nanoid(),
    category: "verbs",
    base: { language: "english", flag: "🇬🇧", translation: "to learn" },
    query1: {
      language: "slovenian",
      flag: "🇸🇮",
      translation: "učiti se",
    },
  },
  {
    id: nanoid(),
    category: "verbs",
    base: { language: "english", flag: "🇬🇧", translation: "to bake" },
    query1: {
      language: "slovenian",
      flag: "🇸🇮",
      translation: "peči",
      conjugation: {
        present: [
          {
            person: "firstSingular",
            pronouns: "jaz",
            verbForm: "pečem",
          },
          {
            person: "secondSingular",
            pronouns: "ti",
            verbForm: "pečeš",
          },
          {
            person: "thirdSingular",
            pronouns: "on/ona",
            verbForm: "peče",
          },
          {
            person: "firstPlural",
            pronouns: "mi/me",
            verbForm: "pečemo",
          },
          {
            person: "firstDual",
            pronouns: "midva/midve",
            verbForm: "pečeva",
          },
          {
            person: "secondPlural",
            pronouns: "vi/ve",
            verbForm: "pečete",
          },
          {
            person: "secondDual",
            pronouns: "vidva/vidve",
            verbForm: "pečeta",
          },
          {
            person: "thirdPlural",
            pronouns: "oni/one",
            verbForm: "pečejo",
          },
          {
            person: "thirdDual",
            pronouns: "onadva/onidve",
            verbForm: "pečeta",
          },
        ],
        past: [
          {
            person: "firstSingular",
            pronouns: "jaz",
            verbForm: "sem pekel (m) / pekla (f)",
          },
          {
            person: "secondSingular",
            pronouns: "ti",
            verbForm: "si pekel (m) / pekla (f)",
          },
          {
            person: "thirdSingularMasc",
            pronouns: "on",
            verbForm: "je pekel",
          },
          {
            person: "thirdSingularFem",
            pronouns: "ona",
            verbForm: "je pekla",
          },
          {
            person: "firstPluralMix",
            pronouns: "mi",
            verbForm: "smo pekli",
          },
          {
            person: "firstPluralFem",
            pronouns: "me",
            verbForm: "smo pekle",
          },
          {
            person: "firstDualMix",
            pronouns: "midva",
            verbForm: "sva pekla",
          },
          {
            person: "firstDualFem",
            pronouns: "midve",
            verbForm: "sva pekli",
          },
          {
            person: "secondPluralMix",
            pronouns: "vi",
            verbForm: "ste pekli",
          },
          {
            person: "secondPluralFem",
            pronouns: "ve",
            verbForm: "ste pekle",
          },
          {
            person: "secondDualMix",
            pronouns: "vidva",
            verbForm: "sta pekla",
          },
          {
            person: "secondDualFem",
            pronouns: "vidve",
            verbForm: "sta pekli",
          },
          {
            person: "thirdPluralMix",
            pronouns: "oni",
            verbForm: "so pekli",
          },
          {
            person: "thirdPluralFem",
            pronouns: "one",
            verbForm: "so pekle",
          },
          {
            person: "thirdDualMix",
            pronouns: "onadva",
            verbForm: "sta pekla",
          },
          {
            person: "thirdDualFem",
            pronouns: "onidve",
            verbForm: "sta pekli",
          },
        ],
        future: [
          {
            person: "firstSingular",
            pronouns: "jaz",
            verbForm: "bom pekel (m) / pekla (f)",
          },
          {
            person: "secondSingular",
            pronouns: "ti",
            verbForm: "boš pekel (m) / pekla (f)",
          },
          {
            person: "thirdSingularMasc",
            pronouns: "on",
            verbForm: "bo pekel",
          },
          {
            person: "thirdSingularFem",
            pronouns: "ona",
            verbForm: "bo pekla",
          },
          {
            person: "firstPluralMix",
            pronouns: "mi",
            verbForm: "bomo pekli",
          },
          {
            person: "firstPluralFem",
            pronouns: "me",
            verbForm: "bomo pekle",
          },
          {
            person: "firstDualMix",
            pronouns: "midva",
            verbForm: "bova pekla",
          },
          {
            person: "firstDualFem",
            pronouns: "midve",
            verbForm: "bova pekli",
          },
          {
            person: "secondPluralMix",
            pronouns: "vi",
            verbForm: "boste pekli",
          },
          {
            person: "secondPluralFem",
            pronouns: "ve",
            verbForm: "boste pekle",
          },
          {
            person: "secondDualMix",
            pronouns: "vidva",
            verbForm: "bosta pekla",
          },
          {
            person: "secondDualFem",
            pronouns: "vidve",
            verbForm: "bosta pekli",
          },
          {
            person: "thirdPluralMix",
            pronouns: "oni",
            verbForm: "bodo/bojo pekli",
          },
          {
            person: "thirdPluralFem",
            pronouns: "one",
            verbForm: "bodo/bojo pekle",
          },
          {
            person: "thirdDualMix",
            pronouns: "onadva",
            verbForm: "bosta pekla",
          },
          {
            person: "thirdDualFem",
            pronouns: "onidve",
            verbForm: "bosta pekli",
          },
        ],
      },
    },
  },
];
