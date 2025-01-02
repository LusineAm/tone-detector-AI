import { useState } from "react";
import Form from "./components/form/Form";
import ResultList from "./components/resultList/ResultList";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import mockData from "./services/mockData";
import handleFormSubmit from "./services/handleFormSubmit";

import "./App.css";

interface AnalysisResult {
  overall: [number, string, string][];
  sents: string[];
}

const App: React.FC = () => {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
    mockData,
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = (text: string) => {
    handleFormSubmit(text, setAnalysisResult, setErrorMessage);
  };

  return (
    <div className="container">
      <h1>Emotional Tone Detection</h1>
      <p>Detect the tone of a given sentence</p>
      <Form onSubmit={onSubmit} />
      {analysisResult && <ResultList analysisResult={analysisResult} />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default App;
