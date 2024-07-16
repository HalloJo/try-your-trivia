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
    <div>
      <span>{currentQuestion.type}</span>
      <h3>{formatText(currentQuestion.question)}</h3>
      <div>
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
