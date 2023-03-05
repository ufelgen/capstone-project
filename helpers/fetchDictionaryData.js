export default async function fetchDictionaryData(searchTerm) {
  try {
    const response = await fetch(`/api/dictionary/${searchTerm}`);
    if (response) {
      const data = await response.json();
      console.log("huhu", data);
      // wird ausgelesen, aber ist catch-Fall der API-Route
      return data;
    } else {
      return ["search for ", searchTerm, " was unsuccessful"];
    }
  } catch (error) {
    console.error(error);
  }
}
