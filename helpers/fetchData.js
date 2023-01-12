export default async function fetchData() {
  try {
    const response = await fetch("/api/words");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
