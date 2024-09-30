import { useState, useEffect } from "react";

import Form from "./components/form/Form";
import ResultList from "./components/resultList/ResultList";
import ErrorMessage from "./components/errorMessage/ErrorMessage";

import "./App.css";

const App = () => {
  const [result, setResult] = useState(null); // state for storing API response
  const [error, setError] = useState(null); // state for storing any error

  useEffect(() => {
    const mockResponse = {
      overall: [
        [0.93, "happy", "😊"],
        [0.05, "admiring", "😲"],
        [0.02, "excited", "😀"],
      ],
      sents: ["This project amazing (example from mock data)"],
    };

    setResult(mockResponse); //automaticaly show mock data when the page loads
  }, []);

  return (
    <div className="container">
      <h1>Emotional Tone Detection</h1>
      <p>Detect the tone of a given sentence </p>
      <Form setResult={setResult} setError={setError} />
      {result && <ResultList result={result} />}
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default App;
