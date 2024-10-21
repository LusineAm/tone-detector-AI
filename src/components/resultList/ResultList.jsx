import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../charts/PieChart";
import BarChart from "../charts/BarChart";

import "./resultList.css";

Chart.register(CategoryScale);

const ResultList = ({ result }) => {
  const data = result.overall.map((tone) => ({
    percent: Math.round(tone[0] * 100),
    emotion: tone[1],
    emoji: tone[2],
  }));

  // prepare chart data for chart component
  const chartData = {
    datasets: [
      {
        label: "Emotional Distribution",
        data: data.map((item) => item.percent),
        backgroundColor: ["#F8D94A", "#59E3A5", "#40BDF5"],
      },
    ],
    labels: data.map(
      (item) => `${item.emotion} ${item.emoji}: ${item.percent}% confidence`
    ),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
      },
    },
  };

  return (
    <div>
      {result?.sents && (
        <div>
          <h3>Your Sentence</h3>
          <span>{result.sents}</span>
        </div>
      )}
      <h3>Detected Tones</h3>
      {/* list of detected tones */}
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
      {/* charts of detected tones */}
      <div className="charts">
        <div className="chart">
          <PieChart chartData={chartData} options={options} />
        </div>
        <div className="chart">
          <BarChart chartData={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ResultList;
