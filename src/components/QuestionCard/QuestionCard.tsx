import "./QuestionCard.scss";
import { Question } from "../../types/types";
import { formatText } from "../../utils/format-text";
import { useEffect, useState } from "react";

const QuestionCard = ({
  currentQuestion,
  handleAnswer,
}: {
  currentQuestion: Question;
  handleAnswer: (isCorrect: boolean) => void;
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [answered, setAnswered] = useState<boolean>(false);

  useEffect(() => {
    setTimeLeft(10);
    setAnswered(false);
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft > 0 && !answered) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !answered) {
      handleAnswer(false);
      setAnswered(true);
    }
  }, [timeLeft, answered, handleAnswer]);

  const handleButtonClick = (isCorrect: boolean) => {
    handleAnswer(isCorrect);
    setAnswered(true);
  };

  return (
    <div className="questionCard">
      <span className="questionCard__type">{currentQuestion.type}</span>
      <h3 className="questionCard__question">
        {formatText(currentQuestion.question)}
      </h3>

      <div className="questionCard__answers">
        {[...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
          .sort()
          .map((answer) => (
            <button
              type="button"
              key={answer}
              onClick={() =>
                handleButtonClick(answer === currentQuestion.correct_answer)
              }
            >
              {formatText(answer)}
            </button>
          ))}
      </div>
      <div className="questionCard__timer">
        <p>{timeLeft}</p>
      </div>
    </div>
  );
};

export default QuestionCard;
