import "./Result.scss";

const Result = ({
  score,
  handleReset,
}: {
  score: number;
  handleReset: () => void;
}) => {
  return (
    <div>
      <h1>The end!</h1>
      <p>Your score is {score}.</p>
      <button onClick={handleReset}>Reset Quiz</button>
    </div>
  );
};

export default Result;
