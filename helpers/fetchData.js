export default async function fetchData() {
  try {
    const response = await fetch("/api/words");
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      const data = [];
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
