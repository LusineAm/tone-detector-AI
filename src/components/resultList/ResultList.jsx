import "./resultList.css";

const ResultList = ({ result }) => {
  return (
    //display result from api
    <div>
      {result?.sents && (
        <div>
          <h3>Your Sentence</h3>
          <span>{result.sents}</span>
        </div>
      )}
      <h3>Detected Tones</h3>
      <ul>
        {result.overall.map((tone, index) => (
          <li key={index}>
            <strong>
              {tone[1]} {tone[2]}
            </strong>
            : {Math.round(tone[0] * 100)}% confidence
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
