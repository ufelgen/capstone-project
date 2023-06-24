export async function fetchDictionaryData(searchTerm) {
  try {
    const response = await fetch(`/api/dictionary/${searchTerm}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return {};
    }
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAllDictionaryData(searchParams) {
  try {
    const response = await fetch(`/api/improved-dictionary/${searchParams}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return {};
    }
  } catch (error) {
    console.error(error);
  }
}
