import fetchData from "./fetchData";

interface SetResultFunction {
  (result: object): void;
}

interface SetErrorFunction {
  (error: string | null): void;
}

const handleFormSubmit = async (
  text: string,
  setResult: SetResultFunction,
  setError: SetErrorFunction,
): Promise<void> => {
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
