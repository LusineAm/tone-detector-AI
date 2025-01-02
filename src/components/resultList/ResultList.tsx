import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../charts/PieChart";
import BarChart from "../charts/BarChart";
import {
  mapData,
  chartConfig,
  pieChartOptions,
  barChartOptions,
} from "../../helpers/chartHelper";

import "./resultList.css";

Chart.register(CategoryScale);

interface AnalysisResult {
  overall: [number, string, string][];
  sents: string[];
}

interface ToneData {
  percent: number;
  emotion: string;
  emoji: string;
}

interface ResultListProps {
  analysisResult: AnalysisResult;
}

const ResultList: React.FC<ResultListProps> = ({ analysisResult }) => {
  const data: ToneData[] = mapData(analysisResult.overall);
  const chartData = chartConfig(data);

  return (
    <div>
      {analysisResult?.sents && (
        <div>
          <h3>Your Sentence</h3>
          <span>{analysisResult.sents.join(", ")}</span>
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
          <PieChart chartData={chartData} options={pieChartOptions} />
        </div>
        <div className="chart">
          <BarChart chartData={chartData} options={barChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ResultList;
