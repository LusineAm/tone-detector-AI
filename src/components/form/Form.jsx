import { useState } from "react";
import axios from "axios";

import "./form.css";

export default function Form({ setResult, setError }) {
  const [text, setText] = useState(""); // state for input text

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // prevent submission if the text is empty
    if (!text.trim()) {
      setError("Please enter some text before submitting.");
      setResult(null);
      return;
    }

    try {
      // clear old results and errors befre new request
      setResult(null);
      setError(null);

      const response = await axios.post("https://api.sapling.ai/api/v1/tone", {
        key: process.env.REACT_APP_SAPLING_API_KEY, // api key from env
        text, // the text input for tone analysis
      });

      setResult(response.data); // update result
      setError(null); // clear any previous errors
    } catch (err) {
      const msg =
        err.response?.data?.msg || "Error analyzing tone. Please try again.";
      setError(msg); // set error state to display error message
      setResult(null);
    }
  };

  // handle key press for "Enter"
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e); // call the submit function
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter text to analyze tone"
      />
      <button type="submit">Check Tone</button>
    </form>
  );
}
