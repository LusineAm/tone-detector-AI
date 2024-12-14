import { useState } from "react";
import Form from "./components/form/Form";
import ResultList from "./components/resultList/ResultList";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import mockData from "./services/mockData";
import handleFormSubmit from "./services/handleFormSubmit";

import "./App.css";

const App = () => {
  const [analysisResult, setAnalysisResult] = useState(mockData);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = (text) =>
    handleFormSubmit(text, setAnalysisResult, setErrorMessage);

  return (
    <div className="container">
      <h1>Emotional Tone Detection</h1>
      <p>Detect the tone of a given sentence </p>
      <Form onSubmit={onSubmit} />
      {analysisResult && <ResultList analysisResult={analysisResult} />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default App;
