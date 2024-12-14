import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../charts/PieChart";
import BarChart from "../charts/BarChart";
import { mapData, chartConfig, chartOptions } from "../../helpers/chartHelper";

import "./resultList.css";

Chart.register(CategoryScale);

const ResultList = ({ analysisResult }) => {
  const data = mapData(analysisResult.overall);
  const chartData = chartConfig(data);

  return (
    <div>
      {analysisResult?.sents && (
        <div>
          <h3>Your Sentence</h3>
          <span>{analysisResult.sents}</span>
        </div>
      )}
      <h3>Detected Tones</h3>
      <ul>
        {data.map((tone, index) => (
          <li key={index}>
            <strong>
              {tone.emotion} {tone.emoji}
            </strong>
            : {tone.percent}% confidence
          </li>
        ))}
      </ul>
      <div className="charts">
        <div className="chart">
          <PieChart chartData={chartData} options={chartOptions} />
        </div>
        <div className="chart">
          <BarChart chartData={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ResultList;
