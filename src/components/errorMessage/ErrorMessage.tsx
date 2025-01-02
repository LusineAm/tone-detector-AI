import "./errorMessage.css";

interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <div className="error">{errorMessage}</div>
);

export default ErrorMessage;
