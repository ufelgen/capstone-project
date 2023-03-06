export default async function fetchDictionaryData(searchTerm) {
  try {
    const response = await fetch(`/api/dictionary/${searchTerm}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return ["search for ", searchTerm, " was unsuccessful"];
    }
  } catch (error) {
    console.error(error);
  }
}
