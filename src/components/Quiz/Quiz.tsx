import { useState } from "react";
import "./Quiz.scss";
import { Question } from "../../types/types";
import QuestionCard from "../QuestionCard/QuestionCard";
import { formatText } from "../../utils/format-text";

const Quiz = ({
  quizData,
  handleQuizComplete,
}: {
  quizData: Question[];
  handleQuizComplete: (finalScore: number) => void;
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState(0);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswer = (isCorrect: boolean) => {
    let points = 0;
    if (currentQuestion.type === "boolean") {
      points = isCorrect ? 5 : 0;
    } else if (currentQuestion.type === "multiple") {
      points = isCorrect ? 10 : 0;
    }
    setScore((prevScore) => prevScore + points);

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      handleQuizComplete(score);
    }
  };

  return (
    <div className="quiz">
      <div className="quiz__banner">
        <div className="quiz__banner_category">
          <p>Category:</p> <span>{formatText(currentQuestion.category)}</span>
        </div>
        <div className="quiz__banner_difficulty">
          <p>Difficulty:</p> <span>{currentQuestion.difficulty}</span>{" "}
        </div>
      </div>
      <QuestionCard
        currentQuestion={currentQuestion}
        handleAnswer={handleAnswer}
      />
      <p className="quiz__questions">{`Question ${
        currentQuestionIndex + 1
      } of ${quizData.length}`}</p>
    </div>
  );
};

export default Quiz;
