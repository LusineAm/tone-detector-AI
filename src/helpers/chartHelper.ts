import { ChartOptions } from "chart.js";

interface ToneData {
  percent: number;
  emotion: string;
  emoji: string;
}

enum Color {
  Yellow = "#F8D94A",
  Green = "#59E3A5",
  Blue = "#40BDF5",
}

type OverallData = [number, string, string][];

export const mapData = (overall: OverallData): ToneData[] =>
  overall.map(([confidence, emotion, emoji]) => ({
    percent: Math.round(confidence * 100),
    emotion,
    emoji,
  }));

export const chartConfig = (data: ToneData[]) => ({
  datasets: [
    {
      label: "Emotional Distribution",
      data: data.map((item) => item.percent),
      backgroundColor: [Color.Yellow, Color.Green, Color.Blue],
    },
  ],
  labels: data.map(
    (item) => `${item.emotion} ${item.emoji}: ${item.percent}% confidence`,
  ),
});

export const pieChartOptions: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
    },
  },
};

export const barChartOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
    },
  },
};
