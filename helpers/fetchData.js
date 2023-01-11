export default async function fetchData(path) {
  try {
    const response = await fetch("/api/words");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
