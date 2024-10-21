import { Pie } from "react-chartjs-2";

function PieChart({ chartData, options }) {
  return <Pie data={chartData} options={options} />;
}

export default PieChart;
