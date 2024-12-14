import axios from "axios";

const fetchData = async (text) => {
  const EMPTY_TEXT_ERROR = "Please enter some text before submitting.";
  const DEFAULT_API_ERROR = "Error analyzing tone. Please try again.";

  if (!text.trim()) {
    throw new Error(EMPTY_TEXT_ERROR);
  }

  try {
    const response = await axios.post("https://api.sapling.ai/api/v1/tone", {
      key: process.env.REACT_APP_SAPLING_API_KEY,
      text,
    });

    return response.data;
  } catch (err) {
    const msg = err.response?.data?.msg || DEFAULT_API_ERROR;
    throw new Error(msg);
  }
};

export default fetchData;
