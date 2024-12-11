import { useState } from "react";
import axios from "axios";

import "./form.css";

export default function Form({ setResult, setError }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("Please enter some text before submitting.");
      setResult(null);
      return;
    }

    try {
      const response = await axios.post("https://api.sapling.ai/api/v1/tone", {
        key: process.env.REACT_APP_SAPLING_API_KEY,
        text,
      });

      setResult(response.data);
      setError(null);
    } catch (err) {
      const msg =
        err.response?.data?.msg || "Error analyzing tone. Please try again.";
      setError(msg);
      setResult(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
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
