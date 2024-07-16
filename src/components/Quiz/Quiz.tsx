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
    setScore(score + points);

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      handleQuizComplete(score);
    }
  };

  return (
    <div>
      <div>
        <h1>Quiz time.</h1>
        <div>
          <span>Category: {formatText(currentQuestion.category)}</span>
          <span>Difficulty: {currentQuestion.difficulty} </span>
        </div>
      </div>
      <QuestionCard
        currentQuestion={currentQuestion}
        handleAnswer={handleAnswer}
      />
      <p>{`Question ${currentQuestionIndex + 1} of ${quizData.length}`}</p>

      {/* <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
        {JSON.stringify(quizData, null, 2)}
      </pre> */}
    </div>
  );
};

export default Quiz;
