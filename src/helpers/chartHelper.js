export const mapData = (overall) =>
  overall.map(([confidence, emotion, emoji]) => ({
    percent: Math.round(confidence * 100),
    emotion,
    emoji,
  }));

export const chartConfig = (data) => ({
  datasets: [
    {
      label: "Emotional Distribution",
      data: data.map((item) => item.percent),
      backgroundColor: ["#F8D94A", "#59E3A5", "#40BDF5"],
    },
  ],
  labels: data.map(
    (item) => `${item.emotion} ${item.emoji}: ${item.percent}% confidence`,
  ),
});

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
    },
  },
};
