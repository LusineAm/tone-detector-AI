import { Bar } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

interface BarChartProps {
  chartData: ChartData<"bar">;
  options?: ChartOptions<"bar">;
}

const BarChart: React.FC<BarChartProps> = ({ chartData, options }) => {
  return <Bar data={chartData} options={options} />;
};

export default BarChart;
