import fetchData from "./fetchData";

const handleFormSubmit = async (text, setResult, setError) => {
  try {
    const data = await fetchData(text);
    setResult(data);
    setError(null);
  } catch (err) {
    setError(err.message);
    setResult(null);
  }
};

export default handleFormSubmit;
