import axios from "axios";

type FetchDataResponse = {
  message: string;
};

const fetchData = async (text: string): Promise<FetchDataResponse> => {
  const EMPTY_TEXT_ERROR = "Please enter some text before submitting.";
  const DEFAULT_API_ERROR = "Error analyzing tone. Please try again.";

  if (!text.trim()) {
    throw { message: EMPTY_TEXT_ERROR } as FetchDataResponse;
  }

  try {
    const response = await axios.post("https://api.sapling.ai/api/v1/tone", {
      key: process.env.REACT_APP_SAPLING_API_KEY,
      text,
    });

    return response.data;
  } catch (err) {
    const msg = err.response?.data?.msg || DEFAULT_API_ERROR;
    throw { message: msg } as FetchDataResponse;
  }
};

export default fetchData;
