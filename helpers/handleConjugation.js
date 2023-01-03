export function handleConjugation(present, participleMasc, participleFem) {
  const participleStem = participleFem.slice(0, participleFem.length - 1);

  const conjugation = {
    present: [
      {
        person: "firstSingular",
        pronouns: "jaz",
        verbForm: present + "m",
      },
      {
        person: "secondSingular",
        pronouns: "ti",
        verbForm: present + "š",
      },
      {
        person: "thirdSingular",
        pronouns: "on/ona",
        verbForm: present,
      },
      {
        person: "firstPlural",
        pronouns: "mi/me",
        verbForm: present + "mo",
      },
      {
        person: "firstDual",
        pronouns: "midva/midve",
        verbForm: present + "va",
      },
      {
        person: "secondPlural",
        pronouns: "vi/ve",
        verbForm: present + "te",
      },
      {
        person: "secondDual",
        pronouns: "vidva/vidve",
        verbForm: present + "ta",
      },
      {
        person: "thirdPlural",
        pronouns: "oni/one",
        verbForm: present + "jo",
      },
      {
        person: "thirdDual",
        pronouns: "onadva/onidve",
        verbForm: present + "ta",
      },
    ],
    past: [
      {
        person: "firstSingular",
        pronouns: "jaz",
        verbForm: "sem " + participleMasc + " (m) / " + participleFem + " (f)",
      },
      {
        person: "secondSingular",
        pronouns: "ti",
        verbForm: "si " + participleMasc + " (m) / " + participleFem + " (f)",
      },
      {
        person: "thirdSingularMasc",
        pronouns: "on",
        verbForm: "je " + participleMasc,
      },
      {
        person: "thirdSingularFem",
        pronouns: "ona",
        verbForm: "je " + participleFem,
      },
      {
        person: "firstPluralMix",
        pronouns: "mi",
        verbForm: "smo " + participleStem + "i",
      },
      {
        person: "firstPluralFem",
        pronouns: "me",
        verbForm: "smo " + participleStem + "e",
      },
      {
        person: "firstDualMix",
        pronouns: "midva",
        verbForm: "sva " + participleStem + "a",
      },
      {
        person: "firstDualFem",
        pronouns: "midve",
        verbForm: "sva " + participleStem + "i",
      },
      {
        person: "secondPluralMix",
        pronouns: "vi",
        verbForm: "ste " + participleStem + "i",
      },
      {
        person: "secondPluralFem",
        pronouns: "ve",
        verbForm: "ste " + participleStem + "e",
      },
      {
        person: "secondDualMix",
        pronouns: "vidva",
        verbForm: "sta " + participleStem + "a",
      },
      {
        person: "secondDualFem",
        pronouns: "vidve",
        verbForm: "sta " + participleStem + "i",
      },
      {
        person: "thirdPluralMix",
        pronouns: "oni",
        verbForm: "so " + participleStem + "i",
      },
      {
        person: "thirdPluralFem",
        pronouns: "one",
        verbForm: "so " + participleStem + "e",
      },
      {
        person: "thirdDualMix",
        pronouns: "onadva",
        verbForm: "sta " + participleStem + "a",
      },
      {
        person: "thirdDualFem",
        pronouns: "onidve",
        verbForm: "sta " + participleStem + "i",
      },
    ],
    future: [
      {
        person: "firstSingular",
        pronouns: "jaz",
        verbForm: "bom " + participleMasc + " (m) / " + participleFem + " (f)",
      },
      {
        person: "secondSingular",
        pronouns: "ti",
        verbForm: "boš " + participleMasc + " (m) / " + participleFem + " (f)",
      },
      {
        person: "thirdSingularMasc",
        pronouns: "on",
        verbForm: "bo " + participleMasc,
      },
      {
        person: "thirdSingularFem",
        pronouns: "ona",
        verbForm: "bo " + participleFem,
      },
      {
        person: "firstPluralMix",
        pronouns: "mi",
        verbForm: "bomo " + participleStem + "i",
      },
      {
        person: "firstPluralFem",
        pronouns: "me",
        verbForm: "bomo " + participleStem + "e",
      },
      {
        person: "firstDualMix",
        pronouns: "midva",
        verbForm: "bova " + participleStem + "a",
      },
      {
        person: "firstDualFem",
        pronouns: "midve",
        verbForm: "bova " + participleStem + "i",
      },
      {
        person: "secondPluralMix",
        pronouns: "vi",
        verbForm: "boste " + participleStem + "i",
      },
      {
        person: "secondPluralFem",
        pronouns: "ve",
        verbForm: "boste " + participleStem + "e",
      },
      {
        person: "secondDualMix",
        pronouns: "vidva",
        verbForm: "bosta " + participleStem + "a",
      },
      {
        person: "secondDualFem",
        pronouns: "vidve",
        verbForm: "bosta " + participleStem + "i",
      },
      {
        person: "thirdPluralMix",
        pronouns: "oni",
        verbForm: "bodo/bojo " + participleStem + "i",
      },
      {
        person: "thirdPluralFem",
        pronouns: "one",
        verbForm: "bodo/bojo " + participleStem + "e",
      },
      {
        person: "thirdDualMix",
        pronouns: "onadva",
        verbForm: "bosta " + participleStem + "a",
      },
      {
        person: "thirdDualFem",
        pronouns: "onidve",
        verbForm: "bosta " + participleStem + "i",
      },
    ],
  };

  return conjugation;
}
