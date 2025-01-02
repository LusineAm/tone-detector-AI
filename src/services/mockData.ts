export interface AnalysisResult {
  overall: [number, string, string][];
  sents: string[];
}

const mockData: AnalysisResult = {
  overall: [
    [0.93, "happy", "😊"],
    [0.05, "admiring", "😲"],
    [0.02, "excited", "😀"],
  ],
  sents: ["This project is amazing (example from mock data)"],
};

export default mockData;
