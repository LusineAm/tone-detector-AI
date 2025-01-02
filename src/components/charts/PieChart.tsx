import { Pie } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

interface PieChartProps {
  chartData: ChartData<"pie">;
  options?: ChartOptions<"pie">;
}

const PieChart: React.FC<PieChartProps> = ({ chartData, options }) => {
  return <Pie data={chartData} options={options} />;
};

export default PieChart;
