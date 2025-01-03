import { useState } from "react";
import "./form.css";

interface FormProps {
  onSubmit: (inputText: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [inputText, setInputText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputText);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter text to analyze tone"
      />
      <button type="submit">Check Tone</button>
    </form>
  );
};

export default Form;
