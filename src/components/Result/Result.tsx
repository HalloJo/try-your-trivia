import "./Result.scss";

const Result = ({
  score,
  handleReset,
}: {
  score: number;
  handleReset: () => void;
}) => {
  return (
    <div className="result">
      <h1 className="result__title">Congratulations!</h1>
      <p className="result__subTitle">You finished the quiz with a score of:</p>
      <p className="result__score">{score} points</p>
      <p className="result__subTitle">
        Thank you for trying my Quizia app. <br />
        You can try again to get a better score or just for the fun of it!
      </p>
      <button className="result__button" onClick={handleReset}>
        Reset Quiz
      </button>
    </div>
  );
};

export default Result;
