import "./QuestionCard.scss";
import { Question } from "../../types/types";
import { formatText } from "../../utils/format-text";

const QuestionCard = ({
  currentQuestion,
  handleAnswer,
}: {
  currentQuestion: Question;
  handleAnswer: (isCorrect: boolean) => void;
}) => {
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
                handleAnswer(answer === currentQuestion.correct_answer)
              }
            >
              {formatText(answer)}
            </button>
          ))}
      </div>
    </div>
  );
};

export default QuestionCard;
